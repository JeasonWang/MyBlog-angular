import { Component, OnInit, ViewChild } from '@angular/core';
import { BackBaseService } from '../back-base.service';
import { CategoryInfo, ArticleDto } from 'src/app/domain/backdata';
import { Router } from '@angular/router';

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
  categoryInfos: CategoryInfo[] = [];
  @ViewChild('selectlist', { static: true }) selectlist;


  constructor(private backBaseService: BackBaseService,
    private router: Router) { }

  ngOnInit() {
    this.initList();
  }

  initList() {
    this.backBaseService.listAllCategoryInfo().subscribe(
      (re: CategoryInfo[]) => { this.categoryInfos = re; }
    );
  }

  addArticle(): void {
    let articleDto: ArticleDto = new ArticleDto();
    articleDto.title = this.title;
    articleDto.summary = this.summary;
    articleDto.isTop = this.isTop;
    articleDto.content = this.content;
    articleDto.pictureUrl = this.pictureUrl;
    articleDto.categoryId = this.selectlist.value;
    this.backBaseService.addArticle(articleDto).subscribe();
    this.router.navigateByUrl("/back/article");
  }

}
