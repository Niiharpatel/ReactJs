import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Table } from "reactstrap";

function UserCom(props) {
  let [index, setIndex] = useState(null);

  let [search, setSearch] = useState("");
  let [data, setData] = useState([]);

  useEffect(() => {
    // setData(props?.data);

    if (search.length > 0) {
      let filterData = props?.data.filter((e) => {
        return e?.name?.toLowerCase().includes(search?.toLowerCase());
      });
      setData(filterData);
    } else {
      setData(props?.data);
    }
  }, [props?.data, search]);

  return (
    <>
      <div className="align-right mb-4">
        <input
          type="text"
          placeholder="search here"
          onChange={(e) => setSearch(e?.target?.value)}
        />
      </div>

      <Table bordered>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>
                  {index === i ? e?.password : "*".repeat(e?.password?.length)}
                </td>
                <td>
                  {(index || index === 0) && index === i ? (
                    <Button
                      color="primary"
                      className="ms-2"
                      onClick={() => setIndex(null)}
                    >
                      Hide
                    </Button>
                  ) : (
                    <Button
                      color="primary"
                      className="ms-2"
                      onClick={() => setIndex(i)}
                    >
                      Show
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

const toStateToProps = (state) => {
  return {
    data: state?.USER,
  };
};

export default connect(toStateToProps)(UserCom);
