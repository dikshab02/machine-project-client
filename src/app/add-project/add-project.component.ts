import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpCallService } from '../services/http-call.service';
import { IMachine } from '../models/machine.model';
import { IProject } from '../models/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  projectForm: FormGroup | undefined;
  machines: IMachine[] = [];
  color: string = "green";

  constructor(
    private formBuilder: FormBuilder,
    private httpCallService: HttpCallService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllMachines();
    this.projectForm = this.formBuilder.group({
      name: ['', Validators.required],
      startDate: [Date],
      endDate: [Date],
      allocateMachine: new FormControl<string | null>(
        null,
        Validators.required
      ),
    });
  }


  addProject() {
    if (!this.projectForm || this.projectForm.invalid) return;

    if(this.projectForm.hasError('required')) {
      alert('Mandatory fields are empty');
      return
    }
    const project: IProject = {
      name: this.projectForm.controls['name'].value,
      startDate: this.projectForm.controls['startDate'].value,
      endDate: this.projectForm.controls['endDate'].value,
      allocateMachine: this.projectForm.controls['allocateMachine'].value,
    };
    this.httpCallService.addProject(project).subscribe((response) => {
      if(response.isError){
        return alert(response.message)
      }
      this.router.navigate(['home']);
    });
  }

  getAllMachines() {
    this.httpCallService.getAllMachines()
    .subscribe((machineArr)=>{
      this.machines = machineArr.data;
    })
  }
}
