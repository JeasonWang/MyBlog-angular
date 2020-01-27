import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryInfo } from 'src/app/domain/backdata';
import { BackBaseService } from '../back-base.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  addvalue: string;
  modifyvalue: string;
  categoryInfos: CategoryInfo[] = [];
  @ViewChild('selectlist', { static: true }) selectlist;

  constructor(private backBaseService: BackBaseService) { }

  ngOnInit() {
    this.initList();
  }
  initList() {
    this.backBaseService.listAllCategoryInfo().subscribe(
      (re: CategoryInfo[]) => { this.categoryInfos = re; }
    );
  }

  addCategory() {
    let categoryInfo: CategoryInfo = new CategoryInfo();
    categoryInfo.name = this.addvalue;
    this.backBaseService.addCategory(categoryInfo).subscribe();
    setTimeout(() => {
      this.initList();
    }, 100);
  }

  modifyCategory(): void {
    alert(this.selectlist.value);
    let categoryInfo: CategoryInfo = new CategoryInfo();
    categoryInfo.name = this.modifyvalue;
    categoryInfo.id = this.selectlist.value;
    this.backBaseService.modifyCategory(categoryInfo).subscribe();
    setTimeout(() => {
      this.initList();
      this.modifyvalue = '';
    }, 100);
  }

  refreshList(): void {

  }

}
