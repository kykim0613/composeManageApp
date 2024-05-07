import styled from "styled-components";
import Recipe from "../components/Recipe";

const HeaderBox = styled.div`
    position: relative;
`

const Main = () => {
    return (
        <HeaderBox>
        <Recipe />
        </HeaderBox>
    )
}

export default Main;