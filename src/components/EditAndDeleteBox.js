import { useRecoilState } from "recoil";
import styled from "styled-components";
import { editState, hovered } from "../Atom";

const EditDeleteBox = styled.div`
  position: absolute;
  right: 12px;
  top: 28px;
  align-items: center;
  justify-content: center;
`;
const EditButton = styled.button`
  width: 80px;
  height: 30px;
  display: flex;
  text-align: center;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
  &:first-child {
    border-radius: 5px 5px 0 0;
  }
  &:nth-child(2) {
    border-radius: 0 0 5px 5px;
  }
`;

const EditAndDeleteBox = ({setIsHovered}) => {
  const [editBtn, setEditBtn] = useRecoilState(editState);

  const handleEditButton = () => {
    setEditBtn(true);
  };
  return (
    <>
      <EditDeleteBox
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <EditButton onClick={handleEditButton}>수정</EditButton>
        <EditButton>삭제</EditButton>
      </EditDeleteBox>
    </>
  );
};

export default EditAndDeleteBox;
