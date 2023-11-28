import styled from "styled-components";

export const Recipe = styled.div`
    width: calc(25% - 10px);
    display: flex;
    flex:direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    box-size: border-box;
    margin: 2% 0;
`;

export const Container = styled.div`
  width: 60%;
  height: 600px;
  min-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 2.5rem 0;
`;

export const Btn = styled.button`
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

export const ListTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: beige;
`;

export const Title = styled.div`
  margin-top: 2px;
  border-top: 1px solid #333;
  width: 100%;
  font-size: 0.7em;
  @media (max-width: 800px) {
    font-size: 1em;
  }
`;

export const Name = styled.p`
  width: 4%;
  @media (max-width: 800px) {
    width: 15%;
  }
`;
