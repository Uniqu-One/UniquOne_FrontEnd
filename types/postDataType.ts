export interface postDataType {
  [index: string]: string | string[] | null | File[] | null[];
  imgList: File[] | null[] | string[];
  postType:string;
  title:string;
  desc: string;
  tags: string;
  type: string;
  category: string;
  condition: string;
  price:string;
  productSize:string;

  look: string[]|[];
  color: string[]|[];
}
