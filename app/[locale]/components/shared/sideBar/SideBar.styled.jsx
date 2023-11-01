import styled from 'styled-components'
const sidesArray = [32, 28, 24]
const sidesColor = [
  'var(--themeWhite-white)',
  'var(--themeGray-50)',
  'var(--themeGray-100)',
  'var(--themeGray-200)',
]
const negativeHight = (index, count) =>
  sidesArray
    .slice(0, parseInt(count))
    .reverse()
    .slice(0, parseInt(index))
    .reduce((previousValue, currentValue) => {
      return previousValue + currentValue
    }, 0)

export const Wrapper = styled.div`
  height: ${(props) =>
    parseInt(props.index) == 0
      ? '100%'
      : 'calc(100% - (' + negativeHight(props.index, props.count) + 'px))'};

  border-radius: 10px 10px 0 0;

  /* bottom: -100%; */
  bottom: ${(props) => props.down};
  position: absolute;
  z-index: calc(2 * ${(props) => parseInt(props.index)});
  border-radius: 10px 10px 0 0;
  background-color: ${(props) =>
    props.type == 'Dense'
      ? sidesColor.slice(0, parseInt(props.count + 1)).reverse()[
          parseInt(props.index)
        ]
      : ''};

  &:hover {
    transform: ${(props) =>
      'translateY(-' + ((props.count - props.index) * 4 + 4) + 'px)'};
  }

  &:first-child {
    border-radius: 0;
    &:hover {
      transform: ${(props) =>
        props.count == 1
          ? 'translateY(-' + ((props.count - props.index) * 4 + 4) + 'px)'
          : 'translateY(0px)'};
      & + div {
        transform: ${(props) =>
          props.count != 1
            ? 'translateY(' + ((props.count - props.index) * 4 + 4) + 'px)'
            : ''};
      }
    }
  }
  &:last-child:hover {
    transform: translateY(0px);
  }
  &.up {
    bottom: 0;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    height: 5px;
    width: 100%;
    border-radius: 10px 10px 0 0;
    left: 0;
    box-shadow: 0px -4px 3px var(--themeGray-200);
    opacity: 50%;
  }

  &.remove ~ div {
    bottom: -100% !important;
  }
`
