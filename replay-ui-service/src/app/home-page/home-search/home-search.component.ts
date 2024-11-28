import {Component, HostListener, OnInit} from '@angular/core';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption, MatSelect, MatSelectModule} from '@angular/material/select';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {ApiService} from '../../service/root/api.service';

@Component({
  selector: 'app-home-search',
  imports: [
    MatLabel,
    MatInput,
    MatFormField,
    MatSelect,
    ReactiveFormsModule,
    MatOption,
    MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatSlideToggle, NgIf, MatButton
  ],
  templateUrl: './home-search.component.html',
  standalone: true,
  styleUrl: './home-search.component.css'
})
export class HomeSearchComponent implements OnInit {

  constructor(private apiService: ApiService) {
  }

  async ngOnInit(): Promise<void> {
    let homePageMetadata = await this.apiService.getHomePageMetadata();
    console.log(homePageMetadata);
  }

  /*toggle for advanced search*/
  public isAdvancedSearchOpen = false;

  serviceNameOptions: string[] = ['Erick-Service', 'Lucy-Service'];
  replayStatusOptions: string[] = ['UNPROCESSED', 'PROCESSED'];
  messageStatusOptions: string[] = ['OK', 'NOK', 'NACK', 'NO RESPONSE'];
  messageDescriptionOptions: string[] = ['error-1', 'error-2', 'error-3'];


  homeSearchForm = new FormGroup({
    uniqueIds: new FormControl(''),
    serviceNames: new FormControl(''),
    replayStatus: new FormControl(''),
    messageStatus: new FormControl(''),
    messageDescription: new FormControl(''),
    partnerId: new FormControl(''),
  })

  switchToggle = () => {
    this.isAdvancedSearchOpen = !this.isAdvancedSearchOpen;
    console.log(this.isAdvancedSearchOpen);
  }

  /*监听键盘事件*/
  @HostListener('window:keydown.enter')
  search = () => {
    console.log(this.homeSearchForm.value);
  }

  reset = () => {
    this.isAdvancedSearchOpen = false;
    this.resetForm();
  }

  resetForm = () => {
    this.homeSearchForm.setValue({
      uniqueIds: '',
      serviceNames: '',
      replayStatus: '',
      messageStatus: '',
      messageDescription: '',
      partnerId: '',
    })
  }


}
