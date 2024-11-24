import EditorJS from "@editorjs/editorjs";

export function Editor() {
  const editor = new EditorJS({
    /**
     * Id of Element that should contain Editor instance
     */
    holder: "editorjs",
  });
  return <div id="editorjs"></div>;
}
