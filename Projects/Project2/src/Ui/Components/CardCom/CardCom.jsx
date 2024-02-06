import React from "react";
import CardData from "./CardData.json";
import CardStructure from "./CardStructure";

export default function CardCom() {
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <span className="subheading">Our Delightful offerings</span>
              <h2>Tastefully Yours</h2>
            </div>
          </div>
          <div className="row">
            {CardData?.map((e, i) => {
              return <CardStructure data={e} key={i} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
