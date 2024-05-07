import { useRecoilState } from "recoil";
import styled from "styled-components";
import { editBoxIndex } from "../Atom";
import EditAndDeleteBox from "./EditAndDeleteBox";
import { useEffect, useState } from "react";

const EditContainer = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 30px;
  background-color: #000;
  opacity: 0.3;
  position: absolute;
  top: 6px;
  right: 6px;
  display: block;
  cursor: pointer;
  &: hover {
    opacity: 0.5;
  }
`;
const Dot = styled.div`
  width: 2px;
  height: 2px;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 2px;
  position: relative;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
`;

const EditStore = ({index, setIsHovered}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [boxIndex, setBoxIndex] = useRecoilState(editBoxIndex)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".editButton")) {
        setIsClicked(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickEditBox = (e) => {
    setIsClicked(!isClicked);
    setIsHovered(true)
    setBoxIndex(index)
  };

  return (
    <>
      <EditContainer
        className="editButton"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => handleClickEditBox()}
      >
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
      </EditContainer>
      {isClicked ? <EditAndDeleteBox setIsHovered={setIsHovered} /> : null}
    </>
  );
};

export default EditStore;
