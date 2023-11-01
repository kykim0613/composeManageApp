import { createGlobalStyle } from "styled-components";
import Router from "./Router";

function App() {
  const GlobalStyle = createGlobalStyle`
    body {
        font-size: 1rem;
        margin: 0;
        padding: 0;
        font-family: 'Helvetica Neue', sans-serif;
        color: ${(props) => (props.active ? `#fff` : `#333`)};
        background-color: ${(props) => (props.active ? `#333` : `#fff`)};
  },
    button {
        color: ${(props) => (props.active ? `#fff` : `#333`)};
        background-color: ${(props) => (props.active ? `#333` : `#fff`)};
        border: 1px solid #ccc;;
      },
    a {
       text-decoration: none;
       color: #333;
      }
    ul, table, td {
      list-style: none;
      padding: 0;
      border-spacing: 0;
      box-size: border-box;
    }
`;
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
