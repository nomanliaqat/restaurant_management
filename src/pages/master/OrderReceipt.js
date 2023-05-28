import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CardLayout } from "../../components/cards";
import PageLayout from "../../layouts/PageLayout";
import Header from "../../layouts/Header";
import OpenReceipt from "./OpenReceipt";
import AchieveReceipt from "./AchieveReceipt";
import OfflineAchieveReceipt from "./OfflineAchieveReceipt";
import { Text } from "../../components/elements";
import CusTabButtons from "../../components/elements/CusTabButtons";
import LayoutWithoutSidebar from "../../layouts/LayoutWithoutSidebar";

export default function OrderReceipt() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const buttonList = [
    { text: "Open", index: 0, id: "" },
    { text: "Achieve ", index: 1, id: "1" },
    { text: "Offline Achieve ", index: 2, id: "2" },
  ];
  return (
    <div>
      <LayoutWithoutSidebar>
        <Row>
          <Col md={12}>
            <CardLayout className={"f-13 cusTabsbuttons"}>
              {buttonList.map((buttonText) => (
                <CusTabButtons
                  key={buttonText.index}
                  buttonText={buttonText}
                  activeIndex={activeIndex}
                  handleItemClick={handleItemClick}
                />
              ))}
            </CardLayout>
          </Col>
          <Col md={12}>
            <CardLayout>
              {activeIndex === 0 && <OpenReceipt />}
              {activeIndex === 1 && <AchieveReceipt />}
              {activeIndex === 2 && <OfflineAchieveReceipt />}
            </CardLayout>
          </Col>
        </Row>
      </LayoutWithoutSidebar>
    </div>
  );
}
