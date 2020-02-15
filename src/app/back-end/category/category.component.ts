import { Component, OnInit } from '@angular/core';
import { BackBaseService } from '../back-base.service';
import { CategoryInfo } from '../../domain/backdata';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private service: BackBaseService) {

  }

  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.checkAll(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfDisplayData.forEach((data, index) => (this.mapOfCheckedId[data.id] = index % 2 !== 0));
        this.refreshStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfDisplayData.forEach((data, index) => (this.mapOfCheckedId[data.id] = index % 2 === 0));
        this.refreshStatus();
      }
    }
  ];
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData: CategoryInfo[] = [];
  listOfAllData: CategoryInfo[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  currentPageDataChange($event: CategoryInfo[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  ngOnInit(): void {
    this.listAllCategoryInfo();
  }

  listAllCategoryInfo() {
    this.service.listAllCategoryInfo().subscribe(
      (categoryInfos: CategoryInfo[]) => { this.listOfAllData = categoryInfos; }
    );
  }
  deleteCategory(id: number) {
    this.service.deleteCategoryInfo(id).subscribe();
    setTimeout(() => {
      this.listAllCategoryInfo();
    }, 100);
  }
}

