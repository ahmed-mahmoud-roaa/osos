import styled from 'styled-components'

export const Wrapper = styled.div`
  & > div {
    display: flex;
    border-radius: ${(props) => (props.borderRound ? '8px' : '0!important')};
    overflow: hidden;
    align-items: center;
    border: 1px solid var(--themeGray-300);

    & > div {
      border-radius: 0;
      font-size: 0.8rem;
      font-weight: 100;
      padding: 0.5rem;
      border-right: ${(props) =>
        props.direction === 'ar' ? 0 : '1px solid var(--themeGray-300)'};
      border-right: ${(props) =>
        props.direction !== 'ar' ? '1px solid var(--themeGray-300)' : 0};
      outline: none;
      box-shadow: unset;
      width: ${(props) => (props.width ? props.width + 'px' : '100px')};
      text-align: center;
      background-color: ${(props) => props.background};
      &.p-highlight {
        background-color: var(--primary-600);
      }
    }

    div:last-child {
      border-right: ${(props) =>
        props.direction !== 'ar' ? 0 : '1px solid var(--themeGray-300)'};
      border-right: ${(props) =>
        props.direction === 'ar' ? '1px solid var(--themeGray-300)' : 0};
    }

    div:first-child {
      border-left: ${(props) =>
        props.direction === 'ar' ? '1px solid var(--themeGray-300)' : 0};
    }
  }
`
