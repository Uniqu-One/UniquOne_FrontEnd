export interface postDataType {
  [index: string]: string | string[] | File | null | File[] | null[];
  imgList: File[] | null[] | File | null;
  desc: string;
  tags: string;
  type: string;
  category: string;
  condition: string;

  look: string[];
  color: string[];
}
