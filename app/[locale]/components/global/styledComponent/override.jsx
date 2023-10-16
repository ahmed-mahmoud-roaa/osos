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
  .p-inputtext:enabled:focus{
    box-shadow: none;
  }
  

  // multi select 

  .p-multiselect-panel.p-component.p-ripple-disabled.p-connected-overlay-enter-done{
    background: var(--themeWhite-white);
  }
  
  .p-checkbox-box {
    background: var(--themeWhite-white);
    border:1px solid var(--themeGray-200);

    svg{
      color: var(--themeGray-800)
      /* color:${(props) => (props.currentMode === 'dark' ? '0' : '0.5rem')} */
    }
   }

  .p-multiselect-header {
    background: var(--themeGray-300);
  }

  li.p-multiselect-item:hover {
    background: var(--themeGray-100);
}

.p-checkbox.p-component {
    margin-right: ${(props) => (props.direction === 'ar' ? '0' : '0.5rem')} ;
    margin-left: ${(props) => (props.direction === 'ar' ? '0.5rem' : '0')} ;
}

.p-multiselect-panel .p-multiselect-items .p-multiselect-item{
  background-color: var(--themeGray-100);
}
.p-multiselect-item, .p-checkbox-box{
  box-shadow: none;
}


/// calender input
.p-datepicker , .p-datepicker-header {
    background: var(--themeWhite-white);
    color: var(--themeGray-700);
}

button[class^='p-datepicker'] svg {
    transform: ${(props) => props.direction === 'ar' && 'rotate(180deg)'};
  }  
  
`

export default Override
