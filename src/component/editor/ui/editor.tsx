import EditorJS from "@editorjs/editorjs";
import table from "@editorjs/table";
import header from "@editorjs/header";
import list from "@editorjs/list";
import code from "@editorjs/code";
import image from "@editorjs/image";
import "./editor.pcss";
import { useEffect } from "react";
import { IEditorData } from "../model/editor.model";

export function Editor({
  onCreateEditor,
  data,
}: {
  data?: IEditorData;
  onCreateEditor: (editor: EditorJS) => void;
}) {
  useEffect(() => {
    const editor = new EditorJS({
      data,
      // Id of Element that should contain Editor instance
      holder: "editorjs",
      tools: {
        code,
        header,
        list,
        table,
        // image,
        image: {
          class: image,
          config: {
            endpoints: {
              byFile: "http://localhost:8008/uploadFile", // Your backend file uploader endpoint
              byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
            },
          },
        },
      },
    });
    onCreateEditor(editor);
  }, []);

  return <div className="text-xl" id="editorjs"></div>;
}
