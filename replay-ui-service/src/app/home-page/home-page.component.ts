import {Component} from '@angular/core';
import {HomeSearchComponent} from './home-search/home-search.component';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-home-page',
  imports: [
    HomeSearchComponent,
    MatToolbar
  ],
  templateUrl: './home-page.component.html',
  standalone: true,
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
