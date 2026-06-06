import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.scss',
})
export class Detail {
  @Input() label = "";
  @Input() text = "";
}
