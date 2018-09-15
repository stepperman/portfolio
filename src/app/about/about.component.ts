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

  constructor(private fileService:FileService) { }

  ngOnInit() {
    this.fileService.readFile(file, (data) => this.aboutme = markdown.toHTML(data));
  }


}
