import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { FileDrag } from '../../../Directives/file-drag';
import { IMultipleImages } from '../../../Interfaces/SellCar';
import { ButtonComponent } from "../../Shared/button-component/button-component";

@Component({
  selector: 'app-sell-car-image-form',
  imports: [FileDrag, CommonModule, CdkDropList, CdkDrag, ButtonComponent],
  templateUrl: './sell-car-image-form.html',
  styleUrl: './sell-car-image-form.scss',
})
export class SellCarImageForm {

  public defaultImagePreviewUrl: string = "";
  public multipleImages: IMultipleImages[] = [];
  @Output() handleFileSelectedEmitter = new EventEmitter<File>();
  @Output() handleMulipleImageDataEmitter = new EventEmitter<IMultipleImages[]>();

  handleFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files) {
      return;
    }

    const file = input.files[0];
    this.defaultImagePreviewUrl = URL.createObjectURL(file);

    this.handleFileSelectedEmitter.emit(file);
  }

  defaultImageDropped(files: FileList) {
    const fileArray = Array.from(files);

    if (fileArray.length > 1) {
      return alert("Only one file is allowed for default image");
    }

    fileArray.forEach(file => {
      this.defaultImagePreviewUrl = URL.createObjectURL(file);
      this.handleFileSelectedEmitter.emit(file);
    });
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
      this.multipleImages.push({
        url: URL.createObjectURL(file),
        file: file
      });
    })
    this.handleMulipleImageDataEmitter.emit(this.multipleImages);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.multipleImages, event.previousIndex, event.currentIndex);
    this.handleMulipleImageDataEmitter.emit(this.multipleImages);
  }

  remove(index: number) {
    this.multipleImages.splice(index, 1);
    this.handleMulipleImageDataEmitter.emit(this.multipleImages);
  }

  removeAll() {
    this.multipleImages = [];
    this.handleMulipleImageDataEmitter.emit(this.multipleImages);
  }
}
