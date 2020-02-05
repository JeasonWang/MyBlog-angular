import { Component, OnInit, ViewChild } from '@angular/core';
import { BackBaseService } from '../back-base.service';
import { ArticleWithPictureDto, ArticleCommentDto } from 'src/app/domain/backdata';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  articleWithPictureDtos: ArticleWithPictureDto[] = [];
  @ViewChild("selectlist", {static: true}) selectlist;
  articleCommentDto: ArticleCommentDto[] = [];

  constructor(private back: BackBaseService) { }

  ngOnInit() {
    this.back.listAllArticleInfo().subscribe(
      (articleWithPictureDtos: ArticleWithPictureDto[]) => { this.articleWithPictureDtos = articleWithPictureDtos; }
    );
  }

  searchComment(): void {
    alert(this.selectlist.value);
    if(this.selectlist.value){
      this.back.listMessageByArticleId(this.selectlist.value).subscribe(
        (re: ArticleCommentDto[]) => {this.articleCommentDto = re;}
      );
    }
    
  }

}
