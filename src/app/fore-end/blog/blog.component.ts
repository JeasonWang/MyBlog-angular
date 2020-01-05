import { Component, OnInit } from '@angular/core';
import { CategoryList } from 'src/app/domain/backdata';
import { ForeBaseService } from '../fore-base.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  categoryLists: CategoryList[] = [];

  constructor(private foreBaseService: ForeBaseService) { }

  ngOnInit() {
  }

  public getCategoryList() {
    this.foreBaseService.getCategoryList().subscribe(categoryLists => this.categoryLists = categoryLists);
  }

}
