import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../Redux/features/productSlice/productSlice";
import AllProductCardStructure from "./AllProductCardStructure";
import { useParams } from "react-router";

export default function AllProductUser() {
  let [dataArr, setDataArr] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const { product } = useSelector((state) => {
    return state?.productSlice;
  });

  const { type } = useParams();

  useEffect(() => {
    // const abc = product.filter((e) => {
    //   return e.title === type;
    // });

    setDataArr(
      product.filter((e) => {
        return e.title === type;
      })
    );

    window.scroll(0, 0);
  }, [type, product]);

  return (
    <>
      <div className="d-flex flex-wrap pt-5 pb-5 container-fluid gap-5 justify-content-center align-items-center">
        {dataArr?.map((e, i) => {
          return <AllProductCardStructure dataa={e} key={i} />;
        })}
      </div>
    </>
  );
}
