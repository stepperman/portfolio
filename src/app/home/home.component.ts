import { Component, OnInit } from '@angular/core';

const symbols = '!@#$%1037^&*OQZX{}[]()_+=-0/.?><,~`';
const wantedname = "Antonio Bottelier<br>professionele gozer";

declare var String:any;
String.prototype.replaceAt=function(index, replacement) {
  return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  namedisplay;
  currentLetter;

  constructor() { }

  ngOnInit() {
    //let a:HTMLAudioElement;
    //(a = <HTMLAudioElement>document.querySelector("audio")).oncanplay = function() {
    //  a.play();
    //}

    this.namedisplay = "";
    this.currentLetter = 0;

    this.initNameDisplay();

    window.setTimeout(() => {
      this.addLetter();
    }, 700);
  }

  addLetter() {
    if(this.currentLetter == wantedname.length) return;

    this.namedisplay = this.namedisplay.replaceAt(this.currentLetter, wantedname[this.currentLetter]);
    this.currentLetter += 1;
    window.setTimeout(() => {
      this.addLetter();
    }, 100);

  }

  initNameDisplay() {
    for(let i = 0; i < wantedname.length; i++) {
      let index = Math.floor(Math.random() * (symbols.length-1));
      if(wantedname[i] == '<') {
        this.namedisplay+="<br>";
        i+=4;
        continue;
      }
      else if(wantedname[i] == ' '){
        this.namedisplay+= " ";
        continue;
      }
      this.namedisplay+=symbols[index]
    }
  }

}
