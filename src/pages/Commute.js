import { useEffect, useState } from "react";
import styled from "styled-components";
import { Btn, Container, ListTitle, Title } from "../style";
import DatePicker from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import "flatpickr/dist/flatpickr.css";

const TopLine = styled.div`
  border-top: 2px solid #333;
`;

const ListWrap = styled.div`
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ListContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #333;
`;

const TimeWrap = styled.div`
  width: 20%;
  input {
    width: 60%;
    padding: 0.4em;
    margin: 2px 0;
  }
`;

const Name = styled.p`
  width: 15%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;
const Day = styled.p`
  width: 25%;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;

const Time = styled.p``;

const BtnContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
`;

const Commute = () => {
  const [toggle, setToggle] = useState(true);
  const [realToggle, setRealToggle] = useState(false);
  const [calToggle, setCalToggle] = useState(false);
  const [value, setValue] = useState({
    storeId: "1",
    employeeId: "1",
    realStartTime: "2023-11-30T12:34:45",
    calStartTime: "2023-11-30T12:30:00",
    realEndTime: "2023-11-30T14:09:45",
    calEndTime: "2023-11-30T14:00:00",
  });

  //날짜 포맷
  const StartYearFormat = value.calStartTime.slice(0, 4);
  const StartMonthFormat = value.calStartTime.slice(5, 7);
  const StartDateFormat = value.calStartTime.slice(8, 10);
  const day = new Date(value.calStartTime).getDay();
  const dayFormat =
    day === 0
      ? "일"
      : day === 1
      ? "월"
      : day === 2
      ? "화"
      : day === 3
      ? "수"
      : day === 4
      ? "목"
      : day === 5
      ? "금"
      : day === 6
      ? "토"
      : null;

  //실제 시간 포맷
  const realStartHourFormat = value.realStartTime.slice(11, 13);
  const realStartMinFormat = value.realStartTime.slice(14, 16);
  const realStartSecFormat = value.realStartTime.slice(17, 19);

  const realEndHourFormat = value.realEndTime.slice(11, 13);
  const realEndMinFormat = value.realEndTime.slice(14, 16);
  const realEndSecFormat = value.realEndTime.slice(17, 19);

  //보정 시간 포맷
  const calStartHourFormat = value.calStartTime.slice(11, 13);
  const calStartMinFormat = value.calStartTime.slice(14, 16);
  const calStartSecFormat = value.calStartTime.slice(17, 19);

  const calEndHourFormat = value.calEndTime.slice(11, 13);
  const calEndMinFormat = value.calEndTime.slice(14, 16);
  const calEndSecFormat = value.calEndTime.slice(17, 19);

  //근무 시간 포맷
  const workHour = calEndHourFormat - calStartHourFormat;
  const HourFormat = workHour < 10 ? `0${workHour}` : workHour;
  const workMin = Math.abs(calEndMinFormat - calStartMinFormat);
  const minFormat = workMin < 10 ? `0${workMin}` : workMin;

  const realStartTime = `${realStartHourFormat}:${realStartMinFormat}:${realStartSecFormat}`;
  const realEndTime = `${realEndHourFormat}:${realEndMinFormat}:${realEndSecFormat}`;

  const calStartTime = `${calStartHourFormat}:${calStartMinFormat}:${calStartSecFormat}`;
  const calEndTime = `${calEndHourFormat}:${calEndMinFormat}:${calEndSecFormat}`;

  const date = `${StartYearFormat}-${StartMonthFormat}-${StartDateFormat} (${dayFormat})`;

  const format = `${StartYearFormat}-${StartMonthFormat}-${StartDateFormat}T`;

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleRealToggle = () => {
    setRealToggle(!realToggle);
  };

  const handleCalToggle = () => {
    setCalToggle(!calToggle);
  };

  const handleBtn = () => {
    setRealToggle(false);
    setCalToggle(false);
  };

  const handleRealStartInput = (selectedDates, dateStr) => {
    const time = format+`${dateStr}`;

    setValue({
      storeId: value.storeId,
      employeeId: value.employeeId,
      realStartTime: time,
      calStartTime: value.calStartTime,
      realEndTime: value.realEndTime,
      calEndTime: value.calEndTime,
    });
  };

  const handleRealEndInput = (selectedDates, dateStr) => {
    const time = format+`${dateStr}`;

    setValue({
      storeId: value.storeId,
      employeeId: value.employeeId,
      realStartTime: value.realStartTime,
      calStartTime: value.calStartTime,
      realEndTime: time,
      calEndTime: value.calEndTime,
    });
  }

  const handleCalStartInput = (selectedDates, dateStr) => {
    const time = format+`${dateStr}`;

    setValue({
      storeId: value.storeId,
      employeeId: value.employeeId,
      realStartTime: value.realStartTime,
      calStartTime: time,
      realEndTime: value.realEndTime,
      calEndTime: value.calEndTime,
    });
  }

  const handleCalEndInput = (selectedDates, dateStr) => {
    const time = format+`${dateStr}`;

    setValue({
      storeId: value.storeId,
      employeeId: value.employeeId,
      realStartTime: value.realStartTime,
      calStartTime: value.calStartTime,
      realEndTime: value.realEndTime,
      calEndTime: time,
    });
  }

  return (
    <Container>
      <TopLine>
        <Title onClick={handleToggle}>
          <ListTitle>
            <ListWrap>
              <Day>날짜</Day>
              <Name>이름</Name>
              <TimeWrap>실제 시간</TimeWrap>
              <TimeWrap>보정 시간</TimeWrap>
              <TimeWrap>근무 시간</TimeWrap>
            </ListWrap>
          </ListTitle>
        </Title>
      </TopLine>
      <ListContainer>
        <Day>{date}</Day>
        <Name>김윤기</Name>
        {realToggle ? (
          <TimeWrap>
            <DatePicker
              options={{
                enableTime: true,
                noCalendar: true,
                enableSeconds: true,
                dateFormat: "H:i:S",
                defaultDate: realStartTime,
                onChange: handleRealStartInput,
              }}
            />
            <DatePicker
              options={{
                enableTime: true,
                noCalendar: true,
                enableSeconds: true,
                dateFormat: "H:i:S",
                defaultDate: realEndTime,
                onChange: handleRealEndInput
              }}
            />
          </TimeWrap>
        ) : (
          <TimeWrap>
            <Time onClick={handleRealToggle}>{realStartTime}</Time>
            <Time onClick={handleRealToggle}>{realEndTime}</Time>
          </TimeWrap>
        )}
        {calToggle ? (
          <TimeWrap>
            <DatePicker
              options={{
                enableTime: true,
                noCalendar: true,
                enableSeconds: true,
                dateFormat: "H:i:S",
                defaultDate: calStartTime,
                onChange: handleCalStartInput
              }}
            />
            <DatePicker
              options={{
                enableTime: true,
                noCalendar: true,
                enableSeconds: true,
                dateFormat: "H:i:S",
                defaultDate: calEndTime,
                onChange: handleCalEndInput
              }}
            />
          </TimeWrap>
        ) : (
          <TimeWrap>
            <Time onClick={handleCalToggle}>{calStartTime}</Time>
            <Time onClick={handleCalToggle}>{calEndTime}</Time>
          </TimeWrap>
        )}
        <TimeWrap>
          {HourFormat}:{minFormat}
        </TimeWrap>
      </ListContainer>
      {(realToggle || calToggle) && (
        <BtnContainer>
          <Btn onClick={handleBtn}>등록</Btn>
          <Btn onClick={handleBtn}>취소</Btn>
        </BtnContainer>
      )}
    </Container>
  );
};

export default Commute;
