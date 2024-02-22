import axios from "axios";
import { useEffect, useState } from "react";
import { storeApi } from "../api";
import { useRecoilState, useRecoilValue } from "recoil";
import { store, toggle, user } from "../Atom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "../axiosConfig";

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: white;
  top: 0;
`;
const Container = styled.div`
  max-width: 800px;
  min-width: 600px;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3.5rem 0px 1.5rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const Store = styled.div`
  width: 150px;
  height: 150px;
  padding: 2em;
  border: 2px solid #333;
  text-align: center;
  line-height: 150px;
  border-radius: 30px;
  cursor: pointer;
  background-color: beige;
  color: #333;
`;

const SelectStore = () => {
  const [selected, setSelected] = useRecoilState(store);
  const [selectedToggle, setSelectedToggle] = useRecoilState(toggle);
  const storeArray = useRecoilValue(user);
  const nav = useNavigate();

  const handleClickStore = (value) => {
    setSelected(value);
    setSelectedToggle(false);
    nav("/main");
  };

  const stores = storeArray.storeList;

  return (
    <Background>
      <Container>
        {stores?.map((value, index) => (
          <Store onClick={() => handleClickStore(value)} key={index}>
            {value.storeName}
          </Store>
        ))}
      </Container>
    </Background>
  );
};

export default SelectStore;
