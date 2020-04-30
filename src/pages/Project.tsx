import * as React from "react";
import { useParams } from "react-router-dom";
import { useGetItemFromCollection } from "../hooks/Firebase";
import nProgress from "nprogress";
import { Title } from "../components/Title";

type ProjectProps = {};

export const Project: React.FC<ProjectProps> = () => {
  const { slug } = useParams();
  const [values, setValues] = React.useState({
    desc: "",
    id: "",
    image: "",
    name: "",
    slug: "",
  });
  const [status, collection] = useGetItemFromCollection({
    collection: "Proyectos",
    query: {
      key: "slug",
      operator: "==",
      value: slug,
    },
    setData: setValues,
  });
  React.useEffect(() => {
    collection.getCollectionData().then(() => nProgress.done());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status.isLoading) return null;

  return (
    <>
      <div className="">
        <Title>{values.name}</Title>
        <div className="flex w-full">
          <img src={values.image} alt="" className="mr-4 w-1/2 object-cover" />
          <p className="w-1/2">{values.desc}</p>
        </div>
      </div>
    </>
  );
};
