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
  isCollapsed = false;

  constructor(private foreBaseService: ForeBaseService) { }

  ngOnInit() {
    this.getCategoryList();
    this.getArticleList();
  }

  public getCategoryList() {
    this.foreBaseService.getCategoryList().subscribe(categoryLists => this.categoryLists = categoryLists);
  }

  public getArticleList() {
    this.foreBaseService.getLastestArticle().subscribe(articleLists => this.articleLists = articleLists);
  }

  public clickdiv(): void{
    alert('click div');
  }

}
