import {Component} from '@angular/core';
import {HomeSearchComponent} from './home-search/home-search.component';
import {MatToolbar} from '@angular/material/toolbar';
import {HomeDisplayComponent} from './home-display/home-display.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HomeSearchComponent,
    MatToolbar,
    HomeDisplayComponent
  ],
  templateUrl: './home-page.component.html',
  standalone: true,
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
