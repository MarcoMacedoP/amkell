import React from "react";

import { useGetCollection } from "../hooks/Firebase";
import nprogress from 'nprogress'

import { Header } from "../components/Header";
import { ImageBoxText } from "../components/ImageBoxText";
import { Loading } from "../components/Loading";

type Props = {};
type MaterialsType = React.FC<Props>;
type collection = 'Soluciones' | 'Materiales';
const collection: collection = 'Materiales';

export const MaterialsPage: MaterialsType = (props) => {
  
  const [data, isLoading, error] = useGetCollection(collection);
  console.log(data);

  function List(props: any) {
    const items:Array<any> = props.items;
    // console.log('items : ', items);
    if (items) {
      const listItems = items.map((item: any, key) => {
        return key % 2 === 0 ? (
          <div key={key}>
            <br />
            <div className="flex flex-col fadeInLeft md:flex-row">
              <ImageBoxText image={item.images[0]} title={item.name} />
              <p className="text-gray-1000 w-full md:w-1/2 md:pl-4 text-justify">
                {item.caption}
              </p>
            </div>
            <br />
            <hr />
          </div>
        ) : (
          <div key={key}>
            <br />
            <div className="flex flex-col-reverse fadeInRight md:flex-row">
              <p className="text-gray-1000 w-full md:w-1/2 md:pr-4 text-justify justify-start">
                {item.caption}
              </p>
              <ImageBoxText
                image={item.images[0]}
                title={item.name}
                isPrimary
              />
            </div>
            <br />
            <hr />
          </div>
        );
      });
      return (
        <div className="flex flex-row flex-wrap p-4 md:p-0 md:flex-col md:mb-16">
          {listItems}
        </div>
      );
    } else {
      return (
        <div className="flex flex-row flex-wrap p-4 md:p-0 md:flex-col md:mb-16">
        </div>
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
          <h2 className="text-primary text-2xl mb-2 md:mb-8">MATERIALES</h2>
        </div>
        <List items={data} />
      </section>
    </>
  ) : (
    <p>error</p>
  );
};
