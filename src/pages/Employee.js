import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Btn, Container, ListTitle, Name, Title } from "../style";
import { useEffect, useState } from "react";
import { fetchEmployeesList, fetchDeleteEmployee } from "../api";
import { useRecoilState, useRecoilValue } from "recoil";
import { clickedEmployee, store } from "../Atom";
import { confirmAlert } from "react-confirm-alert";

const List = styled.div`
  min-width: 1200px;
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
  white-space: nowrap;
  div {
    transition: 0.3s;
    width: 100%;
    display: flex;
  }
  :hover {
    color: ${(props) => (props.active ? "" : "red")}};
  }

  @media (max-width: 800px) {
    font-size: 1em;
  }
`;
const Select = styled.input``;
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
  text-overflow: ellipsis;
  overflow: hidden;
  @media (max-width: 800px) {
    width: 20%;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  padding: 3em;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const ModalContent = styled.div`
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CancelButton = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #dc3545;
  color: #ffffff;
  cursor: pointer;
`;

const ConfirmButton = styled.div`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #2c3e50;
  color: #ffffff;
  cursor: pointer;
`;

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [clicked, setClicked] = useRecoilState(clickedEmployee);
  const [deleteMode, setDeleteMode] = useState(false);
  const obj = useRecoilValue(store);

  employees.sort((a, b) => a.id - b.id);

  const navigator = useNavigate();

  useEffect(() => {
    fetchEmployeesList(obj).then((result) => {
      setEmployees(result);
    });
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

  console.log(employees);

  const handleDeleteEmployee = (employee) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ModalContainer>
            <ModalContent>
              <h1>{employee.name}님</h1>
              <p>정말 삭제하시겠습니까?</p>
              <ButtonsContainer>
                <ConfirmButton
                  tabIndex="0"
                  onClick={() => {
                    onClose();
                    alert("삭제되었습니다.");
                    fetchDeleteEmployee(employee.id, setDeleteMode, obj, setEmployees);
                  }}
                >
                  확인
                </ConfirmButton>
                <CancelButton onClick={onClose}>취소</CancelButton>
              </ButtonsContainer>
            </ModalContent>
          </ModalContainer>
        );
      },
    });
  };

  const handleDeleteBtn = () => {
    setDeleteMode(!deleteMode);
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
        {employees?.map((employee, index) => (
          <ListContainer active={deleteMode} key={employee.id}>
            <div
              onClick={
                deleteMode
                  ? () => handleDeleteEmployee(employee)
                  : () => handleUpdateBtn(index)
              }
            >
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
      {deleteMode ? (
        <Btn onClick={handleDeleteBtn}>취소</Btn>
      ) : (
        <>
          <Btn onClick={handleRegisterBtn}>등록</Btn>
          <Btn onClick={handleDeleteBtn}>삭제</Btn>
        </>
      )}
    </Container>
  );
};

export default Employee;
