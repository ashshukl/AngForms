import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detailsForm = new FormGroup({
    fname: new FormControl('Hanuman'),
    lname: new FormControl('Ji'),
    country: new FormControl('India')
  });

  ngOnInit(){
    this.detailsForm.get('lname')?.valueChanges.subscribe((data) => {
    console.log(data);
  });

}
  btnClicked() {
    console.log(this.detailsForm.value);
    console.log('fname>> ',this.detailsForm.get('fname')?.value);
    console.log('lname>> ',this.detailsForm.get('lname')?.value);
  }
 }
