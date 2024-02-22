import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { user } from "../Atom";
import '../axiosConfig'
import { fetchLogin } from "../api";
import SelectStore from "./SelectStore";

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
    cursor: pointer;
    background: rgba(251, 215, 5);
    border: 1px solid #000;
  }
`;

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userObj, setUserObj] = useRecoilState(user)
  const nav = useNavigate();

  const handleAuthForm = (e) => {
    e.preventDefault();
  };

  const handleIdInput = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleAuthBtn = (username, password) => {
    if (username.length > 3) {
      if (password.length > 3) {
        fetchLogin(username, password, setUserObj)
        nav('/select')
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
        <input type="text" placeholder="ID" onChange={handleIdInput} />
        <input
          type="password"
          placeholder="Password"
          onChange={handlePasswordInput}
        />
        <button onClick={() => handleAuthBtn(username, password)}>확인</button>
      </form>
      <Link to="/JoinUs">
        <button>회원가입</button>
      </Link>
    </AuthContainer>
  );
};

export default LogIn;
