import styled from "styled-components";
import { Container } from "../style";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const RegisterForm = styled.form`
  width: 600px;
  padding: 5rem 0;
`;

const RegisterTextarea = styled.textarea`
  width: 300px;
  height: 300px;
  padding: 10px 5px;
  outline: none;
  resize: none;
`;

const Btn = styled.button`
  display: flex;
  background-color: #2c3e50;
  color: #fff;
  broder: none;
  padding: 0.6em 0.85em;
  border-radius: 0.25em;
  font-size: 1em;
  cursor: pointer;
  font-weight: 400;
  line-height: 1.5;
  vertical-align: middle;
  margin: 0 auto;
  margin-top: 2em;
`;

const Register = () => {
  const [value, setValue] = useState({
    storeId: 1,
    name: "",
    gender: false,
    jumin: "",
    email: "",
    phone: "",
    rank: "",
    retiredYN: false,
    hourlyWage: 0,
  });
  const navigator = useNavigate();


  const handleForm = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      const api = `https://152.67.219.74/api/employee`;
      try {
        const response = await fetch(api, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: value,
        });

        const responseData = await response.json();
        console.log("POST 성공", responseData);
      } catch (error) {
        console.error("에러", error);
      }
    };

    fetchData(value);
    navigator("/employee");
  };

  const handleValueChange = (e) => {
    try {
      const jsonData = e.target.value;
      setValue(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(value);
  return (
    <Container>
      <RegisterForm onSubmit={handleForm}>
        <RegisterTextarea
          placeholder="포맷 양식을 복사해주세요."
          type="text"
          onChange={handleValueChange}
        />
        {/* <InputWrap>
          <RegisterInput placeholder="이름" type="text" />
          <RegisterInput placeholder="주민등록번호" type="text" />
          <RegisterInput placeholder="주소" type="text" />
          <RegisterInput placeholder="번호" type="text" />
          <RegisterInput placeholder="이메일" type="text" />
          <RegisterInput placeholder="계좌" type="text" />
        </InputWrap> */}
        <Btn>등록</Btn>
      </RegisterForm>
    </Container>
  );
};

export default Register;
