import { Component, OnInit } from '@angular/core';
import { distanceInWords } from 'date-fns';
import { ForeBaseService } from '../fore-base.service';
import { Comment1 } from 'src/app/domain/backdata';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data: any[] = [];
  submitting = false;
  user = {
    author: '游客',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  };
  inputValue = '';
  name = '';
  email = '';
  comments: Comment1[] = [];
  constructor(private service:ForeBaseService) { }

  ngOnInit() {
    this.listAllComment();
  }
  listAllComment() {
    this.service.listAllComment().subscribe(
      (re: Comment1[]) => {this.comments = re}
    );
  }

  handleSubmit(): void {
    this.submitting = true;
    let comment = new Comment1();
    comment.content = this.inputValue;
    comment.name = this.name;
    comment.email = this.email;
    this.name = '';
    this.email = '';
    this.inputValue = '';
    this.service.addMessage(comment).subscribe();
    setTimeout(() => {
      this.submitting = false;
      this.listAllComment();
    }, 800);
  }
}
