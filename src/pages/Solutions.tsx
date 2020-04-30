import React, { useEffect, useState } from "react";

import { useGetCollection, useGetItemFromCollection } from "../hooks/Firebase";

import { Header } from "../components/Header";
import { Title } from "../components/Title";
import footerImage from "../assets/img/soluiciones-footer.png";
import { Button } from "../components/Button";
import nprogress from "nprogress";
import { Loading } from "../components/Loading";
//icons
import planificationIcon from "../assets/icons/planificacion.svg";
import interioresIcon from "../assets/icons/Interiores.svg";
import exterioresIcon from "../assets/icons/exteriores.svg";
import fachadaIcon from "../assets/icons/edificio.svg";
import productsIcon from "../assets/icons/build-icon.svg";
import solutionsInteriores from "../assets/icons/interiores-1.svg";
import { Link } from "react-router-dom";

type SolutionsType = React.FC<{}>;

interface SolutionsPage {
  desc: string;
  image: string;
  title: string;
}

export const SolutionsPage: SolutionsType = () => {
  const [pageContent, setPageContent] = useState<SolutionsPage>();
  const [data] = useGetCollection("Soluciones");

  const [
    { isLoading, error },
    { getCollectionData },
  ] = useGetItemFromCollection({
    collection: "SolucionesPage",
    query: {
      key: "type",
      operator: "==",
      value: "main",
    },
    setData: setPageContent,
  });

  useEffect(() => {
    getCollectionData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    nprogress.done();
  }
  function List(props: any) {
    const items: Array<any> = props.items;
    if (items) {
      const listItems = items.map((item: any, key) => {
        if (item.name === "Exteriores") {
          return (
            <SolutionCard
              slug={item.slug}
              key={key}
              icon={exterioresIcon}
              bgColor="bg-red-600"
              desc={item.caption}
              title={item.name}
              textIsWhite
            />
          );
        } else if (item.name === "Planeacion") {
          return (
            <SolutionCard
              slug={item.slug}
              key={key}
              icon={planificationIcon}
              bgColor="bg-yellow-500"
              desc={item.caption}
              title={item.name}
            />
          );
        } else if (item.name === "Interiores") {
          return (
            <SolutionCard
              slug={item.slug}
              key={key}
              icon={interioresIcon}
              bgColor="bg-blue-700"
              desc={item.caption}
              title={item.name}
              textIsWhite
            />
          );
        } else if (item.slug === "fachadas") {
          return (
            <SolutionCard
              slug={item.slug}
              key={key}
              icon={fachadaIcon}
              bgColor="bg-gray-700"
              desc={item.caption}
              title={item.name}
              textIsWhite
            />
          );
        } else if (item.slug === "arquitectonicos") {
          return (
            <SolutionCard
              slug={item.slug}
              key={key}
              icon={productsIcon}
              bgColor="bg-gray-500"
              desc={item.caption}
              title={item.name}
              textIsWhite
            />
          );
        } else {
          return (
            <SolutionCard
              slug={item.slug}
              key={key}
              icon={solutionsInteriores}
              bgColor="bg-blue-900"
              desc={item.caption}
              title={item.name}
              textIsWhite
            />
          );
        }
      });
      return (
        <nav className="mt-8 flex flex-col lg:flex-row lg:flex-wrap">
          {listItems}
        </nav>
      );
    } else {
      return (
        <nav className="mt-8 flex flex-col lg:flex-row lg:flex-wrap"></nav>
      );
    }
  }

  return isLoading ? (
    <Loading />
  ) : !error ? (
    <>
      <Header />
      <article className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3">
          <Title>{pageContent?.title}</Title>
          <p>{pageContent?.desc}</p>
        </div>
        <img
          className="mt-4 w-full object-cotain object-center"
          src={pageContent?.image}
          alt="Amkell"
        />
      </article>
      <List items={data} />
      <div className="w-full h-middle mt-4 md:mt-0">
        <img
          className="object-center object-contain w-full h-full md:object-cover"
          src={footerImage}
          alt=""
        />
      </div>
    </>
  ) : (
    <p>error</p>
  );
};

type SolutionCardType = React.FC<{
  bgColor: string;
  textIsWhite?: boolean;
  title: string;
  desc: string;
  slug: string;
  icon: string;
}>;
const SolutionCard: SolutionCardType = ({
  bgColor = "bg-red-500",
  textIsWhite,
  icon,
  title,
  slug,
  desc,
}) => (
  <div
    className={`${bgColor} 
    flex flex-col items-center justify-center py-5 lg:w-1/3 lg:flex-row lg:justify-between lg:px-3`}
  >
    <div className="w-1/2 flex justify-center items-center mb-2 lg:w-1/3">
      <div className="bg-white overflow-hidden w-16 h-16 rounded-full flex items-center justify-center lg:w-12 lg:h-12">
        <img className="object-contain object-center w-4/6" src={icon} alt="" />
      </div>
    </div>
    <div
      className={`${
        textIsWhite ? "text-white" : "text-black"
      } w-1/2 flex flex-col text-center lg:w-2/3 lg:text-left`}
    >
      <p
        className={`${
          textIsWhite ? "text-white" : "text-black"
        } text-bold mb-2`}
      >
        {title}
      </p>
      <p
        className={`${
          textIsWhite ? "text-white" : "text-black"
        } text-sm mb-2 opacity-50 lg:w-5/6`}
      >
        {desc}
      </p>
      <div className="w-full lg:w-2/3 lg:mt-2">
        <Link to={`/soluciones/${slug}`}>
          <Button text="Ver más" color="secondary" />
        </Link>
      </div>
    </div>
  </div>
);
