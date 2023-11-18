import { Link } from "react-router-dom";
import styled from "styled-components";
import { Btn, Container } from "../style";
import { useEffect, useState } from "react";
import axios from "axios";

const List = styled.div`
  min-width: 800px;
  margin: 0 auto;
  border-top: 2px solid #333;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;
const Title = styled.div`
  margin-top: 2px;
  border-top: 1px solid #333;
  width: 100%;
`;

const ListTitle = styled.div`
  display: flex;
  font-size: 1em;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: beige;
  font-size: 0.7em;
  @media (max-width: 800px) {
    font-size: 1em;
  }
`;
const ListContainer = styled.div`
  display: flex;
  font-size: 1em;
  justify-content: center;
  align-items: center;
  font-size: 0.7em;
  @media (max-width: 800px) {
    font-size: 1em;
  }
`;

const Num = styled.p`
  width: 3%;
  @media (max-width: 800px) {
    width:5%
  }
`;

const Name = styled.p`
  width: 5%;
  @media (max-width: 800px) {
    width:15%
  }
`;

const Rank = styled.p`
  width: 4%;
  @media (max-width: 800px) {
    display:none;
  }
`;

const HourlyWage = styled.p`
  width: 5%;
  @media (max-width: 800px) {
    display:none;
  }
`;

const FormatPhone = styled.p`
  width: 10%;
  @media (max-width: 800px) {
    width:25%
  }
`;

const BankName = styled.p`
  width: 5%;
  @media (max-width: 800px) {
    display:none;
  }
`;

const BankAccount = styled.p`
  width: 10%;
  @media (max-width: 800px) {
    display:none;
  }
`;

const Jumin = styled.p`
  width: 10%;
  @media (max-width: 800px) {
    display:none;
  }
`;

const Age = styled.p`
  width: 3%;
  @media (max-width: 800px) {
    width:10%
  }
`;

const Gender = styled.p`
  width: 3%;
  @media (max-width: 800px) {
    width:10%
  }
`;

const Address = styled.p`
  width: 14%;
  @media (max-width: 800px) {
    display:none;
  }
`;

const Email = styled.p`
  width: 15%;
  @media (max-width: 800px) {
    display:none;
  }
`;

const StartDate = styled.p`
  width: 8%;
  @media (max-width: 800px) {
    display:none;
  }
`;

const Memo = styled.p`
  width: 5%;
  @media (max-width: 800px) {
    width:20%
  }
`;

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const api = "https://152.67.219.74/api/employee/list?storeId=1&isRetired=Y";

    const fetchData = async () => {
      try {
        const res = await axios(api);

        const response = res.data;

        const data = response.data;

        setEmployees(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log(employees);

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
            <StartDate>입사일</StartDate>
            <Memo>비고</Memo>
          </ListTitle>
          {employees.map((employee, index) => (
            <ListContainer key={employee.id}>
              <Num>{index + 1}</Num>
              <Name>{employee.name}</Name>
              <Rank>{employee.rank}</Rank>
              <HourlyWage>
                {employee.hourlyWage === 0 ? 9000 : employee.hourlyWage}
              </HourlyWage>
              <FormatPhone>{employee.formatPhone}</FormatPhone>
              <BankName>{employee.bankName}</BankName>
              <BankAccount>{employee.bankAccount}</BankAccount>
              <Jumin>{employee.jumin}</Jumin>
              <Age>
                {employee.jumin.slice(6, 7) === 3 || 4
                  ? year - Number(`19${employee.jumin.slice(0, 2)}`) + 1
                  : employee.jumin.slice(6, 7) === 1 || 2
                  ? year - Number(`20${employee.jumin.slice(0, 2)}`) + 1
                  : null}
              </Age>
              <Gender>{employee.gender ? "남" : "여"}</Gender>
              <Address>{employee.address}</Address>
              <Email>{employee.email}</Email>
              <StartDate>{employee.startDate}</StartDate>
              <Memo>{employee.memo}</Memo>
            </ListContainer>
          ))}
        </Title>
      </List>
      <Btn>
        <Link to={"/register"}>등록</Link>
      </Btn>
    </Container>
  );
};

export default Employee;
