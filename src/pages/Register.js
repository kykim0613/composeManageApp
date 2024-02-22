import styled from "styled-components";
import { Container } from "../style";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { employeeRegisterApi } from "../api";
import { useRecoilState, useRecoilValue } from "recoil";
import { clickedEmployee, user } from "../Atom";
import handleNameInput from "../func/EmployeeRegistration/RegistInputFunc/handleNameInput";
import { useForm } from "react-hook-form";
import handlePhoneInput from "../func/EmployeeRegistration/RegistInputFunc/handlePhoneInput";
import handleJuminInput from "../func/EmployeeRegistration/RegistInputFunc/handleJuminInput";
import handleAddressInput from "../func/EmployeeRegistration/RegistInputFunc/handleAddress";
import handleEmailInput from "../func/EmployeeRegistration/RegistInputFunc/handleEmailInput";
import handleBankInput from "../func/EmployeeRegistration/RegistInputFunc/handleBankInput";
import handleAccountInput from "../func/EmployeeRegistration/RegistInputFunc/handleAccountInput";
import handleWageInput from "../func/EmployeeRegistration/RegistInputFunc/handleWageInput";
import handleMemoInput from "../func/EmployeeRegistration/RegistInputFunc/handleMemoInput";
import handleStartInput from "../func/EmployeeRegistration/RegistInputFunc/handleStartInput";
import handleRetiredInput from "../func/EmployeeRegistration/RegistInputFunc/handleRetiredInput";

const RegisterForm = styled.form`
  width: 80%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  position: relative;
  button {
    position: absolute;
    bottom: -30px;
  }
`;

const RegisterTextarea = styled.textarea`
  width: 80%;
  height: 500px;
  padding: 10px;
  outline: none;
  resize: none;
  margin: 0 auto;
  box-sizing: border-box;
  margin-bottom: 3.5rem;
`;

const SelectBox = styled.select`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #333;
  outline: none;
  box-sizing: border-box;
  font-size: 20px;
  text-align: center;
  -webkit-appearance: none; /* Safari 및 Chrome 등 WebKit 기반 브라우저 */
  -moz-appearance: none; /* Firefox */
  appearance: none; /* 다른 브라우저 */
  &:focus {
    border-color: #d9534f;
  }
`;

const InputWrap = styled.div`
  padding-top: 3.5rem;
  border-top: 1px solid black;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextSpan = styled.span`
  width: 120px;
  text-align: left;
`;
const RegisterInput = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #333;
  padding: 5px;
  outline: none;
  box-sizing: border-box;
  font-size: 20px;
  text-indent: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Options = styled.option`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #333;
  padding: 5px;
  outline: none;
  box-sizing: border-box;
  font-size: 20px;
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
  width: 60%;
  padding: 5px;
  outline: none;
  box-sizing: border-box;
`;

const Btn = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 10px;
  background-color: #2c3e50;
  color: #fff;
  broder: none;
  font-size: 1.2em;
  cursor: pointer;
  display: block;
`;

const Register = () => {
  const {register, handleSubmit, errors} = useForm()
  const [employee, setEmployee] = useRecoilState(clickedEmployee);
  const userObj = useRecoilValue(user);
  const obj = userObj?.storeList.map((id) => id).sort((a,b) => a.id - b.id)
  const [personalInfo, setPersonalInfo] = useState({
    storeId: 1,
    name: "",
    phone: "",
    gender: false,
    jumin: "",
    address: "",
    email: "",
    bankName: "",
    bankAccount: "",
    memo: "",
    hourlyWage: 0,
    startDate: "",
    retiredDate: "",
    mediDate: "",
    rank: "CEO",
    retired: false,
  });
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

    const RegisterFetch = async (personalInfo) => {
      try {
        const response = await axios.post(employeeRegisterApi, personalInfo);
        console.log(response);
        navigator("/employee");
      } catch (error) {
        console.error("에러", error);
      }
    };

    RegisterFetch(personalInfo);
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

  const result = formattedString.split("\n").map((line) => {
    const [key, value] = line.split(",");
    return `${key}: ${value}`;
  });

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
          <InputContainer>
            <RegisterInput
            disabled
            value={obj[0].storeName}
            />
          </InputContainer>
          <InputContainer>
            <RegisterInput
              required
              placeholder="이름"
              type="text"
              value={personalInfo?.name}
              onChange={(e) => handleNameInput(e, personalInfo, setPersonalInfo)}
            />
          </InputContainer>
          <InputContainer>
            <SelectBox>
              {rank.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </SelectBox>
          </InputContainer>
          <InputContainer>
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
          </InputContainer>
          <InputContainer>
            <RegisterInput
              placeholder="전화번호"
              type="tel"
              value={personalInfo?.phone}
              required
              onChange={(e) => handlePhoneInput(e, personalInfo, setPersonalInfo)}
              maxLength={13}
            />
          </InputContainer>
          <InputContainer>
            <RegisterInput
              placeholder="주민등록번호"
              type="text"
              value={personalInfo?.jumin}
              required
              onChange={(e) => handleJuminInput(e, personalInfo, setPersonalInfo)}
              maxLength={14}
            />
          </InputContainer>
          <InputContainer>
            <RegisterInput
              placeholder="주소"
              type="text"
              value={personalInfo?.address}
              required
              onChange={(e) => handleAddressInput(e, personalInfo, setPersonalInfo)}
            />
          </InputContainer>
          <InputContainer>
            <RegisterInput
              placeholder="이메일"
              type="text"
              value={personalInfo?.email}
              required
              onChange={(e) => handleEmailInput(e, personalInfo, setPersonalInfo)}
            />
          </InputContainer>
          <InputContainer>
            <RegisterInput
              placeholder="은행"
              type="text"
              value={personalInfo?.bankName}
              required
              onChange={(e) => handleBankInput(e, personalInfo, setPersonalInfo)}
            />
          </InputContainer>
          <InputContainer>
            <RegisterInput
              placeholder="계좌"
              type="number"
              value={personalInfo?.bankAccount}
              required
              onChange={(e) => handleAccountInput(e, personalInfo, setPersonalInfo)}
            />
          </InputContainer>
          <InputContainer>
            <RegisterInput
              placeholder="시급"
              type="number"
              value={personalInfo?.hourlyWage}
              required
              onChange={(e) => handleWageInput(e, personalInfo, setPersonalInfo)}
            />
          </InputContainer>
          <InputContainer>
            <RegisterInput
              placeholder="입사일"
              type="date"
              value={personalInfo?.startDate}
              required
              onChange={(e) => handleStartInput(e, personalInfo, setPersonalInfo)}
            />
          </InputContainer>
          <InputContainer>
            <RegisterInput
              placeholder="퇴사일"
              type="date"
              value={personalInfo?.retiredDate}
              onChange={(e) => handleRetiredInput(e, personalInfo, setPersonalInfo)}
            />
          </InputContainer>
          <InputContainer>
            <RegisterInput
              placeholder="메모"
              type="text"
              value={personalInfo?.memo}
              onChange={(e) => handleMemoInput(e, personalInfo, setPersonalInfo)}
            />
          </InputContainer>
          <InputContainer>
            <Btn>등록</Btn>
          </InputContainer>
        </InputWrap>
      </RegisterForm>
    </Container>
  );
};

export default Register;
