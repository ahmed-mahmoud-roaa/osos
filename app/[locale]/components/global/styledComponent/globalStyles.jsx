import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.currentMode !== 'dark' ? 'white' : 'black'}; 
      overflow-x: hidden;
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
    --primary-500:${(props) =>
      props.currentMode !== 'dark' ? '#2E90FA' : '#072d61'};
    --primary-300: ${(props) =>
      props.currentMode !== 'dark' ? '#84CAFF' : '#00589b'}; 
    --primary-200: ${(props) =>
      props.currentMode !== 'dark' ? '#b2ddff' : '#0061ad'}; 
    --primary-50: ${(props) =>
      props.currentMode !== 'dark' ? '#EFF8FF' : '#006fc6'}; 

    --themeGray-900:${(props) =>
      props.currentMode !== 'dark' ? '#101828' : '#8fa6c6'}; 
    --themeGray-800:${(props) =>
      props.currentMode !== 'dark' ? '#1d2939' : '#8fa6c6'}; 
    --themeGray-700:${(props) =>
      props.currentMode !== 'dark' ? '#344054' : '#8fa6c6'}; 
    --themeGray-500:${(props) =>
      props.currentMode !== 'dark' ? '#6b7280' : '#c3c6cd'}; 
    --themeGray-400: ${(props) =>
      props.currentMode !== 'dark' ? '#98A2B3' : '#4b5360'}; 
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

    --error-700: ${(props) =>
      props.currentMode !== 'dark' ? '#B42318' : '#facac7'}; 
    --error-200: ${(props) =>
      props.currentMode !== 'dark' ? '#facac7' : '#B42318'}; 
    --error-50: ${(props) =>
      props.currentMode !== 'dark' ? '#fef3f2' : '#B42318'}; 

    --themeGreen-600: ${(props) =>
      props.currentMode !== 'dark' ? '#0E9384' : '#83cfc6'}; 
    --themeGreen-500: ${(props) =>
      props.currentMode !== 'dark' ? '#17B26A' : '#83cfc6'}; 
}
img{
    max-width: 100%;
}

 /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
/* ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
  */
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--themeGray-800); 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--themeGray-800); 
}



`

export default GlobalStyle
