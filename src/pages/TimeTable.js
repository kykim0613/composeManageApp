import { useEffect, useState } from "react";
import GetUserColor from "../func/GetUserColor";
import { Col, Row } from "antd";
import styled from "styled-components";
import DateRangeInput from "../components/DateRangeInput";

const Container = styled.div`
  width: 80%;
  min-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 2.5rem 0;
  height: 60vh;
  overflow-y: auto;
`;

const TimeTableContainer = styled.div`
  boxsizing: border-box;
  border: 1px solid #e8e8e8;
`;

const TimeTable = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [prev, setPrev] = useState();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const employees = [
      {
        title: "윤기",
        start: "2023-11-25T12:00:00",
        end: "2023-11-25T18:00:00",
        id: "1",
        backgroundColor: "",
      },
      {
        title: "지훈",
        start: "2023-11-24T09:00:00",
        end: "2023-11-24T17:00:00",
        id: "2",
        backgroundColor: "",
      },
      {
        title: "우리",
        start: "2023-11-25T10:00:00",
        end: "2023-11-25T14:00:00",
        id: "3",
        backgroundColor: "",
      },
    ];
    const events = GetUserColor(employees);
    setEvents(events);
  }, []);

  const titleRowStyle = { height: "60px", lineHeight: "60px", borderBottom: "1px solid #e8e8e8" };
  const firstRowStyle = {
    boxSizing: "border-box",
  };
  const rowStyle = {
    boxSizing: "border-box",
    borderLeft: "1px solid #e8e8e8",
  };
  const lowRowStyle = { height: "60px", lineHeight: "60px" };
  const firstCol = { boxSizing: "border-box", borderBottom: "1px solid #e8e8e8"};
  const colStyle = { boxSizing: "border-box", borderBottom: "1px solid #e8e8e8", borderLeft: "1px solid #e8e8e8"};
  const lastColStyle = {
    boxSizing: "border-box",
  };

  return (
    <Container>
      <DateRangeInput />
      <div style={{ padding: 20 }}>
        <h3>주간 근무표</h3>
        <TimeTableContainer>
        <Row style={titleRowStyle}>
          <Col style={firstRowStyle} span={3}>
            시간/요일
          </Col>
          <Col style={rowStyle} span={3}>
            월요일
          </Col>
          <Col style={rowStyle} span={3}>
            화요일
          </Col>
          <Col style={rowStyle} span={3}>
            수요일
          </Col>
          <Col style={rowStyle} span={3}>
            목요일
          </Col>
          <Col style={rowStyle} span={3}>
            금요일
          </Col>
          <Col style={rowStyle} span={3}>
            토요일
          </Col>
          <Col style={rowStyle} span={3}>
            일요일
          </Col>
        </Row>
        <Row style={lowRowStyle}>
          <Col style={firstCol} span={3}>
            08:00
          </Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
        </Row>
        <Row style={lowRowStyle}>
          <Col style={firstCol} span={3}>
            09:00
          </Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
        </Row>
        <Row style={lowRowStyle}>
          <Col style={firstCol} span={3}>
            10:00
          </Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
        </Row>
        <Row style={lowRowStyle}>
          <Col style={firstCol} span={3}>
            11:00
          </Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
        </Row>
        <Row style={lowRowStyle}>
          <Col style={firstCol} span={3}>
            12:00
          </Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
        </Row>
        <Row style={lowRowStyle}>
          <Col style={firstCol} span={3}>
            13:00
          </Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
        </Row>
        <Row style={lowRowStyle}>
          <Col style={firstCol} span={3}>
            14:00
          </Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
        </Row>
        <Row style={lowRowStyle}>
          <Col style={firstCol} span={3}>
            15:00
          </Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
        </Row>
        <Row style={lowRowStyle}>
          <Col style={firstCol} span={3}>
            13:00
          </Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
        </Row>
        <Row style={lowRowStyle}>
          <Col style={firstCol} span={3}>
            17:00
          </Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
        </Row>
        <Row style={lowRowStyle}>
          <Col style={firstCol} span={3}>
            16:00
          </Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
        </Row>
        <Row style={lowRowStyle}>
          <Col style={firstCol} span={3}>
            19:00
          </Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
        </Row>
        <Row style={lowRowStyle}>
          <Col style={firstCol} span={3}>
            20:00
          </Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
        </Row>
        <Row style={lowRowStyle}>
          <Col style={firstCol} span={3}>
            21:00
          </Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
        </Row>
        <Row style={lowRowStyle}>
          <Col style={firstCol} span={3}>
            22:00
          </Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
          <Col style={colStyle} span={3}></Col>
        </Row>
        {/* 나머지 시간대를 필요에 따라 추가할 수 있습니다 */}
        </TimeTableContainer>
      </div>
    </Container>
  );
};

export default TimeTable;
