import { Avatar } from 'primereact/avatar'
import { AvatarGroup } from 'primereact/avatargroup'
import React from 'react'
import { Wrapper } from './AvatarGroupeImage.styled'
import { useSelector } from 'react-redux'

export default function AvatarGroupeImage({
  count = 7,
  images,
  size = '3rem',
  fontSize = '1rem',
}) {
  const direction = useSelector((state) => state.main.direction)

  return (
    <Wrapper size={size} fontSize={fontSize} direction={direction}>
      <div>
        <AvatarGroup>
          {images.map((image, index) => (
            <div key={index} className="avatarCont">
              {index < count ? (
                <div className="  border-2 border-themeWhite-white rounded-full">
                  <Avatar image={image} shape="circle" />
                </div>
              ) : index === count ? (
                <div className="  border-2 border-themeWhite-white rounded-full">
                  <Avatar
                    label={`+${images.length - count}`}
                    shape="circle"
                    style={{
                      backgroundColor: 'var(--themeGray-200)',
                      color: 'var(--themeGray-700)',
                    }}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </AvatarGroup>
      </div>
    </Wrapper>
  )
}
