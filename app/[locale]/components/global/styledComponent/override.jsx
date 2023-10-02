import { createGlobalStyle } from 'styled-components'

const Override = createGlobalStyle`
  
  .p-dropdown{background-color: var(--themeWhite-white);color: var(--themeGray-800);}
  .p-dropdown-item {
    background: var(--themeGray-100);
    color: var(--themeGray-800);
    &:hover{
        background: var(--themeGray-200);

    }
 }
`

export default Override
