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
    color: var(--themeWhite-white);
  }
  td,
  th {
    padding: 0;
    font-size: 0.75rem;
    border-radius: 50%;

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

  button[class^='p-datepicker'] svg {
    transform: ${(props) => props.direction === 'ar' && 'rotate(180deg)'};
  }

  .p-datepicker-month {
    margin: 0 5px;
    font-weight: 600;
  }
  .p-datepicker-title {
    font-size: 1.25rem;
    font-weight: 400;
  }
  .p-datepicker-header {
    margin-bottom: 10px;
  }
  svg.p-icon.p-datepicker-next-icon,
  svg.p-icon.p-datepicker-prev-icon {
    width: 0.825rem;
  }
`
