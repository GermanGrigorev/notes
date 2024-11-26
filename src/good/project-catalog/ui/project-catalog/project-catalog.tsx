import { TNoteId } from "../../../../entity/note";
import { TProjectId } from "../../../../entity/project";
import { DEFAULT_USER_ID } from "../../../../entity/user";
import { AddNoteForm, useNoteCreateMutation } from "../../../../feature/note";
import { useProjectAllQuery } from "../../../../feature/project";

export function ProjectCatalog({
  getNoteUrl,
}: {
  getNoteUrl: (id: TNoteId) => string;
}) {
  const { data } = useProjectAllQuery();
  const { mutateAsync } = useNoteCreateMutation();

  const handleAddNote = (id: TProjectId) => async () => {
    await mutateAsync({
      data: null,
      owner_id: DEFAULT_USER_ID,
      project_id: id,
      title: "",
    });
  };
  return (
    <div>
      {data?.map((project) => (
        <div className="mb-6" key={project.id}>
          <div>Name: {project.title}</div>
          <div>Notes:</div>
          <div className="pl-10">
            {project?.pages?.map((note) => (
              <div key={note.id}>
                <a href={getNoteUrl(note.id)}>{note.title || "*Nameless*"}</a>
              </div>
            ))}
            <AddNoteForm onSubmit={handleAddNote(project.id)} />
          </div>
        </div>
      ))}
    </div>
  );
}
