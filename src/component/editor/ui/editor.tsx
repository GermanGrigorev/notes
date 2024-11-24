import EditorJS from "@editorjs/editorjs";
import table from "@editorjs/table";
import header from "@editorjs/header";
import list from "@editorjs/list";
import code from "@editorjs/code";

export function Editor() {
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
  return <div id="editorjs"></div>;
}
