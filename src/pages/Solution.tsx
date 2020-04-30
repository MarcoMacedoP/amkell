/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useParams } from "react-router-dom";
import { useGetItemFromCollection } from "../hooks/Firebase";
import nProgress from "nprogress";
import { Title } from "../components/Title";
import { Header } from "../components/Header";

type SolutionProps = {};

export const Solution: React.FC<SolutionProps> = ({}) => {
  const { slug } = useParams();
  const [solution, setSolution] = React.useState({
    caption: "",
    content: "",
    miniature: "",
    name: "",
  });
  const [status, collection] = useGetItemFromCollection({
    collection: "Soluciones",
    query: {
      key: "slug",
      operator: "==",
      value: slug,
    },
    setData: setSolution,
  });

  React.useEffect(() => {
    collection.getCollectionData().then(() => nProgress.done());
  }, []);
  if (status.isLoading) return null;
  return (
    <>
      <Header />
      <article>
        <Title>{solution.name}</Title>
        <p className="mb-8 -mt-8">{solution.caption}</p>
        <div
          className=""
          dangerouslySetInnerHTML={{ __html: solution.content }}
        ></div>
      </article>
    </>
  );
};
