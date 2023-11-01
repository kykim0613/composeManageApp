import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h3`
  text-align: center;
  padding: 3.5rem 0px 1.5rem;
  font-size: 2rem;
`;

const MenuBox = styled.div`
  width: 100%;
  display: flex;
`;
const Outer = styled.div`
  width: 60%;
  border-bottom: 1px solid #333;
  border-top: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Inner = styled.div`
  width: calc(25% - 10px);
  height: 30px;
  display: flex;
  padding: 1.5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  background: #fff;
  span {
    width: 60%;
    transition: 0.3s;
    opacity: 0;
    position: absolute;
    top: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1.5rem;
    p {
      display: none;
    }
  }
  &: hover, active {
    span {
      border: 1px solid #555;
      opacity: 1;
      p {
        display: block;
      }
    }
  }
`;

const Header = () => {
  return (
    <>
      <Title>컴포즈커피 둔촌동약수터점</Title>
      <MenuBox>
        <Outer>
          <Inner>
            <Link to="/">홈</Link>
          </Inner>
          <Inner>
            <Link to="/employee">직원 관리</Link>
            <span>
              <p>메뉴1</p>
              <p>메뉴2</p>
              <p>메뉴3</p>
              <p>메뉴4</p>
              <p>메뉴5</p>
            </span>
          </Inner>
          <Inner>점포 관리</Inner>
          <Inner>출퇴근 관리</Inner>
        </Outer>
      </MenuBox>
    </>
  );
};

export default Header;
