import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.currentMode !== 'dark' ? 'white' : 'black'}; 
   }

   *{
    margin:0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    /* color: ${(props) =>
      props.currentMode == 'dark' ? 'white' : 'black'}; */
 }

:root{
    --primary-950:${(props) =>
      props.currentMode !== 'dark' ? '#102a56' : '#EFF8FF'};
    --primary-600:${(props) =>
      props.currentMode !== 'dark' ? '#1570EF' : '#072d61'};
    --primary-300: ${(props) =>
      props.currentMode !== 'dark' ? '#84CAFF' : '#00589b'}; 
    --primary-200: ${(props) =>
      props.currentMode !== 'dark' ? '#b2ddff' : '#0061ad'}; 
    --primary-50: ${(props) =>
      props.currentMode !== 'dark' ? '#EFF8FF' : '#006fc6'}; 

    --themeGray-800:${(props) =>
      props.currentMode !== 'dark' ? '#1d2939' : '#8fa6c6'}; 
    --themeGray-500:${(props) =>
      props.currentMode !== 'dark' ? '#6b7280' : '#c3c6cd'}; 
    --themeGray-300: ${(props) =>
      props.currentMode !== 'dark' ? '#d1d5db' : '#4b5360'}; 
    --themeGray-200: ${(props) =>
      props.currentMode !== 'dark' ? '#e5e7eb' : '#515969'}; 
    --themeGray-100: ${(props) =>
      props.currentMode !== 'dark' ? '#f3f4f6' : '#545d70'}; 
    --themeGray-50: ${(props) =>
      props.currentMode !== 'dark' ? '#f9fafb' : '#506478'}; 

    --success-500: ${(props) =>
      props.currentMode !== 'dark' ? '#17b16a' : '#09472a'}; 
    --themeWhite-white: ${(props) =>
      props.currentMode !== 'dark' ? '#fff' : '#000'}; 
    --themeBlack-black: ${(props) =>
      props.currentMode !== 'dark' ? '#000' : '#fff'}; 
}
img{
    max-width: 100%;
}

 



`

export default GlobalStyle
