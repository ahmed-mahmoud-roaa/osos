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
            console.log(props.direction, 'ppppppppppp1')
            return `-${props.width}`
          } else {
            console.log(props.direction, 'ppppppppppp2')
            return `${props.width}`
          }
        }
      }
    }};

    right: ${(props) => {
      if (props.sideDirection == 'right' && props.sidebar != true) {
        if (props.direction == 'en') {
          //   console.log(
          //     props.direction,
          //     '54545454',
          //     Cookies.get('NEXT_LOCALE'),
          //     '55555555'
          //   )
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
