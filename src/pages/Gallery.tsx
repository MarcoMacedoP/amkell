import React, { useEffect } from "react";
import nprogress from "nprogress";

import { Header } from "../components/Header";
import { Title } from "../components/Title";
import { useGetItemFromCollection } from "../hooks/Firebase";

type Props = {};
type GalleryPageType = React.FC<Props>;

export const GalleryPage: GalleryPageType = (props) => {
  const [gallery, setGallery] = React.useState<{
    id: string;
    images: string[];
  }>();
  const [status, collection] = useGetItemFromCollection({
    collection: "Galeria",
    query: {
      key: "type",
      operator: "==",
      value: "main",
    },
    setData: setGallery,
  });

  useEffect(() => {
    collection.getCollectionData().then(() => nprogress.done());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status.isLoading) return null;

  return (
    <>
      <Header />
      <Title>Galería</Title>
      <section className="flex flex-wrap justify-start w-full">
        {gallery &&
          gallery.images.map((src, index) => (
            <img
              src={src}
              key={index}
              alt=""
              className="w-full md:w-1/2 lg:w-1/3"
            />
          ))}
      </section>
    </>
  );
};
