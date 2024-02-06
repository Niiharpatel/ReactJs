import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function AllProductCardStructure({ dataa }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allCartProduct = useSelector((state) => state.cartSlice.cart);

  function handleAddToCart(dataa) {
    let xxx = allCartProduct.map((e) => {
      return { productId: e?.productId?._id, count: e?.count };
    });
    console.log("🚀 ~ file: AllProductCardStructure.jsx:17 ~ xxx ~ xxx:", xxx);

    let index = xxx.findIndex((e) => e.productId._id === dataa._id);
    console.log(
      "🚀 ~ file: AllProductCardStructure.jsx:18 ~ handleAddToCart ~ index:",
      index
    );

    if (index !== -1) {
      xxx[index] = { ...xxx[index], count: xxx[index].count + 1 };
    } else {
      xxx.push({ productId: dataa?._id, count: 1 });
    }
    console.log(
      "🚀 ~ file: AllProductCardStructure.jsx:29 ~ handleAddToCart ~ xxx:",
      xxx
    );
    // axios({
    //   method: "post",
    //   url: "http://localhost:9999/cart/create",
    //   data: {
    //     products:
    //   },
    //   headers: {
    //     "Content-Type": "application/json",
    //     authorization: `Barer ${JSON.parse(localStorage.getItem("token"))}`,
    //   },
    // })
    //   .then((resData) => {
    //     dispatch(getAllCart());
    //   })
    //   .catch((err) => {});
  }
  return (
    <>
      <div className="col-md-3 d-flex">
        <div className="product ftco-animate">
          <div
            className="img d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: `url(${dataa?.thumbnail})`,
              filter: "drop-shadow(0px 0px 5px)",
            }}
          >
            <div className="desc">
              <p className="meta-prod d-flex">
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span
                    className="flaticon-shopping-bag"
                    onClick={() => handleAddToCart(dataa)}
                  ></span>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="flaticon-heart"></span>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="flaticon-visibility"></span>
                </a>
              </p>
            </div>
          </div>
          <div className="text text-center">
            <span className="category" style={{ fontFamily: "inherit" }}>
              {dataa?.title}
            </span>
            <h2
              className="font-family-inherit"
              style={{ fontFamily: "inherit", fontWeight: "400" }}
            >
              {dataa?.brand}
            </h2>
            <p className="mb-0">
              {/* <span className="price price-sale">{data?.saleprice}</span>{" "} */}
              <span
                className="price"
                style={{ fontFamily: "inherit", fontWeight: "300" }}
              >
                ${dataa?.price}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// [a, b, c][(a, c)];
// // [a,b,c] c

// [...a1, ...a2][(a, b, c, a, c)];
