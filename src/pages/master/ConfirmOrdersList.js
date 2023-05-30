import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { CardLayout } from "../../components/cards";
import { getOrders } from "../../redux/actions/orders/orderActions";
import Countdown, { zeroPad } from "react-countdown";

const ConfirmOrdersList = () => {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const { ordersList, isLoading } = useSelector((state) => state.orders.orderReducer);
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  useEffect(() => {
    const filterOrders = ordersList.filter(
      (order) => getMiliSecond(order.updated_at) > 0
    );
    debugger
    setOrders([...filterOrders]);
  }, [ordersList]);

  const getMiliSecond = (date) => {
    const startTime = moment();
    const endTime = moment(new Date(date)).add(20, "minutes");

    const duration = moment.duration(endTime.diff(startTime));
    const sec = duration.asSeconds();
    return sec * 1000;
  };
  const renderer = ({ hours, minutes, seconds, completed }) => {
    return (
      <span>
        {zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    );
  };
  return (
    <>
      <Row className="p-3">
        {orders.length === 0 && isLoading ? (
          <h1
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            Not Found Any Order
          </h1>
        ) : (
            orders.length > 0 && orders.map((order, i) => (
            <Col md={3} key={i}>
              <CardLayout>
                <div className="w-100 d-flex justify-content-between">
                  <div>
                    <h2>Order No {order.order_id}</h2>
                  </div>
                  <div className="mt-2">
                    <h6>
                      1 X <FontAwesomeIcon icon={faUser} />
                    </h6>
                  </div>
                </div>
                <div className="mt-2">
                  <span style={{ fontSize: 22 }}>
                    TIS Software / {order.order_type}
                  </span>
                </div>
                <div className="mt-4">
                  <Button className="mc-btn primary w-100" disabled>
                    <span style={{ fontSize: 24 }}>KITCHEN</span>
                  </Button>
                </div>
                <div className="mt-4">
                  <span style={{ fontSize: 22, fontWeight: 400 }}>
                    1 X Melted Chocolate Cake
                  </span>
                </div>
                <div className="mt-5 d-flex">
                  <Button className="bg-success w-75 rounded-start">
                    <span style={{ fontSize: 24 }}>READY</span>
                  </Button>
                  <Button className="primary w-25 rounded-end">
                    <span style={{ fontSize: 18 }}>
                      <Countdown
                        date={Date.now() + getMiliSecond(order.updated_at)}
                        renderer={renderer}
                      />
                    </span>
                  </Button>
                </div>
              </CardLayout>
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default ConfirmOrdersList;
