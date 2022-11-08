export interface postDataType {
  [index: string]: string | string[] | null | File[] | null[];
  imgList: File[] | null[] | string[];
  postType:string;
  title:string;
  desc: string;
  tags: string;
  category: string;
  condition: string;
  price:string;
  productSize:string|null;

  look: string[]|[];
  color: string[]|[];
}
