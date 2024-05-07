import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { store, toggle } from "../Atom";

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
  min-width: 600px;
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
  a {
    min-width: 100px;
    padding: 1.5rem 0;
    text-align: center;
  }
  span {
    width: 60%;
    position: absolute;
    top: 100%;
    text-align: center;
    padding: 1.5rem;
    background: #fff;
    z-index: 1;
    border: 1px solid #555;
    display: none;
  }
  &: hover, active {
    span {
      display: block;
    }
  }
`;

const Header = () => {
  const storeName = useRecoilValue(store)
  const [home, setHome] = useRecoilState(toggle)
  const navHome = () => {
    setHome(false)
  }
  return (
    <>
      <Title>{storeName.storeName}</Title>
      <MenuBox>
        <Outer>
          <Inner>
            <Link onClick={navHome} to={"/select"}>지점선택</Link>
          </Inner>
          <Inner>
            <Link to="/employee">직원</Link>
            <span>
              <Link to="/employee">직원 관리</Link>
              <p>급여 대장</p>
              <Link to="/commute">출퇴근 관리</Link>
              <Link to={"/timetable"}>
                <p>시간표</p>
              </Link>
            </span>
          </Inner>
          <Inner>
            <Link>점포 관리</Link>
          </Inner>
          <Inner>
            <Link to="/commute">출퇴근 관리</Link>
          </Inner>
        </Outer>
      </MenuBox>
    </>
  );
};

export default Header;
