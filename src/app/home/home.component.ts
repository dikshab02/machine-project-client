import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../services/http-call.service';
import { IProject } from '../models/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  projectArr: IProject[] = [];
  config: any = {
    tasks: [],
  };

  constructor(private httpCallService: HttpCallService) {}
  ngOnInit() {
    this.getProjectByDateRange();
  }

  getProjectByDateRange() {
    const sDate = new Date('04-01-2023');
    const eDate = new Date('12-31-2023');
    this.httpCallService
      .getProjectByDateRange(sDate, eDate)
      .subscribe((response) => {
        this.projectArr = response.data;
        this.arrConverter(this.projectArr);
      });
  }

  arrConverter(projects: IProject[]) {
    projects.map((project) => {
      this.config.tasks.push({
        start: project.startDate,
        end: project.endDate,
        id: project._id,
        text:
          typeof project.allocateMachine === 'string'
            ? project.allocateMachine
            : project.allocateMachine.machineName,
      });
    });
  }
}
