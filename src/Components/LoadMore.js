import React from "react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchData } from "../Action";
import Card from "./Card";
let page = 2;
const LoadMore = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState([]);
  const [dataOver, setDataOver] = useState(false);
  useEffect(() => {
    if (inView) {
      fetchData(page).then((res) => {
        if (res.length === 0) {
          setDataOver(true);
          return;
        }
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);
  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item) => (
          <Card key={item._id} data={item} />
        ))}
        <div ref={ref}></div>
      </section>
      {dataOver ? (
        <p className="text-center text-2xl font-bold mt-10">
          No more data to load
        </p>
      ) : (
        <section className="flex justify-center items-center w-full">
          <div>
            <img
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
        </section>
      )}
    </>
  );
};

export default LoadMore;
