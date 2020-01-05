export interface ArticleListLatest{
  id: number;
  title: string;
  summary: string;
  traffic: number;
  articlePictureId: number;
  pictureUrl: string;
  top: boolean;
}

export interface CategoryList{
  id: number;
  name: string;
  number: string;
  createBy: Date;
  modifiedBy: Date;
}
