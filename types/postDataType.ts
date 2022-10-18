export interface postDataType {
  [index: string]: string | string[] | null | File[] | null[];
  imgList: File[] | null[] | null;
  desc: string;
  tags: string;
  type: string;
  category: string;
  condition: string;

  look: string[];
  color: string[];
}
