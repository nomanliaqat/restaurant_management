import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { CardLayout } from "../../components/cards";
import ProductCard from "../../components/cards/ProductCard";
import { Box, Input, Label, List } from "../../components/elements";
import { LabelField } from "../../components/fields";
import PageLayout from "../../layouts/PageLayout";
import { Text } from "../../components/elements";
import { Fontawesome, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../data/master/productList.json";

import {
  faAngleDown,
  faArrowDown,
  faB,
  faBars,
  faClock,
  faEdit,
  faGear,
  faHome,
  faPlus,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../layouts/Sidebar";
import ImageCards from "../../components/cards/ImageCards";
import ProductViewReceipt from "./ProductViewReceipt";
import { MultipleMenu } from "../../components/sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Pagination } from "../../components";

export default function ProductsView() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [items, setItems] = useState(data.product.tbody);
  const location = useLocation();
  const { service } = location.state;
  const navigate = useNavigate();

  return (
    <div>
      <PageLayout>
        {/* <Sidebar /> */}

        <Row>
          {/* <Col md={12}>
                        <CardLayout>
                        <h3>My Products</h3>
                        </CardLayout>
                    </Col> */}
          <Col md={12}>
            <Row>
              <Col md={4}>
                <Row>
                  <ProductViewReceipt id={service} />
                </Row>
              </Col>
              <Col md={8}>
                <CardLayout>
                  <Row>
                    <Col md={7}>
                      {/* <Link to="/orders-line"> */}
                      <Button
                        className={"logo-btn-p"}
                        onClick={() => navigate(0)}
                      >
                        <FontAwesomeIcon icon={faHome} />
                      </Button>
                      {/* </Link> */}
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
                        {items?.map((item, i) => (
                          <Link
                            to="/Product-details"
                            state={{ id: `${item.id}`, service: { service } }}
                            className={"imgCard"}
                            key={i}
                          >
                            <ImageCards
                              Imgsrc={item.src}
                              alt={item.alt}
                              productTitle={item.heading}
                            />
                          </Link>
                        ))}
                        {/* <Box className={"imgCard"}>
                          <ImageCards
                            Imgsrc={"images/product/single/salad.jpg"}
                            productTitle="Expresso lasgana"
                          />
                        </Box>
                        <Box className={"imgCard"}>
                          <ImageCards
                            Imgsrc={"images/product/single/salad.jpg"}
                            productTitle="Expresso lasgana"
                          />
                        </Box>
                        <Box className={"imgCard"}>
                          <ImageCards
                            Imgsrc={"images/product/single/salad.jpg"}
                            productTitle="Expresso lasgana"
                          />
                        </Box> */}
                      </Box>
                    </Col>
                  </Row>
                </CardLayout>
                <Pagination />
              </Col>
            </Row>
          </Col>
        </Row>
      </PageLayout>
    </div>
  );
}
