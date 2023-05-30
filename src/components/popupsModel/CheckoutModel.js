import React, {useState} from 'react'
import { Row,Col,Modal ,Button} from 'react-bootstrap';
import { Label } from '../elements';
import { LabelField } from '../fields';

export default function CheckoutModel(props) {
    const {selectedProducts} = props;
    const totalAmount = parseInt(selectedProducts.reduce((total, item) => total + item.product_price * item.qty,0).toFixed(2));
    

    const [paymentMethod, setPaymentMethod] = useState("Cash");
    const [receivedAmount, setReceivedAmount] = useState("")
    const handleClosePayment = () => props.handleClosePayment();
  const handleShowPayment = () => props.handleSubmit();
    return (
        <div>
            <Modal
                className="payment-checkout-model"
                show={props.show}
                onHide={handleClosePayment}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <LabelField
                                type={"text"}
                                placeholder={"Cash"}
                                label={"Payment method"}
                                value={paymentMethod}
                                onChange={(e)=> setPaymentMethod(e.target.value)}
                            />
                            <Label className={"bold cus-mt-5"}>Total</Label>
                            <h2 className="bold payment-total-h2 cus-mt-5">
                                ${totalAmount}{" "}
                            </h2>
                        </Col>
                        <Col md={6}>
                            <LabelField
                                type={"number"}
                                placeholder={"Received amount"}
                                label={"Received amount"}
                                value={receivedAmount}
                                onChange={(e)=> setReceivedAmount(e.target.value)}
                            />
                            <Label className={"bold cus-mt-5"}>Change</Label>
                            <h2 className="bold payment-total-h2 green cus-mt-5">
                                ${receivedAmount && parseInt(receivedAmount) > totalAmount ? (receivedAmount - totalAmount).toFixed(2) : "0.00"}
                            </h2>
                            <Label className={"bold cus-mt-5"}>Remaining</Label>
                            <h2 className="bold payment-total-h2 red cus-mt-5">
                                ${receivedAmount && totalAmount > parseInt(receivedAmount) ?  (totalAmount - receivedAmount).toFixed(2) : "0.00"}
                            </h2>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleShowPayment}>
                        Checkout
                    </Button>
                </Modal.Footer>
                </Modal>

        </div>
    )
}
