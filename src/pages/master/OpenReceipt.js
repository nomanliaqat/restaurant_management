import React, {useEffect} from "react";
import { Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "../../components/elements";
import { Th, Thead, Tr } from "../../components/elements/Table";
import { Text } from "../../components/elements";
import { LabelField } from "../../components/fields";
import { getOrders } from "../../redux/actions/orders/orderActions";
import moment from "moment";
export default function OpenReceipt() {
  const dispatch = useDispatch()
  const { ordersList, isLoading } = useSelector(
    (state) => state.orders.orderReducer
  );
useEffect(()=> {
  dispatch(getOrders())
},[])
  return (
    <div>
      <Row>
        <Col md={12}>
          <Box className={"open-receipt-box"}>
            <LabelField
              option={[
                "Sale Type",
                "In-Store",
                "Delivery",
                "Takeaway",
                // "dwe",
                // "Hungerstation",
                // "Marsool",
              ]}
              fieldSize=" mr-10 field-w-200 h-md "
            />
            <LabelField
              option={[
                "Staff",
                "TIS Software",
                "Cashier",
                "WAITER 2",
                "MOHAMMAD",
                "Ahad",
              ]}
              fieldSize=" field-w-200 h-md"
            />
          </Box>
        </Col>
        <Col md={12}>
          <Table>
            <Thead>
              {ordersList.length === 0 && isLoading ? (
                <h1 className="text-center mt-4">Data not found</h1>  
              ):(
                ordersList.length > 0 && ordersList.map((order, i) => (
              <Tr className={"verticle-align-m"} key={i}>
                <Th>
                  <h4>
                    {/* Apri 3 */}
                    {order.created_at.split('-')[0]}
                    </h4>
                  <Text className={"f-13 bold"} as="span">
                  {moment(order.updated_at).format("hh:mm A")}
                  </Text>
                </Th>
                <Th>
                  <h4>#{order.order_id}</h4>
                  <Text className={"f-13 bold open-receipt-span"} as="span">
                    {order.customer}
                  </Text>
                </Th>
                <Th>
                  <Text className={"f-13 bold open-receipt-span"} style={{backgroundColor: order.order_type === "Delivery" ? "#f29b30": order.order_type === "In-Store" && "#127a65"}} as="span">
                    {order.order_type}
                  </Text>
                </Th>
                <Th>
                  {" "}
                  <h2 className="text-end secound-color"> {parseInt(order.order_amount)} ریال</h2>{" "}
                </Th>
              </Tr>)))}
              {/* <Tr className={"verticle-align-m"}>
                <Th>
                  <h4>Apri 3</h4>
                  <Text className={"f-13 bold"} as="span">
                    22:33
                  </Text>
                </Th>
                <Th>
                  <h4>#3424</h4>
                  <Text className={"f-13 bold open-receipt-span"} as="span">
                    Ahmed
                  </Text>
                </Th>
                <Th>
                  <Text className={"f-13 bold open-receipt-span"} as="span">
                    Takeaway
                  </Text>
                </Th>
                <Th>
                  {" "}
                  <h2 className="text-end secound-color"> 15 ریال</h2>{" "}
                </Th>
              </Tr> */}
            </Thead>
          </Table>
        </Col>
      </Row>
    </div>
  );
}
