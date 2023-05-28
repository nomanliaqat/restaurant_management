import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { CardLayout } from "../../components/cards";

const ConfirmOrdersList = () => {
    return <>
    <Row className='p-3'>
        <Col md={3}> 
            <CardLayout>
                <div className='w-100 d-flex justify-content-between'>
                    <div>
                        <h2>Order No  1115</h2>
                    </div>
                    <div className='mt-2'>
                        <h6>1 X <FontAwesomeIcon icon={faUser} /></h6>
                    </div>
                </div>
                <div className='mt-2'>
                    <span style={{fontSize: 22}}>TIS Software / Takeaway</span>
                </div>
                <div className='mt-4'>
                    <Button className="mc-btn primary w-100" disabled><span style={{fontSize: 24}}>KITCHEN</span></Button>
                </div>
                <div className='mt-4'>
                    <span style={{fontSize: 22, fontWeight: 400}}>1 X Melted Chocolate Cake</span>
                </div>
                <div className='mt-5 d-flex'>
                    <Button className='bg-success w-75 rounded-start'><span style={{fontSize: 24}}>READY</span></Button>
                    <Button className='primary w-25 rounded-end'><span style={{fontSize: 18}}>00:22</span></Button>
                </div>
                </CardLayout>
        </Col>
        <Col md={3}> 
            <CardLayout>
                <div className='w-100 d-flex justify-content-between'>
                    <div>
                        <h2>Order No  1115</h2>
                    </div>
                    <div className='mt-2'>
                        <h6>1 X <FontAwesomeIcon icon={faUser} /></h6>
                    </div>
                </div>
                <div className='mt-2'>
                    <span style={{fontSize: 22}}>TIS Software / Takeaway</span>
                </div>
                <div className='mt-4'>
                    <Button className="mc-btn primary w-100" disabled><span style={{fontSize: 24}}>KITCHEN</span></Button>
                </div>
                <div className='mt-4'>
                    <span style={{fontSize: 22, fontWeight: 400}}>1 X Melted Chocolate Cake</span>
                </div>
                <div className='mt-5 d-flex'>
                    <Button className='bg-success w-75 rounded-start'><span style={{fontSize: 24}}>READY</span></Button>
                    <Button className='primary w-25 rounded-end'><span style={{fontSize: 18}}>00:22</span></Button>
                </div>
                </CardLayout>
        </Col>
        <Col md={3}> 
            <CardLayout>
                <div className='w-100 d-flex justify-content-between'>
                    <div>
                        <h2>Order No  1115</h2>
                    </div>
                    <div className='mt-2'>
                        <h6>1 X <FontAwesomeIcon icon={faUser} /></h6>
                    </div>
                </div>
                <div className='mt-2'>
                    <span style={{fontSize: 22}}>TIS Software / Takeaway</span>
                </div>
                <div className='mt-4'>
                    <Button className="mc-btn primary w-100" disabled><span style={{fontSize: 24}}>KITCHEN</span></Button>
                </div>
                <div className='mt-4'>
                    <span style={{fontSize: 22, fontWeight: 400}}>1 X Melted Chocolate Cake</span>
                </div>
                <div className='mt-5 d-flex'>
                    <Button className='bg-success w-75 rounded-start'><span style={{fontSize: 24}}>READY</span></Button>
                    <Button className='primary w-25 rounded-end'><span style={{fontSize: 18}}>00:22</span></Button>
                </div>
                </CardLayout>
        </Col>
        <Col md={3}> 
            <CardLayout>
                <div className='w-100 d-flex justify-content-between'>
                    <div>
                        <h2>Order No  1115</h2>
                    </div>
                    <div className='mt-2'>
                        <h6>1 X <FontAwesomeIcon icon={faUser} /></h6>
                    </div>
                </div>
                <div className='mt-2'>
                    <span style={{fontSize: 22}}>TIS Software / Takeaway</span>
                </div>
                <div className='mt-4 mb-2'>
                    <Button className="mc-btn primary w-100" disabled><span style={{fontSize: 24}}>KITCHEN</span></Button>
                </div>
                <div className='mt-4'>
                    <span style={{fontSize: 22, fontWeight: 400}}>1 X Melted Chocolate Cake</span>
                </div>
                <div className='mt-5 d-flex'>
                    <Button className='bg-success w-75 rounded-start'><span style={{fontSize: 24}}>READY</span></Button>
                    <Button className='primary w-25 rounded-end'><span style={{fontSize: 18}}>00:22</span></Button>
                </div>
                </CardLayout>
        </Col>
    </Row>
    
    </>
}

export default ConfirmOrdersList;