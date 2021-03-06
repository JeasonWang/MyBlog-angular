import { Component, OnInit } from '@angular/core';
import { CategoryList, ArticleList } from 'src/app/domain/backdata';
import { ForeBaseService } from '../fore-base.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  categoryLists: CategoryList[] = [];
  articleLists: ArticleList[] = [];

  constructor(private foreBaseService: ForeBaseService) { }

  ngOnInit() {
    this.getCategoryList();
    this.getLastestArticle();
  }

  public getCategoryList() {
    this.foreBaseService.getCategoryList().subscribe(categoryLists => this.categoryLists = categoryLists);
  }

  public getArticleList() {
    this.foreBaseService.getArticleList().subscribe(articleLists => this.articleLists = articleLists);
  }
  public getLastestArticle() {
    this.foreBaseService.getLastestArticle().subscribe(articleLists => this.articleLists = articleLists);
  }
  public allArticle() {
    this.getArticleList();
  }
}
