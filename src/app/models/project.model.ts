import { IMachine } from "./machine.model";

export interface IProject {
  name: string;
  startDate: Date;
  endDate: Date;
  allocateMachine: string | IMachine;
  color?: string;
  _id?: string;
}
