import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { CardLayout } from "../../components/cards";
import { Box } from "../../components/elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faClock,
  faAngleDown,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Text } from "../../components/elements";
import CheckoutModel from "../../components/popupsModel/CheckoutModel";
export default function ProductViewReceipt({ id }) {
  // const [showPayment, setShowPayment] = useState(false);
  //   const handleClosePayment = () => setShowPayment(false);
  //   const handleShowPayment = () => setShowPayment(true);
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
            #2324 <FontAwesomeIcon icon={faAngleDown} />
          </Col>
          <Col md={12}>
            <Box className={"pv-receipt-box"}>
              <CardLayout>
                <Row>
                  <Col md={8}>
                    <Text className="bold" as="span">
                      Al - bebsi with Lasgana{" "}
                    </Text>
                    <br />
                    <Text as="span">Total : 34.01 $ </Text>
                  </Col>
                  <Col md={4} className="text-end cusur-p">
                    <FontAwesomeIcon icon={faPlus} />
                  </Col>
                </Row>
              </CardLayout>
            </Box>
          </Col>
          <Col md={6}>
            Discount
            <br />
            00.33
          </Col>
          <Col md={6}>
            Subtotal
            <br />
            00.33
          </Col>
          <Col md={12}>
            <Button className="w-100"> Delete receipt </Button>
            {/* <CheckoutModel show={showPayment} handleClosePayment={handleClosePayment} handleShowPayment={handleClosePayment}/> */}
          </Col>
        </Row>
      </CardLayout>
    </div>
  );
}
