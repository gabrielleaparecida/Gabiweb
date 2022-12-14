import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/reactToastify.css';
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const colors = {
  primary: "#100D0D",
  secondary: "#B64141",
  third: "#C4C4C4",
  thirdLight: "#C4C4C4",
  white: "#ffffff",
  black: "#000000",
  success: "#50ba9e",
  danger: "#660000"
}
