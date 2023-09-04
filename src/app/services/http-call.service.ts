import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerResponse } from '../models/server-response.model';
import { ILogin } from '../models/login.model';
import { IMachine } from '../models/machine.model';
import { IProject } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class HttpCallService {
  private API_URL = 'http://localhost:3300';

  constructor(private http: HttpClient) {}

  login(credentials: {
    email: string;
    password: string;
  }): Observable<ServerResponse<ILogin>> {
    console.log('log', `${this.API_URL}/login`);
    return this.http.post<ServerResponse<ILogin>>(
      `${this.API_URL}/login`,
      credentials
    );
  }

  addMachine(machineName: {
    machineName: string;
  }): Observable<ServerResponse<IMachine[]>> {
    return this.http.post<ServerResponse<IMachine[]>>(
      `${this.API_URL}/add-machine`,
      machineName
    );
  }

  getMachine(machineId: string): Observable<ServerResponse<IMachine>> {
    console.log('id', machineId);
    return this.http.get<ServerResponse<IMachine>>(
      `${this.API_URL}/machine/${machineId}`
    );
  }

  addProject(project: IProject): Observable<ServerResponse<IProject>> {
    return this.http.post<ServerResponse<IProject>>(
      `${this.API_URL}/add-project`,
      project
    );
  }

  getAllMachines(): Observable<ServerResponse<IMachine[]>> {
    return this.http.get<ServerResponse<IMachine[]>>(
      `${this.API_URL}/all-machines`
    );
  }

  getProjectByDateRange(
    startDate: Date,
    endDate: Date
  ): Observable<ServerResponse<IProject[]>> {
    return this.http.post<ServerResponse<IProject[]>>(
      `${this.API_URL}/project-by-date-range`,
      { startDate, endDate }
    );
  }
}
