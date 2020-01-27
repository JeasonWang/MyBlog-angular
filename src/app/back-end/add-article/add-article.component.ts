import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  title: string;           // 文章标题
  summary: string;         // 文章简介
  isTop: boolean = false;          // 文章是否置顶
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

  @ViewChild('isTop1', { static:true }) isTop1;

  constructor() { }

  ngOnInit() {
    
  }
  addArticle(): void {
    alert(this.isTop+" : "+this.isTop1.selector.value);
  }

}
