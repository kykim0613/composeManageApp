import styled from "styled-components";
import { RecipeBox } from "../style";

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

const Recipe = () => {
    return (
        <Container>
        <RecipeBox>메뉴1</RecipeBox>
        <RecipeBox>메뉴2</RecipeBox>
        <RecipeBox>메뉴3</RecipeBox>
        <RecipeBox>메뉴4</RecipeBox>
        <RecipeBox>메뉴5</RecipeBox>
        <RecipeBox>메뉴6</RecipeBox>
        <RecipeBox>메뉴7</RecipeBox>
        <RecipeBox>메뉴8</RecipeBox>
        <RecipeBox>메뉴9</RecipeBox>
        <RecipeBox>메뉴10</RecipeBox>
        <RecipeBox>메뉴11</RecipeBox>
        <RecipeBox>메뉴12</RecipeBox>
        </Container>
    )
}

export default Recipe;