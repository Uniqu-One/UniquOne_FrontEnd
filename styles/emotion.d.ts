import "@emotion/react";

// type themeId = 'teal' | 'lightgray'
// map으로 돌려서 사용도 가능

declare module "@emotion/react" {
  export interface Theme {
    p_pruple: stirng;
    p_gray_dk: stirng;
    p_gray_md: stirng;
    p_gray_lt: stirng;
    p_red: stirng;
  }
}


export interface StyleColor {
  [index: string]: string;
  black: string;
  gray: string;
  white: string;
  brown: string;
  apricot: string;
  cream: string;
  yellow: string;
  red: string;
  wine: string;
  orange: string;
  pink: string;
  purple: string;
  blue: string;
  navy: string;
  green: string;
  khaki: string;
  multi: string;
}