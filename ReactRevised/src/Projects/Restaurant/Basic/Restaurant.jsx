import React, { useState } from "react";
import "./style.css";
import CardCom from "./CardCom";
import menuData from "./menuApi.json";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    menuData?.map((ele) => {
      return ele?.category;
    })
  ),
  "All",
];
// console.log("uniqueList:", uniqueList);

export default function Restaurant() {
  let [cardData, setCardData] = useState(menuData);
  let [navlist, setNavList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "all") {
      setCardData(menuData);
      return;
    }
    const filterData = menuData?.filter((curEle) => {
      return curEle?.category === category;
    });

    setCardData(filterData);
  };

  return (
    <>
      <Navbar filterItem={filterItem} navlist={navlist} />

      <section className="main-card--cointainer">
        {cardData?.map((e, i) => {
          return <CardCom data={e} key={i} />;
        })}
      </section>
    </>
  );
}
