import { BUTTON_SIZES, BUTTON_STYLES, BUTTON_RADIUS, BUTTON_SIZES_ICON } from "./ButtonStyle";
import { clx } from "../../../utils/helpers";

const Button = ({
  color = "primary",
  label,
  onClick,
  variant = "solid",

  size = "md",

  disabled = false,
  isIconOnly = false,
  isLoading = false,
  hasShadow = false,

  radius = "md",

  endContent,
  startContent,

  icon,

  className = "",
  // disableRipple = false,
}) => {
  // Styles
  const buttonStyle = BUTTON_STYLES[variant][color];
  const buttonSize = BUTTON_SIZES[size];
  const buttonSizeIcon = BUTTON_SIZES_ICON[size];
  const buttonRadius = BUTTON_RADIUS[radius];

  return (
    <button
      onClick={onClick}
      variant={variant}
      isDisabled={disabled}
      radius={radius}
      className={clx(
        ["flex items-center gap-2"],
        buttonStyle,
        isIconOnly ? buttonSizeIcon : buttonSize,
        buttonRadius,
        disabled ? `btn--${color}--disabled` : "",
        hasShadow ? `shadow-xs btn--${color}--shadow` : "shadow-none",
        className
      )}
       >
      {startContent}
      {isIconOnly ? icon : label}
      {endContent}
    </button>
  );
};

export default Button;
