import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project'

@Component({
  selector: 'app-project-filter',
  templateUrl: './project-filter.component.html',
  styleUrls: ['./project-filter.component.scss']
})
export class ProjectFilterComponent implements OnInit {

  @Input() allProjects : Project[];

  enabledFilters = {};

  constructor() { }

  ngOnInit() {
  }

  updateProjects() {
    console.log(this.enabledFilters);

    for(let i = 0; i < this.allProjects.length; i++)
    {
      let project : Project = this.allProjects[i];
      console.log(this.allProjects);
      let hidden = false;
      for(let key in this.enabledFilters)
      {
        if(this.enabledFilters[key] == "") continue;
        if(!project.tags.includes(this.enabledFilters[key])) {
          hidden = true;
          break;
        }
      }

      project.hidden = hidden;
    }
  }

  tagClicked(args)
  {
    console.log(args);
    args.srcElement.previousSibling.checked = !args.srcElement.previousSibling.checked;

    if(args.srcElement.previousSibling.checked === true)
      this.enabledFilters[args.srcElement.previousSibling.attributes['name'].value] = args.srcElement.innerHTML;
    else
      this.enabledFilters[args.srcElement.previousSibling.attributes['name'].value] = "";

    args.stopPropagation();
    args.preventDefault();

    this.updateProjects();
  }

}
