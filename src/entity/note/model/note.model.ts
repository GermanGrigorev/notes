import { IEditorData } from "../../../component/editor/model/editor.model";
import { TProjectId } from "../../project";
import { TUserId } from "../../user";

export type TNoteId = string;

export interface INote {
  id: TNoteId;
  owner_id: TUserId;
  project_id: TProjectId;
  title: string;
  data: IEditorData;
}
