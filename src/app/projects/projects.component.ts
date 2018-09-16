import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import { Project } from '../project';
import { MockNgModuleResolver } from '@angular/compiler/testing';
declare var require:any;

const markdown = require("markdown").markdown;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private service:FileService) { }

  projects:Project[];

  ngOnInit() {
    let projectjson = this.service.readJson("./assets/projects/allprojects.json", (data) => {
      this.processProjects(data);
    });

    
  }

  processProjects(json:any) {
    this.projects = [];
    for(let i = 0; i < json.length; i++) {
      this.projects.push(<Project>json[i]);
    }
  }

  mouseOver($event:any) {
    let element = <HTMLElement>($event.target);
    let video = <HTMLVideoElement>element.querySelector("video");
    element.querySelector("img").hidden = true;

    if(video.paused)
      video.play();
  }

  mouseLeave($event:any) {
    let element = <HTMLElement>($event.target);
    let video = <HTMLVideoElement>element.querySelector("video");
    element.querySelector("img").hidden = false;

    if(!video.paused)
      video.pause();
  }

}
