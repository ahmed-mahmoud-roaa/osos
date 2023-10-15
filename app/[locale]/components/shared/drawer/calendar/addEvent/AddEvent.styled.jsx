import styled from 'styled-components'
export const Wrapper = styled.div`
  .calendarWrapper {
    overflow: hidden;
    padding: 0.5rem;
    span.p-calendar.p-component.p-inputwrapper.p-inputwrapper-filled {
      width: 100%;
      height: 100%;
    }

    input,
    span.p-calendar {
      width: 100%;
      box-shadow: none;
      display: block;
    }
  }
  .timeWrapper {
    input,
    span.p-calendar {
      width: 100%;
      box-shadow: none;
      display: flex;
      flex-direction: row-reverse;
    }
  }

  input {
    background: var(--themeWhite-white);
    color: var(--themeGray-700);
  }
`
