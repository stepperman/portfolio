import { Component, OnInit } from '@angular/core'
import { FileService } from './../file.service'

declare var require:any;
const markdown = require('markdown').markdown;

const file :string = "./assets/md/aboutme.md";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutme:string;
  me_link:string;

  possible_me_links:string[] = [
    "me", "me2", "me3"
  ];

  constructor(private fileService:FileService) { }

  ngOnInit() {
    this.fileService.readFile(file, (data) => this.aboutme = markdown.toHTML(data));

    this.me_link = this.possible_me_links[Math.floor(Math.random()*this.possible_me_links.length)];
  }


}
