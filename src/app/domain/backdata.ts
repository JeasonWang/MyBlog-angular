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

export interface CategoryInfo {
  id: number;
  name: string;
  number: number;
  createBy: Date;
  modifiedBy: Date;
}
export interface ArticleDto {
  id: number;                // 主键
  title: string;           // 文章标题
  summary: string;         // 文章简介
  isTop: boolean;          // 文章是否置顶
  traffic: number;        // 文章浏览量
  createBy: Date;          // 文章创建时间

    // tbl_article_content基础字段
  articleContentId: number;  // ArticleContent表主键
  content: string;         // 文章内容

    // tbl_category_info基础字段
  categoryId: number;        // 分类ID
  categoryName: string;    // 分类名称
  categoryNumber: number;    // 分类对应的数量

    // tbl_article_category基础字段
  articleCategoryId: number; // ArticleCategory表主键

    // tbl_article_picture基础字段
  articlePictureId: number;  // ArticlePicture表主键
  pictureUrl: string;      // 文章题图url
}

export interface Comment1 {
  id: number;
  content: string;
  createBy: Date;
  email: String;
  name: string;
  ip: string;
  isEffective: boolean;
}

export interface ArticleCommentDto {
  id: number;                // 评论id
  content: string;         // 评论内容
  name: string;            // 用户自定义的显示名称
  email: string;
  ip: string;
  createBy: Date;          // 创建时间

    // tbl_article_comment基础字段
  articleCommentId: number;  // tbl_article_comment主键
  articleId: number;         // 文章ID
}