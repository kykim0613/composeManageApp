import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { user } from "../Atom";
import "../axiosConfig";
import { fetchLogin } from "../api";

const AuthContainer = styled.div`
  max-width: 500px;
  border: 1px solid #ccc;
  margin: 0 auto;
  text-align: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem 0 2rem;
  border-radius: 6px;
  button {
    width: 68%;
    height: 50px;
    margin-top: 1rem;
    cursor: pointer;
    background: #2c3e50;
    color: #fff;
    border: 1px solid #ccc;
    font-size: 18px;
    border-radius: 6px;
  }
`;

const AuthInput = styled.input`
  width: 65%;
  height: 40px;
  padding: 5px;
  margin: 0 auto;
  font-size: 1.5rem;
  text-indent: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  &:focus {
    outline: none;
    border-color: #222; // 포커스 시 테두리 색상 변경
  }
`;

const LogIn = () => {
  const [userinfo, setUserinfo] = useState({
    username: "",
    password: ""
  });
  const [userObj, setUserObj] = useRecoilState(user);
  const nav = useNavigate();

  const handleAuthForm = (e) => {
    e.preventDefault();
  };

  const handleIdInput = (e) => {
    const value = e.target.value
    setUserinfo({
      ...userinfo,
      username: value
    });
  };

  const handlePasswordInput = (e) => {
    const value = e.target.value
    setUserinfo({
      ...userinfo,
      password: value
    });
  };

  const handleAuthBtn = (userinfo) => {
    if (userinfo.username.length > 3) {
      if (userinfo.password.length > 3) {
        fetchLogin(userinfo, setUserObj, nav);
      } else {
        alert("password를 입력해주세요.");
      }
    } else {
      alert("id를 입력해주세요.");
    }
  };

  return (
    <AuthContainer>
      <form onClick={handleAuthForm}>
        <AuthInput type="text" placeholder="ID" onChange={handleIdInput} />
        <AuthInput
          type="password"
          placeholder="Password"
          onChange={handlePasswordInput}
        />
        <button onClick={() => handleAuthBtn(userinfo)}>로그인</button>
      </form>
      {/* <Link to="/JoinUs">
        <button>회원가입</button>
      </Link> */}
    </AuthContainer>
  );
};

export default LogIn;
