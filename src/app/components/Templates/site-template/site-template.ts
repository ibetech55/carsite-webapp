import { Component } from '@angular/core';
import { HeaderMenu } from "../header-menu/header-menu";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-site-template',
  imports: [RouterModule, HeaderMenu],
  templateUrl: './site-template.html',
  styleUrl: './site-template.scss',
})
export class SiteTemplate {

}
