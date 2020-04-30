/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useParams } from "react-router-dom";
import { useGetItemFromCollection } from "../hooks/Firebase";
import nProgress from "nprogress";
import { Header } from "../components/Header";
import { Title } from "../components/Title";

type MaterialProps = {};

export const Material: React.FC<MaterialProps> = () => {
  const { slug } = useParams();
  const [material, setMaterial] = React.useState({
    caption: "",
    desc: "",
    images: [],
    name: "",
  });
  const [status, collection] = useGetItemFromCollection({
    collection: "Materiales",
    query: {
      key: "slug",
      operator: "==",
      value: slug,
    },
    setData: setMaterial,
  });

  React.useEffect(() => {
    collection.getCollectionData().then(() => nProgress.done());
  }, []);

  if (status.isLoading) return null;

  return (
    <>
      <Header />
      <article>
        <Title>{material.name}</Title>
        <p className="mb-8 -mt-8">{material.caption}</p>
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: material.desc }}
        ></div>
        <div className="flex w-full mt-4">
          {material.images.map((img) => (
            <img
              src={img}
              alt={material.name}
              className="w-full md:w-1/2 lg:w-1/3 object-cover"
            />
          ))}
        </div>
      </article>
    </>
  );
};
