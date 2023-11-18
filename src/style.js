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
  display: inline-block;
  background-color: #2c3e50;
  color: #fff;
  broder: none;
  padding: 0.4em 0.65em;
  border-radius: 0.25em;
  font-size: 1em;
  cursor: pointer;
  margin-top: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  vertical-align: middle;
  a {
    display: block;
    padding: 0.4em 0.65em;
    color: #fff;
  }
`;
