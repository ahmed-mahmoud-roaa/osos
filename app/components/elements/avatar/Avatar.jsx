import { clx } from '../../../utils/helpers'

/* eslint-disable @next/next/no-img-element */
const Avatar = ({
  src,
  userName,
  hasBorder = false,
  isActive = false,
  isOnline = false,
  showUserState = false,
  size = "md",
  containerClassName = ""
}) => {
  const AVATAR_SIZE = {
    md: "w-10 h-10",
    lg: "w-16 h-16"
  }
  return (
    <div class={clx(["relative flex items-center"], containerClassName)}>
      <img
        className={clx(
          ['rounded-full'],
          { 'ring ring-gray-200': hasBorder },
          { 'ring ring-primary-500': isActive },
          AVATAR_SIZE[size],

        )}
        src={src}
        alt={userName}
      />
      {showUserState && isOnline && (
        <span className="bottom-0 right-[4px] rtl:left-[-5px] rtl:right-auto absolute w-5 h-5 bg-success-500 border-1.5 border-white dark:border-gray-800 rounded-full"></span>
      )}
    </div>
  )
}

export default Avatar
