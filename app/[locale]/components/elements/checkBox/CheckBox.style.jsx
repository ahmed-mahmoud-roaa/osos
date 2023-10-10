import styled from 'styled-components'

export const Wrapper = styled.label`
  display: block;
  position: relative;
  padding-left: 1.25rem;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.25rem;
    width: 1.25rem;
    background: var(--themeWhite-white);
    border-radius: 5px;
    border: 1px solid var(--themeGray-200);
  }

  /* On mouse-over, add a grey background color */
  /* &:hover input ~ .checkmark {
    background-color: var(--primary-500);
  } */

  /* When the checkbox is checked, add a blue background */
  input:checked ~ .checkmark {
    background-color: var(--themeWhite-white);
    border: 1px solid var(--primary-500);
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    left: 0.37rem;
    top: 0.2rem;
    width: 0.37rem;
    height: 0.62rem;
    border: solid var(--primary-500);
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`
