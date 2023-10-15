import styled from 'styled-components'
export const Wrapper = styled.div`
  .p-avatar {
    display: flex;
  }

  .p-avatar-group {
    width: max-content;
    .p-component .p-avatar {
      width: ${(props) => props.size};
      height: ${(props) => props.size};
    }
  }

  span.p-avatar-text {
    font-size: ${(props) => props.fontSize};
  }

  .p-avatar-group .avatarCont + .avatarCont {
    margin-left: ${(props) => (props.direction === 'en' ? '-1rem' : '0')};
    margin-right: ${(props) => (props.direction === 'ar' ? '-1rem' : '0')};
  }
`
