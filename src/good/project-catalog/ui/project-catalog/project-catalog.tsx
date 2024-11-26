import { Link, useNavigate } from "@tanstack/react-router";
import { TNoteId } from "../../../../entity/note";
import { TProjectId } from "../../../../entity/project";
import { DEFAULT_USER_ID } from "../../../../entity/user";
import { AddNoteForm, useNoteCreateMutation } from "../../../../feature/note";
import { useProjectAllQuery } from "../../../../feature/project";

export function ProjectCatalog({ noteRoute }: { noteRoute: string }) {
  const { data } = useProjectAllQuery();
  const { mutateAsync } = useNoteCreateMutation();
  const navigate = useNavigate();

  const handleAddNote = (id: TProjectId) => async () => {
    const noteId = await mutateAsync({
      data: null,
      owner_id: DEFAULT_USER_ID,
      project_id: id,
      title: "",
    });
    navigate({ to: noteRoute, params: { noteId } });
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
                <Link to={noteRoute} params={{ noteId: note.id }}>
                  {note.title || "*Nameless*"}
                </Link>
              </div>
            ))}
            <AddNoteForm onSubmit={handleAddNote(project.id)} />
          </div>
        </div>
      ))}
    </div>
  );
}
