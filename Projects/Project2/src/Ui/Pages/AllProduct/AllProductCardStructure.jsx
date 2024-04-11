import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  addToCart,
  getAllCart,
} from "../../../Redux/features/cartSlice/cartSlice";

export default function AllProductCardStructure({ dataa }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const allCartProduct = useSelector((state) => state.cartSlice.cart);
  // const allCartProduct = useSelector((state) => state.getAllCart());

  function handleAddToCart(dataa) {
    let allcartProductTemp = allCartProduct.map((e) => {
      return { productId: e?.productId?._id, count: e?.count };
    });
    console.log(
      "🚀 ~ file: AllProductCardStructure.jsx:17 ~ allcartProductTemp ~ allcartProductTemp:",
      allcartProductTemp
    );

    let index = allcartProductTemp.findIndex(
      (e) => e.productId?._id === dataa._id
    );
    console.log("handleAddToCart ~ index:", index);

    if (index !== -1) {
      allcartProductTemp[index] = {
        ...allcartProductTemp[index],
        count: allcartProductTemp[index].count + 1,
      };
      // allcartProductTemp[index] = {
      //   productId: allcartProductTemp[index].productId,
      //   count: allcartProductTemp[index].count + 1,
      // };
    } else {
      console.log("--------else");
      allcartProductTemp.push({ productId: dataa?._id, count: 1 });
    }
    axios({
      method: "post",
      url: "http://localhost:9999/cart/create",
      data: {
        products: allcartProductTemp,
      },
      headers: {
        "Content-Type": "application/json",
        authorization: `Barer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((resData) => {
        // state.cartSlice.getAllCart();
        dispatch(getAllCart());
        dispatch(addToCart());
      })
      .catch((err) => {
        console.log("add cart calling done " + err);
      });
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
                  onClick={() => handleAddToCart(dataa)}
                >
                  <span className="flaticon-shopping-bag"></span>
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
