import React from "react";
import { useNavigate } from "react-router";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

export default function ShopCard({ data }) {
  const navigate = useNavigate();

  function showItem() {
    navigate(`/Shop/${data.product}`);
  }
  return (
    <>
      <Card
        style={{
          border: "none",
        }}
      >
        <img
          alt="Sample"
          src={data?.img}
          className="rounded-2 "
          style={{
            height: "350px",
            width: "255px",
          }}
        />

        <CardBody
          className="d-flex flex-column align-items-center justify-align-content-center"
          style={{ fontFamily: "Spectral, serif" }}
        >
          <CardTitle tag="h5">{data?.product}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {data?.name}
          </CardSubtitle>

          <Button color="danger" onClick={() => showItem()}>
            Buy Now
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
