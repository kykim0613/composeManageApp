import styled from "styled-components";

const Container = styled.div`
    max-width: 600px;
    display: flex;
    margin: 0 auto;
    padding-top: 1.5rem;
`

const Btn = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  cursor: pointer;
`;

const CommuteBtn = () => {
  return (
    <Container>
      <Btn>시간표</Btn> | <Btn>출퇴근 현황</Btn>
    </Container>
  );
};

export default CommuteBtn;
