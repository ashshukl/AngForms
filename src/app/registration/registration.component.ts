import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  firstname: string = '';

  fetchData(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/products/3", true);
    xhr.onload = function(){
    console.log(xhr.responseText);
    };
    xhr.send();
  }
}
