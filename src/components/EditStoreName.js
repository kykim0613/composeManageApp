import styled from "styled-components";
import { useState } from "react";
import { fetchChangeStoreName, fetchGetStoreList } from "../api";

const NameChangeForm = styled.form`
  width: 400px;
  height: 260px;
  border-radius: 20px;
  position: fixed;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  align-items: center;
  justify-content: center;
`;

const NameEditInput = styled.input`
  width: 65%;
  height: 40px;
  padding: 5px;
  margin: 0 auto;
  font-size: 1.5rem;
  text-indent: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline:none;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
const Btn = styled.button`
width: 68%;
color: #fff;
height: 50px;
cursor: pointer;
background: #2c3e50;
border: 1px solid #ccc;
font-size: 18px;
border-radius: 6px;
`

const EditStoreName = ({setState, store, setIsHovered}) => {
    const [editedStore, setEditedStore] = useState({
        id: store.id,
        storeName: store.storeName
    })

    const handleNameChangeForm = (e) => {
        e.preventDefault()
    }

    const clikedOverlay = () => {
        setState(false)
        setIsHovered(false)
    }
    const handleEditInput = (e) => {
        const value = e.target.value
        setEditedStore({
            ...editedStore,
            storeName: value
        })
    }
    const handleSubmitBtn = (editedStore) => {
        fetchChangeStoreName(editedStore)
        setState(false)
        setIsHovered(false)
    }
  return (
    <>
      <Overlay onClick={clikedOverlay} />
      <NameChangeForm onSubmit={handleNameChangeForm}>
        <NameEditInput
        value={editedStore.storeName}
        onChange={handleEditInput}
        />
        <Btn onClick={() => handleSubmitBtn(editedStore)}>확인</Btn>
        <Btn onClick={clikedOverlay}>취소</Btn>
      </NameChangeForm>
    </>
  );
};

export default EditStoreName;
