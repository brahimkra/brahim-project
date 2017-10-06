import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';


   ngOnInit() {
     firebase.initializeApp({
       apiKey: 'AIzaSyCZkN7UB6dQF6wajDGMEPJeewNcMWQPL6E',
       authDomain: 'ng-recipe-book-8c66c.firebaseapp.com'
     });
   }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
