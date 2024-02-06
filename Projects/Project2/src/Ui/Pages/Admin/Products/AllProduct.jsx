import React from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";
import { useState } from "react";

export default function AllProduct() {
  const [modal, setModal] = useState(false);
  const [productData, setProductData] = useState({});
  const [productIndex, setProductIndex] = useState(null);

  const toggle = () => setModal(!modal);

  return (
    <>
      <ProductForm
        modal={modal}
        productData={productData}
        setProductData={setProductData}
        productIndex={productIndex}
        setProductIndex={setProductIndex}
        toggle={toggle}
      />
      <div style={{ marginLeft: "50px" }}></div>
      <ProductTable
        setProductData={setProductData}
        setProductIndex={setProductIndex}
        modal={modal}
        toggle={toggle}
      />
    </>
  );
}
