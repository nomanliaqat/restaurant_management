import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { CardLayout } from "../../components/cards";
import ProductCard from "../../components/cards/ProductCard";
import { Box, Input, Label, List } from "../../components/elements";
import { LabelField } from "../../components/fields";
import PageLayout from "../../layouts/PageLayout";
import { Text } from "../../components/elements";
import { Fontawesome, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faMinus,
  faDeleteLeft,
} from "@fortawesome/free-solid-svg-icons";
import { getOrders } from "../../redux/actions/orders/orderActions";
import {getProducts} from '../../redux/actions/product/productActions';
import data from "../../data/master/productList.json";

import {
  faB,
  faBars,
  faGear,
  faHome,
  faPlus,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import ImageCards from "../../components/cards/ImageCards";
import ProductViewReceipt from "./ProductViewReceipt";

import { Link, useLocation } from "react-router-dom";
import AddGuestProductModal from "../../components/popupsModel/AddGuestProductModal";

import { useNavigate } from "react-router-dom";
import { Pagination } from "../../components";
import LabelFieldT from "../../components/fields/LabelFieldT";
import { useDispatch, useSelector } from "react-redux";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { productsList } = useSelector(
    (state) => state.products.productReducer
  );
  const { ordersList } = useSelector(
    (state) => state.orders.orderReducer
  );
  const handleShowModal = (product) => {
    setShowModal(true);

    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // setInputValue("1");
    const cartfromlocalstorage = JSON.parse(localStorage.getItem('cart')) || []

    const index = cartfromlocalstorage.findIndex(item => item.product_id === selectedProduct.product_id);
    selectedProduct['qty'] = inputValue;
    if(index > -1){
      cartfromlocalstorage[index] = selectedProduct;
    }else{
      cartfromlocalstorage.push(selectedProduct)
    }
    localStorage.setItem("cart", JSON.stringify(cartfromlocalstorage))
  };

  const handleSaveModal = () => {
    // do something
    setShowModal(false);
  };

  // const handleShowAdd = () => setShowAdd(true);
  const location = useLocation();
  // const service = location.state;
  const { id, service } = location.state;

  useEffect(()=> {
    dispatch(getProducts());
    dispatch(getOrders());
    if(!id){
      navigate(-1)
    }
  },[])

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("1");
  const handleClick = (value) => {
    setInputValue(inputValue + value);
  };
  const handleDelete = () => {
    setInputValue(inputValue.slice(0, -1));
  };

  const myList = [
    { name: "Lasgana 220 Kg", qty: 2, subtotal: 10 },
    { name: "Large Pizza", qty: 1, subtotal: 5 },
    { name: "250 ml Coke", qty: 3, subtotal: 15 },
  ];

  return (
    <div>
      <PageLayout>
        <Row>
          <Col md={12}>
            <Row>
              {/* <Col md={1}>
                <CardLayout>
                  <Sidebar />
                  <MultipleMenu data={data?.navs} />
                </CardLayout>
              </Col> */}
              <Col md={4}>
                <Row>
                  <ProductViewReceipt id={service.service} products = {JSON.parse(localStorage.getItem("cart")) || []} orders={ordersList} />
                </Row>
              </Col>
              <Col md={8}>
                <CardLayout>
                  <Row>
                    <Col md={7}>
                      <Row>
                        <Col md={2}>
                          <Button
                            className={"logo-btn-p"}
                            onClick={() => navigate(-1)}
                          >
                            <FontAwesomeIcon icon={faHome} />
                          </Button>
                        </Col>
                        <Col md={5}>
                          {productsList
                            .filter((item) => {
                              return item.id == id;
                            })
                            .map((item, i) => (
                              <Text>{item.product_name}</Text>
                            ))}
                        </Col>
                        {/* <Text>
                        {id[0].toUpperCase() + id.slice(1).replaceAll("-", " ")}
                      </Text> */}
                      </Row>
                    </Col>

                    <Col md={5}>
                      <Box className={"search-btn-box"}>
                        <Button onClick={handleShow} className={"logo-btn-p"}>
                          <FontAwesomeIcon icon={faSearch} />
                        </Button>
                        <Modal
                          className="search-model"
                          show={show}
                          onHide={handleClose}
                        >
                          <Modal.Body>
                            <LabelField
                              type={"search"}
                              placeholder={"Search here"}
                              label={"Search"}
                              fieldSize={" w-100 h-45"}
                            />
                          </Modal.Body>
                        </Modal>
                        <Button className={"logo-btn-p"}>
                          <FontAwesomeIcon icon={faBars} />
                        </Button>
                        <Button className={"logo-btn-p"}>
                          <FontAwesomeIcon icon={faGear} />
                        </Button>
                        <Button className={"logo-btn-p"}>
                          <FontAwesomeIcon icon={faStar} />
                        </Button>
                        <Button className={"logo-btn-p"}>
                          <FontAwesomeIcon icon={faB} />
                        </Button>
                      </Box>
                    </Col>

                    <Col md={12}>
                      <Box className={"product-img-card"}>
                        {productsList
                          .filter((item) => {
                            return item.product_id == id;
                          })
                          .map((item, i) => (
                            <div
                              className="clickable"
                              key={i}
                              onClick={() => setSelectedItem(item.product_name)}
                            >
                              <Box
                                onClick={() => handleShowModal(item)}
                                className={"imgCard"}
                              >
                                <ImageCards
                                  Imgsrc={item.product_image}
                                  productTitle={item.product_name}
                                />
                              </Box>
                              {showModal && (
                                <Modal
                                  className="add-guestProduct-model"
                                  show={showModal}
                                  onHide={handleCloseModal}
                                >
                                  <Modal.Header closeButton>
                                    <Modal.Title>
                                      {selectedProduct.product_name}{" "}
                                    </Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <Row>
                                      <Col md={9}>
                                        {/* <Col md={12} className="mb-20">
                                        <Text
                                          as={"span"}
                                          className={"bold f-13 "}
                                        >
                                          Flat-White Type-920-BCat
                                        </Text>
                                      </Col> */}
                                        <Col md={12} className="mb-10">
                                          <Box className={"product-img-card"}>
                                            <Box className="productCard-btn">
                                              {/* Rice Type 2 */}
                                              {selectedProduct.product_name}
                                            </Box>
                                            {/* <Box className="productCard-btn">
                                            Lasgana Sallads 2
                                          </Box> */}
                                            {/* {data.product.tbody.slice(0, 3).map((item, i) => (
                                              <Box key={i} className={'imgCard'}>
                                                <ImageCards
                                                  Imgsrc={item.src}
                                                  productTitle={item.heading}
                                                />
                                              </Box>
                                            ))} */}
                                          </Box>
                                        </Col>
                                      </Col>
                                      <Col md={3}>
                                        <Box className={"Add-sub-quan d-flex"}>
                                          <Button
                                            className="Add-sub-quan-minus"
                                            onClick={() => {
                                              inputValue > 1 && setInputValue(+inputValue - 1)}
                                            }
                                          >
                                            <FontAwesomeIcon icon={faMinus} />{" "}
                                          </Button>
                                          <LabelFieldT
                                            fieldSize={"w100"}
                                            type={"text"}
                                            placeholder={inputValue}
                                          />
                                          <Button
                                            className="Add-sub-quan-minus"
                                            onClick={() =>
                                              setInputValue(+inputValue + 1)
                                            }
                                          >
                                            <FontAwesomeIcon icon={faPlus} />{" "}
                                          </Button>
                                        </Box>
                                        <Box
                                          className={
                                            "cal-btns-wrapper d-flex-wrap"
                                          }
                                        >
                                          <button
                                            className={"cal-btns"}
                                            onClick={() => handleClick("1")}
                                          >
                                            1
                                          </button>
                                          <button
                                            className={"cal-btns"}
                                            onClick={() => handleClick("2")}
                                          >
                                            2
                                          </button>
                                          <button
                                            className={"cal-btns"}
                                            onClick={() => handleClick("3")}
                                          >
                                            3
                                          </button>
                                          <button
                                            className={"cal-btns"}
                                            onClick={() => handleClick("4")}
                                          >
                                            4
                                          </button>
                                          <button
                                            className={"cal-btns"}
                                            onClick={() => handleClick("5")}
                                          >
                                            5
                                          </button>
                                          <button
                                            className={"cal-btns"}
                                            onClick={() => handleClick("6")}
                                          >
                                            6
                                          </button>
                                          <button
                                            className={"cal-btns"}
                                            onClick={() => handleClick("7")}
                                          >
                                            7
                                          </button>
                                          <button
                                            className={"cal-btns"}
                                            onClick={() => handleClick("8")}
                                          >
                                            8
                                          </button>
                                          <button
                                            className={"cal-btns"}
                                            onClick={() => handleClick("9")}
                                          >
                                            9
                                          </button>
                                          <button
                                            className={"cal-btns"}
                                            onClick={() => handleClick(".")}
                                          >
                                            .
                                          </button>
                                          <button
                                            className={"cal-btns"}
                                            onClick={() => handleClick("0")}
                                          >
                                            0
                                          </button>
                                          <button
                                            className={"cal-btns"}
                                            onClick={handleDelete}
                                          >
                                            <FontAwesomeIcon
                                              icon={faDeleteLeft}
                                            />
                                          </button>
                                        </Box>
                                        <Col md={12}>
                                          <Button
                                            className="w-100 mt-10"
                                            onClick={handleCloseModal}
                                          >
                                            {" "}
                                            <FontAwesomeIcon
                                              icon={faCheck}
                                              className="f-13"
                                            />{" "}
                                            Save{" "}
                                          </Button>
                                        </Col>
                                      </Col>
                                    </Row>
                                  </Modal.Body>
                                  <Modal.Footer>
                                    <Text as={"span"} className={"bold f-13"}>
                                      Subtotal :{" "}
                                      {selectedProduct.product_price *
                                        inputValue}{" "}
                                      $
                                    </Text>
                                  </Modal.Footer>
                                </Modal>
                              )}
                            </div>
                          ))}
                      </Box>
                    </Col>
                  </Row>
                </CardLayout>
                {/* <Pagination /> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </PageLayout>
    </div>
  );
}
