import { Pencil, Trash } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Table } from "reactstrap";
import {
  deleteProduct,
  editProduct,
  fetchData,
} from "../../../../Redux/features/productSlice/productSlice";

export default function ProductTable({
  toggle,
  setProductData,
  setProductIndex,
}) {
  const { err, product } = useSelector((state) => {
    return state?.productSlice;
  });
  if (err.length > 0) {
    toast.error(err);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  function deleteHandler(data, index) {
    // console.log("deleteHandler  data: ", data);
    dispatch(deleteProduct({ id: data?._id, index }));
  }
  const updateHandler = (data, index) => {
    setProductData(data);
    setProductIndex(index);
    console.log("updateHandler  index: ", index);
    toggle();
    dispatch(editProduct({ data, index }));
  };

  return (
    <>
      
      <div>
        <div style={{ paddingTop: "20px" }}>
          <Table striped style={{ backgroundColor: "transparent" }}>
            <thead>
              <tr>
                <th>Sr.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Discription</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {product?.map((e, i) => {
                return (
                  <tr key={e?.id}>
                    <th scope="row">{i + 1}</th>
                    <td>
                      <img
                        style={{ maxHeight: "50px" }}
                        src={e?.thumbnail}
                        alt=""
                      />
                    </td>
                    <td>{e?.title}</td>
                    <td
                      className="text-truncate w-25"
                      style={{ maxWidth: "20vw" }}
                    >
                      {e?.discription}
                    </td>
                    <td>{e?.price}</td>
                    <td>
                      <Pencil
                        role="button"
                        color="#46b616"
                        style={{ marginRight: "15px", cursor: "pointer" }}
                        onClick={() => updateHandler(e, i)}
                      />

                      <Trash
                        role="button"
                        color="#ea0606"
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteHandler(e, i)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
