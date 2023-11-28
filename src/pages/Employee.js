import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Btn, Container, ListTitle, Name, Title } from "../style";
import { useEffect, useState } from "react";
import axios from "axios";
import { employeesListApi } from "../api";
import Register from "./Register";
import { useRecoilState } from "recoil";
import { clickedEmployee, format } from "../Atom";

const List = styled.div`
  min-width: 900px;
  margin: 0 auto;
  border-top: 2px solid #333;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  font-size: 1em;
  justify-content: center;
  align-items: center;
  font-size: 0.7em;
  cursor: pointer;
  div {
    transition: 0.3s;
    width: 100%;
    display: flex;
  }
  :hover {
    color: red;
  }

  @media (max-width: 800px) {
    font-size: 1em;
  }
`;

const Num = styled.p`
  width: 4%;
  @media (max-width: 800px) {
    width: 20%;
  }
`;

const Rank = styled.p`
  width: 4%;
  @media (max-width: 800px) {
    display: none;
  }
`;

const HourlyWage = styled.p`
  width: 4%;
  @media (max-width: 800px) {
    display: none;
  }
`;

const FormatPhone = styled.p`
  width: 10%;
  @media (max-width: 800px) {
    width: 25%;
  }
`;

const BankName = styled.p`
  width: 4%;
  @media (max-width: 800px) {
    display: none;
  }
`;

const BankAccount = styled.p`
  width: 11%;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Jumin = styled.p`
  width: 13%;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Age = styled.p`
  width: 3%;
  @media (max-width: 800px) {
    width: 10%;
  }
`;

const Gender = styled.p`
  width: 3%;
  @media (max-width: 800px) {
    width: 10%;
  }
`;

const Address = styled.p`
  width: 15%;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Email = styled.p`
  width: 15%;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Day = styled.p`
  width: 5%;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Memo = styled.p`
  width: 5%;
  @media (max-width: 800px) {
    width: 20%;
  }
`;

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [clicked, setClicked] = useRecoilState(clickedEmployee);
  const navigator = useNavigate();
  useEffect(() => {
    const EmploayeesListFetch = async (employeesListApi) => {
      try {
        const res = await axios.get(employeesListApi);

        console.log(res.data.data);

        return setEmployees(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    EmploayeesListFetch(employeesListApi);
  }, []);

  const handleUpdateBtn = (index) => {
    navigator("/register");
    const clicked = employees[index];

    setClicked(clicked);
  };

  const handleRegisterBtn = () => {
    navigator("/register");
    setClicked({});
  };

  const year = new Date(Date.now()).getFullYear();
  return (
    <Container>
      <List>
        <Title>
          <ListTitle>
            <Num>번호</Num>
            <Name>이름</Name>
            <Rank>직급</Rank>
            <HourlyWage>시급</HourlyWage>
            <FormatPhone>전화번호</FormatPhone>
            <BankName>은행</BankName>
            <BankAccount>계좌번호</BankAccount>
            <Jumin>주민등록번호</Jumin>
            <Age>나이</Age>
            <Gender>성별</Gender>
            <Address>주소</Address>
            <Email>이메일</Email>
            <Day>입사일</Day>
            <Memo>비고</Memo>
          </ListTitle>
        </Title>
        {employees.map((employee, index) => (
          <ListContainer key={employee.id}>
            <div onClick={() => handleUpdateBtn(index)}>
              <Num>{index + 1}</Num>
              <Name>{employee.name}</Name>
              <Rank>{employee.rank}</Rank>
              <HourlyWage>
                {employee.hourlyWage === 0 ? 9000 : employee.hourlyWage}
              </HourlyWage>
              <FormatPhone>{employee.formatPhone}</FormatPhone>
              <BankName>{employee.bankName}</BankName>
              <BankAccount>{employee.bankAccount}</BankAccount>
              <Jumin>
                {employee.jumin.slice(0, 5)}-{employee.jumin.slice(6, 13)}
              </Jumin>
              <Age>
                {employee.jumin.slice(6, 7) === "3" ||
                employee.jumin.slice(6, 7) === "4"
                  ? year - Number(`20${employee.jumin.slice(0, 2)}`) + 1
                  : employee.jumin.slice(6, 7) === "1" ||
                    employee.jumin.slice(6, 7) === "2"
                  ? year - Number(`19${employee.jumin.slice(0, 2)}`) + 1
                  : null}
              </Age>
              <Gender>
                {employee.jumin.slice(6, 7) === "1" ||
                employee.jumin.slice(6, 7) === "3"
                  ? "남"
                  : employee.jumin.slice(6, 7) === "2" ||
                    employee.jumin.slice(6, 7) === "4"
                  ? "여"
                  : ""}
              </Gender>
              <Address>{employee.address}</Address>
              <Email>{employee.email}</Email>
              <Day>{employee.startDate}</Day>
              <Memo>{employee.memo}</Memo>
            </div>
          </ListContainer>
        ))}
      </List>
      <Btn onClick={handleRegisterBtn}>등록</Btn>
    </Container>
  );
};

export default Employee;
