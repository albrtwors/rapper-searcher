import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-page-layout',
  imports: [RouterOutlet, RouterModule],
  standalone: true,
  templateUrl: './page-layout.html',
  styleUrl: './page-layout.css',
})
export class PageLayout { }
