import styled from 'styled-components'
export const Wrapper = styled.div`
  .sidebarWrapper {
    left: ${(props) => {
      if (props.sidebar === 'opened') {
        return '0rem !important'
      }
    }};
    min-width: ${(props) => {
      if (props.sidebar === 'opened') {
        return '100%'
      } else {
        return 'calc(100% + 19.5rem)'
      }
    }};
  }
`
