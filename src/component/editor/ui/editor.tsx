import EditorJS from "@editorjs/editorjs";
import table from "@editorjs/table";
import header from "@editorjs/header";
import list from "@editorjs/list";
import code from "@editorjs/code";
import "./editor.pcss";
import { useEffect } from "react";
import { IEditorData } from "../model/editor.model";

export function Editor({
  onCreateEditor,
  data,
}: {
  data: IEditorData;
  onCreateEditor: (editor: EditorJS) => void;
}) {
  useEffect(() => {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      holder: "editorjs",
      tools: {
        code,
        header,
        list,
        table,
      },
    });
    onCreateEditor(editor);
  }, []);

  return <div className="text-xl" id="editorjs"></div>;
}
