import styled from 'styled-components'
export const Wrapper = styled.div`
  height: ${(props) =>
    props.type == 'drawerAi' ? 'calc(100% - 4.7rem)' : '100%'};
  top: ${(props) => (props.type == 'drawerAi' ? '4.7rem' : '0 ')};
  z-index: ${(props) => (props.type == 'drawerAi' ? '15' : '20')};
`
