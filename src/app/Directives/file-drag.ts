import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[fileDrag]',
})
export class FileDrag {
  @Output() files: EventEmitter<FileList> = new EventEmitter();
  @HostBinding("style.background") public background = "#eee";
  constructor() { }

  @HostListener("dragover", ["$event"])
  public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#999"
  }

  @HostListener("dragleave", ["$event"])
  public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#eee"
  }

  @HostListener("drop", ["$event"])
  public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#eee";

    if (evt.dataTransfer?.files) {
      this.files.emit(evt.dataTransfer.files)
    }
  }





}
