import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
//String Interpolation

position= 'Student'
work_experience='3'
email='tetsuhiro415@gmail.com'
website='www.example.com'
phone='(+63)9999130539'

//image Interpolation/Binding

imageUrl:string="assets/logo.jpeg";
imageW:number=100;
ImageH: number=100;
}

