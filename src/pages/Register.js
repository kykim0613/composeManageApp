import styled from "styled-components";
import { Btn, Container } from "../style";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { registerPostApi } from "../api";
import { useRecoilState, useRecoilValue } from "recoil";
import { clickedEmployee } from "../Atom";

const RegisterForm = styled.form`
  width: 600px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  position: relative;

  button {
    position: absolute;
    bottom: -30px;
  }
`;

const RegisterTextarea = styled.textarea`
  width: 300px;
  height: 300px;
  padding: 10px 5px;
  outline: none;
  resize: none;
  box-sizing: border-box;
`;

const SelectBox = styled.select`
  width: 200px;
  padding: 5px;
  text-align: center;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 400px;
  justify-content: space-between;
  align-items: center;
`;
const RegisterInput = styled.input`
  width: 200px;
  display: block;
  padding: 5px;
  outline: none;
  box-sizing: border-box;
`;
const SexWrap = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Sex = styled.input``;

const DateInput = styled.input`
  width: 200px;
  padding: 5px;
  outline: none;
  box-sizing: border-box;
`;

const Register = () => {
  const [employee, setEmployee] = useRecoilState(clickedEmployee);
  const navigator = useNavigate();
  const rank = ["CEO", "Staff", "Manager"];
  const maleCheckBox = useRef();
  const femaleCheckBox = useRef();

  const juminStr = `${employee.jumin}`;
  const format = {
    "1. 이름": employee.name,
    "2. 성별":
      juminStr.slice(6, 7) === "1" || juminStr.slice(6, 7) === "3"
        ? "남"
        : juminStr.slice(6, 7) === "2" || juminStr.slice(6, 7) === "4"
        ? "여"
        : "",
    "3. 주민번호": employee.jumin,
    "4. 주소": employee.address === null && "",
    "5. 번호": employee.formatPhone,
    "6. 이메일": employee.email,
    "7. 계좌": employee.bankAccount === null && "",
  };

  const handleForm = (e) => {
    e.preventDefault();

    const RegisterFetch = async (value) => {
      try {
        const response = await axios.post(registerPostApi, value);
        console.log(response);
      } catch (error) {
        console.error("에러", error);
      }
    };

    RegisterFetch(employee);

    navigator("/employee");
  };

  const handleValueChange = (e) => {
    try {
      const jsonData = e.target.value;
      setEmployee(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  const formattedString = Object.entries(format)
    .filter(([key, value]) => `${{ key }}: ${value}`)
    .join("\n");
  const result = formattedString
    .split("\n")
    .map((line) => {
      const [key, value] = line.split(",");
      return `${key}: ${value}`;
    })
    .join("\n");

  const handleCheckBoxClick = (ref) => {
    if (ref === maleCheckBox) {
      femaleCheckBox.current.checked = false;
    } else if (ref === femaleCheckBox) {
      maleCheckBox.current.checked = false;
    }
  };
  return (
    <Container>
      <RegisterForm onSubmit={handleForm}>
        <RegisterTextarea
          placeholder="포맷 양식을 복사해주세요."
          type="text"
          onChange={handleValueChange}
          value={JSON.stringify(employee) === "{}" ? "" : result}
        />
        <InputWrap>
          <RegisterInput
            required
            placeholder="이름"
            type="text"
            value={employee.name}
          />
          <SelectBox>
            {rank.map((option) => (
              <option key={option.id}>{option}</option>
            ))}
          </SelectBox>
          {format["2. 성별"] === "남" ? (
            <SexWrap>
              남
              <Sex
                type="checkbox"
                ref={maleCheckBox}
                onClick={() => handleCheckBoxClick(maleCheckBox)}
                checked
              />
              여
              <Sex
                type="checkbox"
                ref={femaleCheckBox}
                onClick={() => handleCheckBoxClick(femaleCheckBox)}
              />
            </SexWrap>
          ) : format["2. 성별"] === "여" ? (
            <SexWrap>
              남<Sex type="checkbox" ref={maleCheckBox} />
              여
              <Sex
                type="checkbox"
                checked
                ref={femaleCheckBox}
                onClick={() => handleCheckBoxClick(femaleCheckBox)}
              />
            </SexWrap>
          ) : (
            <SexWrap>
              남
              <Sex
                type="checkbox"
                ref={maleCheckBox}
                onClick={() => handleCheckBoxClick(maleCheckBox)}
              />
              여
              <Sex
                type="checkbox"
                ref={femaleCheckBox}
                onClick={() => handleCheckBoxClick(femaleCheckBox)}
              />
            </SexWrap>
          )}
          <RegisterInput
            placeholder="주민등록번호"
            type="text"
            value={employee.jumin}
            required
          />
          <RegisterInput
            placeholder="시급"
            type="text"
            value={employee.hourlyWage}
            required
          />
          <RegisterInput
            placeholder="주소"
            type="text"
            value={employee.address}
            required
          />
          <RegisterInput
            placeholder="전화번호"
            type="text"
            value={employee.formatPhone}
            required
          />
          <RegisterInput
            placeholder="이메일"
            type="text"
            value={employee.email}
            required
          />
          <RegisterInput
            placeholder="은행"
            type="text"
            value={employee.bankName}
            required
          />
          <RegisterInput
            placeholder="계좌"
            type="text"
            value={employee.bankAccount}
            required
          />
          <DateInput
            placeholder="입사일"
            type="date"
            value={employee.startDate}
            required
          />
          <DateInput
            placeholder="퇴사일"
            type="date"
            value={employee.retireDate}
          />
        </InputWrap>
        <Btn>등록</Btn>
      </RegisterForm>
    </Container>
  );
};

export default Register;
