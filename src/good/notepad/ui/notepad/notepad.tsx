import { useState } from "react";
import { Editor, type EditorJS } from "../../../../component/editor";
import { useNoteQuery, useNoteUpdateMutation } from "../../../../feature/note";
import { TNoteId } from "../../../../entity/note";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  title: string;
};

export function Notepad({ noteId }: { noteId: TNoteId }) {
  const { data: note, isLoading } = useNoteQuery({ id: noteId });
  const { mutateAsync } = useNoteUpdateMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ values: { title: note?.title ?? "" } });

  const [editor, setEditor] = useState<EditorJS | null>(null);

  const handleFormSubmit: SubmitHandler<Inputs> = async (formData) => {
    if (!editor || !note) return;

    const editorData = await editor.save();
    await mutateAsync({
      ...note,
      data: editorData,
      title: formData.title,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="">
        <label>
          <input placeholder="Title" {...register("title")} />
        </label>
        <button type="submit">Save</button>
      </div>
      <div>
        <Editor data={note?.data ?? undefined} onCreateEditor={setEditor} />
      </div>
    </form>
  );
}
