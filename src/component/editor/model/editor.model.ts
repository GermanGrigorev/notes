export type TEditorBlockId = string;
export type TEditorBlockType = string;

export interface IEditorBlock {
  id: TEditorBlockId;
  type: TEditorBlockType;
  data: ObjectUnknown;
}

export interface IEditorData {
  time: number;
  blocks: IEditorBlock[];
  version: string;
}
