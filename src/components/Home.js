import styled from "styled-components";
import { Recipe } from "../style";

const Container = styled.div`
    max-width: 60%;
    min-width: 600px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 3.5rem 0px 1.5rem;
`

const Home = () => {
    return (
        <Container>
        <Recipe>메뉴1</Recipe>
        <Recipe>메뉴2</Recipe>
        <Recipe>메뉴3</Recipe>
        <Recipe>메뉴4</Recipe>
        <Recipe>메뉴5</Recipe>
        <Recipe>메뉴6</Recipe>
        <Recipe>메뉴7</Recipe>
        <Recipe>메뉴8</Recipe>
        <Recipe>메뉴9</Recipe>
        <Recipe>메뉴10</Recipe>
        <Recipe>메뉴11</Recipe>
        <Recipe>메뉴12</Recipe>
        </Container>
    )
}

export default Home;