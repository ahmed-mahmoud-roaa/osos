
import { clx } from "../../../utils/helpers";
import style from "./Button.module.scss";

export const BUTTON_STYLES = {
  solid: {
    primary: style.btn_primary,
    secondary: style.btn_secondary,
    success: style.btn_success,
    warning: style.btn_warning,
    danger: style.btn_danger,
  },

  light: {
    primary: "hover:text-primary-700 hover:bg-primary-50",
    secondary: "hover:text-gray-700 hover:bg-gray-50",
    success: "hover:text-success-700 hover:bg-success-50",
    warning: "hover:text-warning-700 hover:bg-warning-50",
    danger: "hover:text-danger-700 hover:bg-danger-50",
  },

  bordered: {
    primary: clx(["disabled:bg-base-white disabled:border-primary-200"], style.btn_primary_bordered),
    secondary: clx(["disabled:bg-base-white disabled:border-gray-200"], style.btn_secondary_bordered),
    success:
      "btn_success_bordered disabled:bg-base-white disabled:border-success-200",
    warning:
      "btn_warning_bordered disabled:bg-base-white disabled:border-warning-200",
    danger:
      "btn_danger_bordered disabled:bg-base-white disabled:border-danger-200",
  },

  flat: {
    primary:
      "btn_primary_flat disabled:bg-primary-25 disabled:border-primary-25 disabled:text-primary-300",
    secondary:
      "btn_gray_flat  disabled:bg-gray-25 disabled:border-gray-25 disabled:text-gray-300",
    success:
      "btn_success_flat  disabled:bg-success-25 disabled:border-success-25 disabled:text-success-300",
    warning:
      "btn_warning_flat  disabled:bg-warning-25 disabled:border-warning-25 disabled:text-warning-300",
    danger:
      "btn_danger_flat  disabled:bg-danger-25 disabled:border-danger-25 disabled:text-danger-300",
  },
};

//  Button Sizes
export const BUTTON_SIZES = {
  sm: "py-3.5 px-2 text-sm",
  md: "py-2.5 px-4 text-sm",
  lg: "py-2.5 px-4.5 text-base",
  xl: "py-3 px-5 text-lg",
  "2xl": "py-4 px-7 text-lg",
};

export const BUTTON_SIZES_ICON = {
  sm: "p-2 text-sm",
  md: "p-3 text-xl",
  lg: "p-4.5 text-base",
  xl: "p-5 text-lg",
  "2xl": "p-7 text-lg",
};

//  Button Radius
export const BUTTON_RADIUS = {
  full: "rounded-full",
  md: "rounded-md",
  none: "rounded-none"
};
