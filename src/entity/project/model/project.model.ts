import { INote } from "../../note";

export type TProjectId = string;

export interface IProject {
  id: TProjectId;
  name: string;
  notes: INote[];
}
