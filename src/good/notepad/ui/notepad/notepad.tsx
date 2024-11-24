import { useState } from "react";
import { Editor, type EditorJS } from "../../../../component/editor";
import { useNoteQuery, useNoteUpdateMutation } from "../../../../feature/note";

export function Notepad({ getCatalogUrl }: { getCatalogUrl: () => string }) {
  const { data: note, isLoading } = useNoteQuery({ id: "1" });
  const { mutateAsync } = useNoteUpdateMutation();

  const [editor, setEditor] = useState<EditorJS | null>(null);

  const handleSave = async () => {
    if (!editor || !note) return;

    const data = await editor.save();
    await mutateAsync({
      ...note,
      data,
    });
  };

  return (
    <div>
      <div>
        <button onClick={handleSave}>Save</button>
      </div>
      <div>
        <Editor data={note?.data} onCreateEditor={setEditor} />
      </div>
    </div>
  );
}
