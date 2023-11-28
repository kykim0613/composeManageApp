import { Link } from "react-router-dom";
import styled from "styled-components";
import JoinUs from "./JoinUs";
import { useForm } from "react-hook-form";

const AuthContainer = styled.div`
  max-width: 500px;
  border: 1px solid #333;
  margin: 0 auto;
  text-align: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem 0 2rem;
  input {
    width: 65%;
    height: 40px;
    padding: 5px;
    outline: none;
    margin: 0 auto;
    font-size: 1.5rem;
    text-indent: 10px;
  }
  button {
    width: 68%;
    height: 40px;
    margin-top: 1rem;
    padding: 5px;
    cursor:pointer;
    background: rgba(251,215,5);
    border: 1px solid #000;
  }
`;

const Auth = () => {
  const {register} = useForm()

    const handleAuthBtn = (e) => {
        e.preventDefault()
    }
  return (
    <AuthContainer>
      <form onClick={handleAuthBtn}>
        <input type="text" placeholder="ID"/>
        <input type="password" placeholder="Password" />
        <button>확인</button>
      </form>
      <Link to="/JoinUs">
      <button>회원가입</button>
      </Link>
    </AuthContainer>
  );
};

export default Auth;
