import { IEditorData } from "../../../component/editor/model/editor.model";

export type TNoteId = string;

export interface INote {
  id: TNoteId;
  data: IEditorData;
}
