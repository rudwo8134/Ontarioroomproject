import { createGlobalStyle } from "styled-components";

export const Globalcss = createGlobalStyle`
  :root{
    /* text color */
    --text-Primary: #EDA4BC;
    --text-primary-black:#4E4952;
    --text-normal-black:#000;
    --text-border:#EBEAEd;
    /* font-size */
    --size-main-logo: 48px;
    --size-nav-link:14px;
    --size-login:16px;
    --size-main-slogan:40px;
    --size-main-search:20px;


}
body {
  margin: 0;
  padding: 0;
  font-family: 'DM Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
::selection{
    background-color: white;
}

a {
  color: inherit;
  text-decoration: none;
}
* {
  box-sizing: border-box;
}
`;