import { Component, OnInit } from '@angular/core';
import { ArticleWithPictureDto } from '../../domain/backdata';
import { BackBaseService } from '../back-base.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articleWithPictureDtos: ArticleWithPictureDto[] = [];

  constructor(private service: BackBaseService) {}

  ngOnInit() {
    setTimeout(() => {
      this.listAllArticleInfo();
    }, 100);
  }

  listAllArticleInfo() {
    this.service.listAllArticleInfo().subscribe(
      (articleWithPictureDtos: ArticleWithPictureDto[]) => {
        this.articleWithPictureDtos = articleWithPictureDtos; }
    );
  }
  deleteArticle(id: number) {
    this.service.deleteArticle(id).subscribe();
    setTimeout(() => {
      this.listAllArticleInfo();
    }, 100);
  }
}
