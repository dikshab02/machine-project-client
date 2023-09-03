import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpCallService } from 'src/app/services/http-call.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IMachine } from '../models/machine.model';

@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.scss']
})
export class AddMachineComponent implements OnInit {
  addMachineForm: any = FormGroup;
  machine_id: string | undefined | null;
  machineList: IMachine[] = [];
  color: string = "green";
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private httpCallService: HttpCallService,
    private route: ActivatedRoute){}

  ngOnInit() {
    this.machine_id = this.route.snapshot.paramMap.get('machineId')
      this.addMachineForm = this.formBuilder.group({
        machineName: ['', Validators.required]
      })
  }

  addMachine(){
    if(this.addMachineForm.invalid)
    return;
    this.httpCallService.addMachine(this.addMachineForm.value)
    .subscribe((response)=>{
      this.router.navigate(['home'])
    })
  }

  // getMachine() {
  //   if(this.machine_id)
  //   this.httpCallService.getMachine(this.machine_id)
  //   .subscribe((response)=>{
  //     console.log("r",response)
  //     // this.machineList.push(response.data);
  //   })
  // }

}
