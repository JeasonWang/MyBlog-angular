import { Component, OnInit } from '@angular/core';
import { CategoryList, ArticleList, ArticleCommentDto, ArticleDto } from 'src/app/domain/backdata';
import { ForeBaseService } from '../fore-base.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forearticle',
  templateUrl: './forearticle.component.html',
  styleUrls: ['./forearticle.component.css']
})
export class ForearticleComponent implements OnInit {
  articleDto: ArticleDto;
  articleId: number;

  constructor(private foreBaseService: ForeBaseService, private routeInfo: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.articleId = this.routeInfo.snapshot.queryParams.id;
    this.getArticleById(this.articleId);
  }
  getArticleById(id: number) {
    this.articleDto = new ArticleDto();
    this.foreBaseService.getArticleById(id).subscribe(
      (re: ArticleDto) => {
        this.articleDto = re;
      }
    );
    setTimeout(() => {
      console.log(this.articleDto);
    }, 2000);
  }
}
