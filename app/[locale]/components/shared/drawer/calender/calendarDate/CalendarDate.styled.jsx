import styled from 'styled-components'
export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  .p-datepicker.p-component.p-datepicker-inline,
  .p-datepicker-header {
    background-color: var(--themeWhite-white);
    color: var(--themeGray-700);
  }

  .p-datepicker table td.p-datepicker-today > span {
    background-color: var(--themeGray-100);
    color: var(--themeGray-700);
  }
  .p-datepicker:not(.p-disabled)
    table
    td
    span:not(.p-highlight):not(.p-disabled):hover {
    background-color: var(--primary-500);
  }
  td,
  th {
    padding: 0;
    font-size: 0.75rem;
    span {
      box-shadow: unset;
    }
  }
  .p-datepicker table td > span.p-highlight {
    background-color: unset;
    color: unset;
    position: relative;
  }
  .p-datepicker table td > span.p-highlight:after {
    content: '';
    position: absolute;
    width: 0.25rem;
    height: 0.25rem;
    background-color: var(--primary-500);
    top: 2rem;
    border-radius: 50%;
  }
  td:focus-within {
    background: var(--primary-600);
    color: var(--themeWhite-white);
    border-radius: 50%;
  }
`
