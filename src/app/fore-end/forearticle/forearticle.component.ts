import { Component, OnInit } from '@angular/core';
import { CategoryList, ArticleList, ArticleCommentDto } from 'src/app/domain/backdata';
import { ForeBaseService } from '../fore-base.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forearticle',
  templateUrl: './forearticle.component.html',
  styleUrls: ['./forearticle.component.css']
})
export class ForearticleComponent implements OnInit {
  articleCommentDto: ArticleCommentDto;
  articleId: number;

  constructor(private foreBaseService: ForeBaseService,private routeInfo:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.articleId = this.routeInfo.snapshot.queryParams['id'];
    this.getArticleById(this.articleId);
  }
  getArticleById(id: number) {
    this.foreBaseService.getArticleById(id).subscribe(
      (re: ArticleCommentDto) => {this.articleCommentDto = re}
    );
  }
  
}
