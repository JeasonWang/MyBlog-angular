import { Component, OnInit } from '@angular/core';
import { ForeBaseService } from '../fore-base.service';
import { ArticleListLatest } from 'src/app/domain/backdata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articleListLatests: ArticleListLatest[] = [];

  constructor(private foreBaseService: ForeBaseService) { }

  ngOnInit() {
    this.getLastestArticle();
  }

  public getLastestArticle() {
    return this.foreBaseService.getLastestArticle().subscribe(articleListLatests => this.articleListLatests = articleListLatests);
  }

}
