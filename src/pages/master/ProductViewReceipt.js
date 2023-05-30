import React, { useState, useEffect } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { CardLayout } from "../../components/cards";
import { Box } from "../../components/elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useNavigate} from "react-router-dom";
import {
  faEdit,
  faClock,
  faAngleDown,
  faPlus,
  faMinus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Text } from "../../components/elements";
import CheckoutModel from "../../components/popupsModel/CheckoutModel";
import LabelFieldT from "../../components/fields/LabelFieldT";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/actions/orders/orderActions";
export default function ProductViewReceipt({ id, products, orders }) {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(1);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const handleClosePayment = () => setShowPayment(false);
  const handleShowPayment = () => setShowPayment(true);

  useEffect(() => {
    // const products = JSON.parse(localStorage.getItem("cart")) || [];
    products && setSelectedProducts([...products])
  }, [products])

  const updateQty = (product, action) => {
    product["qty"] =
      action === "add"
        ? product.qty + 1
        : product.qty == 1
        ? product.qty
        : product.qty - 1;
    const index = selectedProducts.findIndex(
      (item) => item.product_id === product.product_id
    );
    if (index > -1) {
      selectedProducts[index] = product;
    }
    setSelectedProducts([...selectedProducts]);
    localStorage.setItem("cart", JSON.stringify(selectedProducts));
  };

  const handleSubmit = () => {
    if(id === 'Takeaway' && !showPayment){
      setShowPayment(true);
      return
    }
    let details = [];
    selectedProducts.length > 0 && selectedProducts.map((item) => {
      details.push({product_id: item.product_id, qty: parseInt(item.qty), price: parseInt(item.product_price)})
      return
    });

      const params = {
        customer:"Rizwan",
        status:"pending",
        order_type: id,
        order_amount: parseInt(selectedProducts.reduce((total, item) => total + item.product_price * item.qty,0).toFixed(2)),
        user_id: 1,
        documentno: orders.length>0 ? orders[orders.length-1].order_id + 1: 1,
        details,
        }
        // setSelectedProducts([])
    dispatch(createOrder(params, nevigate))
  }

  const clearCart = () => {
    localStorage.removeItem("cart");
    setSelectedProducts([])
  }

  return (
    <div>
      <CardLayout>
        <Row className="f-13">
          <Col md={5}>
            <FontAwesomeIcon icon={faEdit} />
            {id}
          </Col>
          <Col md={4} className="text-center">
            <FontAwesomeIcon icon={faClock} /> 00:00
          </Col>
          <Col md={3} className="text-end">
            #{orders.length + 1} <FontAwesomeIcon icon={faAngleDown} />
          </Col>
          <Col md={12}>
            <Box className={"pv-receipt-box"}>
              {selectedProducts.length === 0 ? (
                <CardLayout>
                  <Row>
                    <Col md={12}>
                      <h4 className="text-center">Empty Cart</h4>
                    </Col>
                  </Row>
                </CardLayout>
              ) : (
                selectedProducts.map((item, i) => (
                  <CardLayout key={i}>
                    <Row>
                      <Col md={8}>
                        <Text className="bold" as="span">
                          {item.product_name}{" "}
                        </Text>
                        <br />
                        <Text as="span">
                          Total : {item.product_price * item.qty} ${" "}
                        </Text>
                      </Col>
                      <Col md={4} className="text-end cusur-p">
                        <Box className={"Add-sub-quan d-flex"}>
                          <Button
                            // className="Add-sub-quan-minus"
                            size="sm"
                            // disabled={inputValue < 2 ? true : false}
                            onClick={() => updateQty(item, "minus")}
                          >
                            <FontAwesomeIcon icon={faMinus} />{" "}
                          </Button>
                          <LabelFieldT
                            fieldSize={"w100"}
                            type={"text"}
                            placeholder={item.qty}
                          />
                          <Button
                            // className="Add-sub-quan-minus"
                            onClick={() => updateQty(item, "add")}
                            size="sm"
                          >
                            <FontAwesomeIcon icon={faPlus} />{" "}
                          </Button>
                        </Box>
                      </Col>
                    </Row>{" "}
                  </CardLayout>
                ))
              )}
            </Box>
          </Col>
          {selectedProducts.length > 0 && (
            <>
              <Col md={6}>
                Discount
                <br />
                $00.00
              </Col>
              <Col md={6}>
                Subtotal
                <br />
                ${selectedProducts
                  .reduce(
                    (total, item) => total + item.product_price * item.qty,
                    0
                  )
                  .toFixed(2)}{" "}
                
              </Col>
              <Col md={12}>
                <Button className="bg-success w-100 rounded" onClick={handleSubmit}>
                  {" "}
                  Checkout{" "}
                </Button>
                <CheckoutModel
                  show={showPayment}
                  handleClosePayment={handleClosePayment}
                  handleShowPayment={handleClosePayment}
                  handleSubmit={handleSubmit}
                  selectedProducts={selectedProducts}

                />
                </Col>
                <Col md={12}>
                <Button className="primary w-100 rounded" onClick={clearCart}>
                  {" "}
                  Clear Cart{" "}
                </Button>
                </Col>
                
              
            </>
          )}
        </Row>
      </CardLayout>
    </div>
  );
}
