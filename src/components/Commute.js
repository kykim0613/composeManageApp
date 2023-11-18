import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CommuteBtn from "./CommuteBtn";

const Container = styled.div`
  min-width: 600px;
  margin: 0 auto;
  :first-child {
    align-items: right;
    justify-content: right;
  }
`;
const AttendanceForm = styled.form`
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 3.5rem;
`;



const Commute = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`https://152.67.219.74/api/employee/names?storeName=임시점포`)
        console.log(data)
      } catch(error) {
        console.log(error)
      }
    }

    fetchData()

  }, [])

  const time = new Date();
  const koreaTime = new Date(time.getTime() + 9 * 60 * 60 * 1000);
  useEffect(() => {
    setTimeout(() => {
      setValue("");
    }, 5000);
  }, [value]);

  const handleAttendanceBtn = (e) => {
    e.preventDefault();
    if (value !== "") {
      alert("연속해서 버튼을 누를 수 없습니다.");
    } else {
      setValue(koreaTime.toISOString().slice(0, 16));
    }
  };

  const handleLeaveBtn = (e) => {
    e.preventDefault();
    if (value !== "") {
      alert("연속해서 버튼을 누를 수 없습니다.");
    } else {
      setValue(koreaTime.toISOString().slice(0, 16));
    }
  };
  console.log(value);

  return (
    <Container>
    <CommuteBtn />
      <AttendanceForm>
        <input type="datetime-local" value={value} readOnly />
        <button onClick={handleAttendanceBtn}>출근</button>
        <button onClick={handleLeaveBtn}>퇴근</button>
      </AttendanceForm>
    </Container>
  );
};

export default Commute;
