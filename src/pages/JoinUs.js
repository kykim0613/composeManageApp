import styled from "styled-components";
import { Container } from "../style";

const JoinForm = styled.form`
  justify-content: center;
  align-items: center;
  flex-wrap: center;
`;

const JoinUs = () => {
  return (
    <Container>
      <JoinForm>
        아이디: <input />
        <br />
        비밀번호: <input />
        <br />
        지점: <select>asfd</select>
      </JoinForm>
    </Container>
  );
};

export default JoinUs;
