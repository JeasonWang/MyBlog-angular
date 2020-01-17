export interface ArticleList {
  id: number;
  title: string;
  summary: string;
  traffic: number;
  articlePictureId: number;
  pictureUrl: string;
  top: boolean;
}

export interface CategoryList {
  id: number;
  name: string;
  number: string;
  createBy: Date;
  modifiedBy: Date;
}

export interface SysLog {
  id: string;
  ip: string;
  remark: string;
  operateUrl: string;
  operateBy: string;
}
export interface SysView {
  id: string;
  ip: string;
  createBy: string;
}
export interface ArticleWithPictureDto {
  id: number;                    // ArticleInfo表主键
  title: string;               // 文章标题
  summary: string;             // 文章简介
  traffic: number;            // 文章阅读量
  articlePictureId: number;      // ArticlePicture主键
  pictureUrl: string;          // 文章题图URL
  top: boolean;              // 文章是否置顶
}
