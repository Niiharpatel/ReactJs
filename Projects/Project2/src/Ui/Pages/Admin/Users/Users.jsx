import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Table } from "reactstrap";

export default function Users() {
  let [userData, setUserData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:9999/user/getAll",
      Headers: {
        "cotent-type": "application/json",
        authorization: `Barer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((resData) => {
        console.log("Users  resData: ", resData);
        setUserData(resData?.data?.data);
      })
      .catch((err) => toast.error(err.message));
  }, []);
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: "url(images/bg_2.jpg)" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-center">
            <div className="col-md-9 ftco-animate mb-5 text-center">
              <p className="breadcrumbs mb-0">
                <span className="mr-2">
                  <a href="index.html">
                    Admin <i className="fa fa-chevron-right"></i>
                  </a>
                </span>{" "}
                <span>
                  User <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h2 className="mb-0 bread">Users</h2>
            </div>
          </div>
        </div>
      </section>

      <div style={{ marginTop: "20px" }}>
        <Table striped>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((e, i) => {
              return (
                <tr key={e?.id}>
                  <th scope="row">{i + 1}</th>
                  <td>{e?.name || "---"}</td>
                  <td>{e?.email || "---"}</td>
                  <td>{e?.age || "---"}</td>
                  <td>{e?.address?.[0]?.city || "---"}</td>
                  <td>{e?.address?.[0]?.state || "---"}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
