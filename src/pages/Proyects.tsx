import React from "react";

import { useGetCollection } from "../hooks/Firebase";
import nprogress from "nprogress";

import { Header } from "../components/Header";
import { ImageBoxText } from "../components/ImageBoxText";
import { Loading } from "../components/Loading";
import { Link } from "react-router-dom";

type Props = {};
type ProyectsType = React.FC<Props>;

type collection = "Soluciones" | "Materiales" | "Proyectos";
const collection: collection = "Proyectos";

export const ProyectsPage: ProyectsType = (props) => {
  const [data, isLoading, error] = useGetCollection(collection);
  console.log(data);

  function List(props: any) {
    const items: Array<any> = props.items;
    if (items) {
      const listItems = items.map((item: any, key) => {
        return key % 2 === 0 ? (
          <Link to={"/proyectos/" + item.slug} key={key} className="block">
            <br />
            <div className="flex flex-col md:flex-row fadeInLeft">
              <ImageBoxText image={item.image} title={item.name} />
              <p className="text-gray-1000 w-full md:w-1/2 md:pl-4 text-justify">
                {item.desc}
              </p>
            </div>
            <br />
            <hr />
          </Link>
        ) : (
          <Link to={"/proyectos/" + item.slug} key={key} className="block">
            <br />
            <div className="flex flex-col-reverse md:flex-row fadeInRight">
              <p className="text-gray-1000 w-full md:w-1/2 md:pr-4 text-justify justify-start">
                {item.desc}
              </p>
              <ImageBoxText image={item.image} title={item.name} isPrimary />
            </div>
            <br />
            <hr />
          </Link>
        );
      });
      return (
        <div className="flex flex-row flex-wrap p-4 md:p-0 md:flex-col md:mb-16">
          {listItems}
        </div>
      );
    } else {
      return (
        <div className="flex flex-row flex-wrap p-4 md:p-0 md:flex-col md:mb-16"></div>
      );
    }
  }
  if (isLoading) {
    nprogress.done();
  }
  return isLoading ? (
    <Loading />
  ) : !error ? (
    <>
      <Header />

      <section className="flex flex-col">
        <div className="w-full">
          <div className="line mb-2 uppercase" />
          <h2 className="text-primary text-2xl mb-2 md:mb-8">PROYECTOS</h2>
        </div>
        <List items={data} />
      </section>
    </>
  ) : (
    <p>error</p>
  );
};
