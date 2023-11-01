import styled from "styled-components";

const Container = styled.div`
    max-height: 600px;
    overflow: auto;
    padding-top: 3.5rem;
`
const ListContainer = styled.table`
  width: 60%;
  border: 1px solid #333;
  margin: 0 auto;
`;

const EmployeesList = styled.td`
  border: 1px solid #333;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
  text-align: center;
  border-top: none;
  border-bottom: none;
`;

const Employee = () => {
  return (
    <Container>
      <ListContainer>
        <EmployeesList>김윤기</EmployeesList>
        <EmployeesList>전화번호</EmployeesList>
        <EmployeesList>ugkim0613@naver.com</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
      </ListContainer>
      <ListContainer>
        <EmployeesList>김윤기</EmployeesList>
        <EmployeesList>전화번호</EmployeesList>
        <EmployeesList>ugkim0613@naver.com</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
      </ListContainer>
      <ListContainer>
        <EmployeesList>김윤기</EmployeesList>
        <EmployeesList>전화번호</EmployeesList>
        <EmployeesList>ugkim0613@naver.com</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
      </ListContainer>
      <ListContainer>
        <EmployeesList>김윤기</EmployeesList>
        <EmployeesList>전화번호</EmployeesList>
        <EmployeesList>ugkim0613@naver.com</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
      </ListContainer>
      <ListContainer>
        <EmployeesList>김윤기</EmployeesList>
        <EmployeesList>전화번호</EmployeesList>
        <EmployeesList>ugkim0613@naver.com</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
      </ListContainer>
      <ListContainer>
        <EmployeesList>김윤기</EmployeesList>
        <EmployeesList>전화번호</EmployeesList>
        <EmployeesList>ugkim0613@naver.com</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
        <EmployeesList>포지션</EmployeesList>
      </ListContainer>
    </Container>
  );
};

export default Employee;
