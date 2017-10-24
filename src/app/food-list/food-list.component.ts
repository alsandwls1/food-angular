import { Component, OnInit } from '@angular/core';

import { FileService } from '../_services/file.service';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  cnt = 1;

  constructor(private uploadService: FileService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0)

    console.log(this.currentFileUpload.name);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);

    this.selectedFiles = undefined;
  }
}
