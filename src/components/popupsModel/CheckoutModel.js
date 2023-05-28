import React from 'react'
import { Row,Col,Modal ,Button} from 'react-bootstrap';
import { Label } from '../elements';
import { LabelField } from '../fields';

export default function CheckoutModel(props) {
    
    const handleClosePayment = () => props.handleClosePayment();
  const handleShowPayment = () => props.handleShowPayment();
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
                            />
                            <Label className={"bold cus-mt-5"}>Total</Label>
                            <h2 className="bold payment-total-h2 cus-mt-5">
                                $346.2
                            </h2>
                        </Col>
                        <Col md={6}>
                            <LabelField
                                type={"number"}
                                placeholder={"Received amount"}
                                label={"Received amount"}
                            />
                            <Label className={"bold cus-mt-5"}>Change</Label>
                            <h2 className="bold payment-total-h2 green cus-mt-5">
                                $0.0
                            </h2>
                            <Label className={"bold cus-mt-5"}>Remaining</Label>
                            <h2 className="bold payment-total-h2 red cus-mt-5">
                                $55.0
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
