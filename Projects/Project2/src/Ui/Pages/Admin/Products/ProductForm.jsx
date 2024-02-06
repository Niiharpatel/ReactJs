import { PlusSquare } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import Select from "react-select";
import {
  addProduct,
  editProduct,
} from "../../../../Redux/features/productSlice/productSlice";

function ProductForm({
  toggle,
  modal,
  productData,
  productIndex,
  setProductIndex,
}) {
  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const options2 = [
    { value: "Brandy", label: "Brandy" },
    { value: "Gin", label: "Gin" },
    { value: "Rum", label: "Rum" },
    { value: "Tequila", label: "Tequila" },
    { value: "Vodka", label: "Vodka" },
    { value: "Whishkey", label: "Whishkey" },
  ];

  const options3 = [
    { value: "50ml", label: "50ml" },
    { value: "200ml", label: "200ml" },
    { value: "350ml", label: "350ml" },
    { value: "750ml", label: "750ml" },
    { value: "1000ml", label: "1000ml" },
    { value: "1750ml", label: "1750ml" },
    { value: "3000ml", label: "3000ml" },
    { value: "4500ml", label: "4500ml" },
  ];

  const [data, setData] = useState({
    title: "",
    discription: "",
    category: [],
    brand: "",
    size: "",
    gender: "male",
    thumbnail: "",
    price: "",
    quantity: "",
    discount: "",
    stock: "",
  });

  const dispatch = useDispatch();

  const addToTable = () => {
    dispatch(addProduct(data));
  };

  const state = useLocation();

  useEffect(() => {
    setData(productData);
  }, [productData]);

  const updateHandler = () => {
    dispatch(editProduct({ data, index: productIndex }));
    setData({});
    setProductIndex(null);
    toggle(false);
  };
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
                  Product <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h2 className="mb-0 bread">Products</h2>
            </div>
          </div>
        </div>
      </section>


      <div style={{ marginTop: "50px" }}>
        Click Button to add product{" "}
        <PlusSquare
          size={48}
          color="#a23f25"
          onClick={toggle}
          strokeWidth={1.5}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Product Box</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleTitle">Title</Label>
                <Input
                  id="exampleTitle"
                  name="title"
                  type="text"
                  value={data?.title}
                  onChange={(e) =>
                    setData({ ...data, title: e?.target?.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleDiscription">Discription</Label>
                <Input
                  id="exampleDiscription"
                  name="discription"
                  type="text"
                  onChange={(e) =>
                    setData({ ...data, discription: e?.target?.value })
                  }
                  value={data?.discription}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleCategory">Category</Label>

                <Select
                  options={options2}
                  name="category"
                  isMulti
                  onChange={(e) =>
                    setData({ ...data, category: e?.map((e) => e?.value) })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleBrand">Brand</Label>
                <Input
                  id="exampleBrand"
                  name="brand"
                  type="text"
                  value={data?.brand}
                  onChange={(e) =>
                    setData({ ...data, brand: e?.target?.value })
                  }
                />
              </FormGroup>{" "}
              <FormGroup>
                <Label for="exampleThumbnail">Thumbnail</Label>
                <Input
                  id="exampleThumbnail"
                  name="thumbnail"
                  type="url"
                  value={data?.thumbnail}
                  onChange={(e) =>
                    setData({ ...data, thumbnail: e?.target?.value })
                  }
                />
              </FormGroup>{" "}
              <Label for="exampleGender">Gender</Label>
              <FormGroup check>
                <Input
                  type="radio"
                  name="gender"
                  id="male"
                  checked={data?.gender === "male"}
                  onChange={() => setData({ ...data, gender: "male" })}
                />{" "}
                <Label>Male</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  type="radio"
                  name="gender"
                  id="female"
                  checked={data?.gender === "female"}
                  onChange={() => setData({ ...data, gender: "female" })}
                />{" "}
                <Label check>Female</Label>
              </FormGroup>
              <FormGroup>
                <Label for="exampleCategory">Size</Label>

                <Select
                  options={options3}
                  name="size"
                  isMulti
                  defaultValue={options3?.filter((e) =>
                    data?.size?.includes(e?.value)
                  )}
                  onChange={(e) =>
                    setData({ ...data, size: e?.map((e) => e?.value) })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePrice">Price</Label>
                <Input
                  id="examplePrice"
                  name="price"
                  type="text"
                  value={data?.price}
                  onChange={(e) =>
                    setData({ ...data, price: e?.target?.value })
                  }
                />
              </FormGroup>{" "}
              <FormGroup>
                <Label for="exampleQuantity">Quantity</Label>
                <Input
                  id="exampleQuantity"
                  name="quantity"
                  type="number"
                  value={data?.quantity}
                  onChange={(e) =>
                    setData({ ...data, quantity: e?.target?.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleDiscount">Discount</Label>
                <Input
                  id="exampleDiscount"
                  name="discount"
                  type="text"
                  placeholder="%"
                  value={data?.discount}
                  onChange={(e) =>
                    setData({ ...data, discount: e?.target?.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleQuantity">Available Stocks</Label>
                <Input
                  id="exampleQuantity"
                  name="stock"
                  type="number"
                  value={data?.stock}
                  onChange={(e) =>
                    setData({ ...data, stock: e?.target?.value })
                  }
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            {productIndex || productIndex === 0 ? (
              <Button color="primary" onClick={() => updateHandler()}>
                Update Product
              </Button>
            ) : (
              <Button color="primary" onClick={() => addToTable()}>
                Add Product
              </Button>
            )}

            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default ProductForm;
