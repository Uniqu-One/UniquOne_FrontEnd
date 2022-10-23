export interface postDataType {
  [index: string]: string | string[] | null | File[] | null[];
  imgList: File[] | null[] | string[];
  title:string;
  desc: string;
  tags: string;
  type: string;
  category: string;
  condition: string;
  price:string;

  look: string[];
  color: string[];
}
