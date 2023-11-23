import styled from 'styled-components'
const sidesArray = [2, 1.75, 1.5]
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
      : 'calc(100% - (' + negativeHight(props.index, props.count) + 'rem))'};

  border-radius: ${(props) =>
    props.borderRound ? '0.62rem 0.62rem 0 0' : '0!important'};

  bottom: ${(props) => props.down};
  position: absolute;
  z-index: calc(2 * ${(props) => parseInt(props.index)});
  background-color: ${(props) =>
    props.type == 'Dense'
      ? sidesColor.slice(0, parseInt(props.count + 1)).reverse()[
          parseInt(props.index)
        ]
      : ''};

  &:hover {
    transform: ${(props) =>
      'translateY(-' + ((props.count - props.index) * 0.25 + 0.25) + 'rem)'};
  }

  &:first-child {
    border-radius: 0;
    &:hover {
      transform: ${(props) =>
        props.count == 1
          ? 'translateY(-' +
            ((props.count - props.index) * 0.25 + 0.25) +
            'rem)'
          : 'translateY(0rem)'};
      & + div {
        transform: ${(props) =>
          props.count != 1
            ? 'translateY(' +
              ((props.count - props.index) * 0.25 + 0.25) +
              'rem)'
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
    height: 0.3rem;
    width: 100%;
    border-radius: ${(props) =>
      props.borderRound ? '0.62rem 0.62rem 0 0' : '0!important'};
    left: 0;
    box-shadow: 0px -0.25rem 0.18rem var(--themeGray-200);
    opacity: 50%;
  }

  &.remove ~ div {
    bottom: -100% !important;
  }
`
