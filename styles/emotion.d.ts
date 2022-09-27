import "@emotion/react";

// type themeId = 'teal' | 'lightgray'
// map으로 돌려서 사용도 가능

declare module "@emotion/react" {
  export interface Theme {
    p_pruple: stirng,
    p_gray_dk: stirng,
    p_gray_md: stirng,
    p_gray_lt: stirng,
    p_red: stirng,
  }
}
