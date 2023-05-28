import React, { useState } from "react";
import { Col, Row, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardLayout } from "../../components/cards";
import { Box, Text } from "../../components/elements";
import GuestSelectModel from "../../components/popupsModel/GuestSelectModel";
import { LabelField } from "../../components/fields";
import { faCheck, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LabelFieldT from "../../components/fields/LabelFieldT";
export default function OrderLineTable1() {
  const [value, setValue] = useState(0);
  const [showModel, setShow] = useState(false);


  const handleClose = () => {
    setShow(false);
    setInputValue("");
  };

  const handleShow = () => setShow(true);
  const [inputValue, setInputValue] = useState("");
  const handleClick = (value) => {
    setInputValue(inputValue + value);
  };
  const handleDelete = () => {
    setInputValue(inputValue.slice(0, -1));
  };
  return (
    <div>
      <Col md={12}>
        <CardLayout>
          <Box className={"order-line-tables-wrapper"}>
            <Box className={"order-line-tables"}>
              <Row>
                <Col md={3}>
                  <Box className={"child-one-box-container"}>
                    <Link
                      to={""}
                      onClick={handleShow}
                      className={"child-one-box"}
                    >
                      <h6>Table 1</h6>
                      <br />
                      <Text as="span">4</Text>
                    </Link>

                    <Modal
                      className="guestSelect-model f-13"
                      show={showModel}
                      onHide={handleClose}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title className="f-13">Guest Select</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Col md={12}>
                          <LabelFieldT type="text" placeholder={inputValue} />
                        </Col>
                        <Col md={12}>
                          {/* <Box className={"cal-btns-wrapper d-flex-wrap"}>
                            <button className={"cal-btns"}>1</button>
                            <button className={"cal-btns"}>2</button>
                            <button className={"cal-btns"}>3</button>
                            <button className={"cal-btns"}>4</button>
                            <button className={"cal-btns"}>5</button>
                            <button className={"cal-btns"}>6</button>
                            <button className={"cal-btns"}>7</button>
                            <button className={"cal-btns"}>8</button>
                            <button className={"cal-btns"}>9</button>
                            <button className={"cal-btns"}>.</button>
                            <button className={"cal-btns"}>0</button>
                            <button className={"cal-btns"}>
                              <FontAwesomeIcon icon={faDeleteLeft} />
                            </button>
                          </Box> */}
                          <Box className={"cal-btns-wrapper d-flex-wrap"}>
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
                              <FontAwesomeIcon icon={faDeleteLeft} />
                            </button>
                          </Box>
                        </Col>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button className="cus-btn" onClick={handleClose}>
                          <FontAwesomeIcon icon={faCheck} /> Save
                        </Button>
                      </Modal.Footer>

                    </Modal>
                    <Link
                      to={""}
                      className={"child-one-box"}
                      onClick={handleShow}
                    >
                      <Box>
                        <h6>Table 5</h6>
                        <br />
                        <Text as="span">34</Text>
                      </Box>
                    </Link>
                    <Link
                      to={""}
                      className={"child-one-box"}
                      onClick={handleShow}
                    >
                      <h6>Table 2</h6>
                      <br />
                      <Text as="span">4</Text>
                    </Link>
                    <Link
                      to={""}
                      className={"child-one-box"}
                      onClick={handleShow}
                    >
                      <h6>Table 9</h6>
                      <br />
                      <Text as="span">4</Text>
                    </Link>
                  </Box>
                </Col>
                <Col md={3}>
                  <Link
                    to={""}
                    className={"child-two-box-container"}
                    onClick={handleShow}
                  >
                    <Box className={"child-two-box"}>
                      <h6>VIP</h6>
                      <br />
                      <Text as="span">4</Text>
                    </Box>
                  </Link>
                </Col>
                <Col md={3}>
                  <Box className={"child-thr-box-container"}>
                    <Link
                      to={""}
                      className={"child-thr-box"}
                      onClick={handleShow}
                    >
                      <h6>Table 7</h6>
                      <br />
                      <Text as="span">4</Text>
                    </Link>
                    <Link
                      to={""}
                      className={"child-thr-box"}
                      onClick={handleShow}
                    >
                      <h6>Table 1</h6>
                      <br />
                      <Text as="span">4</Text>
                    </Link>
                  </Box>
                </Col>
                <Col md={3}>
                  <Box className={"child-one-box-container"}>
                    <Link
                      to={""}
                      className={"child-one-box"}
                      onClick={handleShow}
                    >
                      <h6>Table 3</h6>
                      <br />
                      <Text as="span">4</Text>
                    </Link>
                    <Link
                      to={""}
                      className={"child-one-box child-four-box"}
                      onClick={handleShow}
                    >
                      <h6>Table 5</h6>
                      <br />
                      <Text as="span">22</Text>
                    </Link>
                    <Link
                      to={""}
                      className={"child-one-box"}
                      onClick={handleShow}
                    >
                      <h6>Table 3</h6>
                      <br />
                      <Text as="span">15</Text>
                    </Link>
                  </Box>
                </Col>
              </Row>
            </Box>
          </Box>
        </CardLayout>
      </Col>
    </div>
  );
}
