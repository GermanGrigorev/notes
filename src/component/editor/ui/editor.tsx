import EditorJS from "@editorjs/editorjs";
import table from "@editorjs/table";
import header from "@editorjs/header";
import list from "@editorjs/list";
import code from "@editorjs/code";
import image from "@editorjs/image";
import "./editor.pcss";
import { useEffect } from "react";
import { IEditorData } from "../model/editor.model";
import { editorImageApi } from "../api/editor-image.api";

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
            uploader: {
              async uploadByFile(file: File) {
                return await editorImageApi.create(file);
              },
            },
          },
        },
      },
    });
    onCreateEditor(editor);
  }, []);

  return <div className="text-xl" id="editorjs"></div>;
}
