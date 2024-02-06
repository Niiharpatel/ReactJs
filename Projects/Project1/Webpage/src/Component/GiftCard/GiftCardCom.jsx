import React from "react";
import "./GiftCard.css";
import { useNavigate } from "react-router";
import { userAuth } from "../../Pages/Auth/Auth";

export default function GiftCardCom() {
  const Navigate = useNavigate();

  let { user } = userAuth();

  function GiftNav() {
    if (!user) {
      Navigate("/alertbox");
    } else {
      Navigate("/giftcard");
    }
    document.window.scrollTo(0);
  }
  return (
    <>
      <div className="giftcard-main">
        <div className="giftcard-bgimg">
          <div className="giftcard-content">
            <div className="giftcard-content-line1">
              <h6>GIFT CARD</h6>
            </div>

            <div className="giftcard-content-line2">
              <h3>Give the Gift of Greenery</h3>
            </div>

            <div className="giftcard-content-line3">
              <p>
                Pretium tortor risus enim neque quis pellentesque maecenas proin
                odio eget arcu
              </p>
            </div>

            <div className="giftcard-content-line4">
              <button onClick={() => GiftNav()}>Purchase A Gift Card</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
