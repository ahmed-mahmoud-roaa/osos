import styled from 'styled-components'
export const Wrapper = styled.div`
  .p-inputwrapper {
    background-color: var(--themeWhite-white);
  }
  * {
    box-shadow: none;
  }
  .p-multiselect-label {
    display: flex;
    flex-wrap: wrap;
  }

  .p-multiselect-trigger {
    display: none;
  }

  input {
    background-color: var(--themeWhite-white);
    color: var(--themeGray-800);
  }
`
