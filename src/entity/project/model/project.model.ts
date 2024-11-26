import { INote } from "../../note";
import { TUserId } from "../../user";

export type TProjectId = string;

export interface IProject {
  id: TProjectId;
  owner_id: TUserId;
  title: string;
  pages: INote[];
}
