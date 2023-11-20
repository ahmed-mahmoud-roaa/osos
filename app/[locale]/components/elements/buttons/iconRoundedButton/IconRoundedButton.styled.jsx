import styled from 'styled-components'
export const Wrapper = styled.button`
  &.magic {
    position: relative;
    overflow: hidden;
    border-color: var(--primary-300);
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      background: linear-gradient(
        to bottom,
        var(--primary-400),
        var(--primary-200)
      );
    }
    &:after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      border-radius: ${(props) => (props.borderRound ? '50px' : '0!important')};

      z-index: -1;

      background: var(--themeWhite-white);
    }
  }
`
