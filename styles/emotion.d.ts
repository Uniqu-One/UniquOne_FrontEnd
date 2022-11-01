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
    p_green:string;
  }
}


export interface StyleColor {
  [index: string]: string;
  "블랙":"#000000",
  "그레이":"#DCDCDC",
  "화이트":"#FFFFFF",
  "브라운":"#594034",
  "살구":"#E8BD87",
  "크림":"#EFE6B8",
  "노랑":"#FFF18F",
  "레드":"#FF3F2D",
  "와인":"#CB0A00",
  "오렌지":"E86D2C",
  "핑크":"#E46DB0",
  "보라":"#BE55FF",
  "파랑":"#3F95FF",
  "네이비":"#003DA8",
  "초록":"#72AD34",
  "카키":"#8A7F32",
}