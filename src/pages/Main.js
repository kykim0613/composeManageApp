import styled from "styled-components";
import Home from "../components/Home";

const HeaderBox = styled.div`
    position: relative;
`

const Main = () => {
    return (
        <HeaderBox>
        <Home />
        </HeaderBox>
    )
}

export default Main;