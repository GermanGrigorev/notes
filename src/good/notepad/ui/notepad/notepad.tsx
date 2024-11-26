import { useState } from "react";
import { Editor, type EditorJS } from "../../../../component/editor";
import { useNoteQuery, useNoteUpdateMutation } from "../../../../feature/note";
import { TNoteId } from "../../../../entity/note";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@nextui-org/button";

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

  // const { ...titleRegister } = useMemo(() => register("title"), []);

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
      <div className="flex items-center justify-center gap-3">
        <label>
          <input
            className="focus-visible:outline-none p-2 text-xl "
            placeholder="Title"
            {...register("title")}
          />
        </label>
        <Button type="submit">Save</Button>
      </div>
      <div>
        <Editor data={note?.data ?? undefined} onCreateEditor={setEditor} />
      </div>
    </form>
  );
}
