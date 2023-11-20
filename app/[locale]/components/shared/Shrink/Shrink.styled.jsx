import styled from 'styled-components'
export const Wrapper = styled.div`
  & > .sidebarWrapper {
    left: ${(props) => {
      if (
        (props.sidebar == true && props.sideDirection == 'left') ||
        props.sideDirection == 'right'
      ) {
        return '0rem !important'
      } else {
        if (props.sideDirection == 'left' && props.sidebar != true) {
          if (props.direction == 'en') {
            return `-${props.width}`
          } else {
            return `${props.width}`
          }
        }
      }
    }};

    right: ${(props) => {
      if (props.sideDirection == 'right' && props.sidebar != true) {
        if (props.direction == 'en') {
          return `-${props.width}`
        } else {
          return `0`
        }
      }
    }};

    min-width: ${(props) => {
      if (props.sidebar == true) {
        return '100%'
      } else {
        return `calc(100% + ${props.width})`
      }
    }};
  }
`
