import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';
import { Project } from '../project';
import { MockNgModuleResolver } from '@angular/compiler/testing';
declare var require:any;

const markdown = require("marked");
import {highlightBlock} from "highlight.js";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private service:FileService) { }

  objectKeys = Object.keys;

  projects:Project[];
  currentProject:Project = new Project();
  loading = "Loading content, please wait...";

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

    if(!video.paused) {
      video.pause();
      video.currentTime = 0;
    }
  }

  openProject(project) {
    this.currentProject = project;

    const projectList = document.getElementById("projectlist");
    const info = <HTMLElement>projectList.childNodes[0];
    const video = <HTMLVideoElement>projectList.querySelector("video");
    // open the dialog thingy.
    projectList.hidden = false;
    info.classList.remove("infoclosed");
    info.classList.add("infoopened");

    document.body.style.overflow = "hidden";

    this.service.readFile("./assets/md/" + this.currentProject.markdownLink, (data) => {
      this.currentProject.parsedmarkdown = markdown(data);

    });

    window.setTimeout(() => {
      video.pause();
      video.load();
      video.play();

      let codes = document.querySelectorAll("pre code");
      console.log(codes.length);

      for(let i = 0; i < codes.length; i++)
      {
        highlightBlock(codes[i]);
      }

      let description = document.getElementById("info_description");
      this.currentProject.parsedmarkdown = description.innerHTML;

    }, 200)
  }

  closeProject($event) {
    
    const projectList = document.getElementById("projectlist");
    const wrapper = document.getElementById("projectlistwrapper");
    const info = <HTMLElement>projectList.childNodes[0];
    const video = <HTMLVideoElement>projectList.querySelector("video");

    //let isClickInside = $event.target.contains(info);
    //if (!isClickInside) return;

    console.log(info.scrollWidth);
    console.log($event.clientX);
    if($event.target == wrapper || wrapper.contains($event.target) || projectList.scrollWidth <= $event.clientX) return;

    info.classList.remove("infoopened");
    info.classList.add("infoclosed");
    document.body.style.overflow = "auto";
    window.setTimeout(() => {
      projectList.hidden = true;
      video.pause();
    }, 10)
  }
}
