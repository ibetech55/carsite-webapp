import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { FileDrag } from '../../../Directives/file-drag';
import { IMultipleImages } from '../../../Interfaces/Car/SellCar';
import { ButtonComponent } from "../../Shared/button-component/button-component";
import { SellCarFormService } from '../../../Services/SellCarFormService/sell-car-form-service';
import { MatIconModule } from '@angular/material/icon'


@Component({
  selector: 'app-sell-car-image-form',
  imports: [FileDrag, CommonModule, CdkDropList, CdkDrag, ButtonComponent, MatIconModule],
  templateUrl: './sell-car-image-form.html',
  styleUrl: './sell-car-image-form.scss',
})
export class SellCarImageForm implements OnInit {

  constructor(public _SellCarFormService: SellCarFormService) {

  }
  ngOnInit(): void {
    this._multipleImages = this._SellCarFormService.multipleImages;
  }
  public _multipleImages!: IMultipleImages[];

  handleFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files) {
      return;
    }

    const file = input.files[0];
    this._SellCarFormService.defaultImagePreviewUrl = URL.createObjectURL(file);

    this._SellCarFormService.setDefaultImage(file);
  }

  defaultImageDropped(files: FileList) {
    const fileArray = Array.from(files);

    if (fileArray.length > 1) {
      return alert("Only one file is allowed for default image");
    }

    fileArray.forEach(file => {
      this._SellCarFormService.defaultImagePreviewUrl = URL.createObjectURL(file);
      this._SellCarFormService.setDefaultImage(file);
    });
  }

  public get _defaultImagePreviewUrl() {
    return this._SellCarFormService.defaultImagePreviewUrl;
  }

  multipleImagesDropped(files: FileList) {
    this.convertFileToArray(files)
  }

  handleMultipleFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files) return;

    this.convertFileToArray(input.files)
  }

  private convertFileToArray(fileList: FileList) {
    const fileArray = Array.from(fileList);

    fileArray.forEach(file => {
      this._SellCarFormService.multipleImages.push({
        url: URL.createObjectURL(file),
        file: file
      });
    })

    this.mapMultipleImages();
  }

  private mapMultipleImages() {
    const files = this._SellCarFormService.multipleImages.map(image => image.file);
    this._SellCarFormService.setMultipleImages(files);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this._SellCarFormService.multipleImages, event.previousIndex, event.currentIndex);
    this.mapMultipleImages();
  }

  remove(index: number) {
    this._SellCarFormService.multipleImages.splice(index, 1);
    this.mapMultipleImages();
  }

  removeAll() {
    this._SellCarFormService.sellCarForm.patchValue({ carImages: [] })
    this._SellCarFormService.multipleImages = [];
    this._multipleImages = [];
  }
}
