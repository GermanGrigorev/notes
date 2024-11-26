import { Link, useNavigate } from "@tanstack/react-router";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { TProjectId } from "../../../../entity/project";
import { DEFAULT_USER_ID } from "../../../../entity/user";
import {
  AddNoteForm,
  useNoteCreateMutation,
  useNoteDeleteMutation,
} from "../../../../feature/note";
import { useProjectAllQuery } from "../../../../feature/project";
import { NoteCard, TNoteId } from "../../../../entity/note";
import { PROJECT_QUERY_KEY } from "../../../../feature/project/state/project.query";

export function ProjectCatalog({ noteRoute }: { noteRoute: string }) {
  const { data } = useProjectAllQuery();
  const { mutateAsync } = useNoteCreateMutation();
  const { mutateAsync: deleteAsync } = useNoteDeleteMutation({
    projectQueryKey: PROJECT_QUERY_KEY,
  });
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

  const handleDeleteNote = (id: TNoteId) => async () => {
    await deleteAsync(id);
  };

  if (!data) return null;
  return (
    <div>
      <Accordion>
        {data.map((project) => (
          <AccordionItem className="" key={project.id} title={project.title}>
            <div>
              <div className="flex flex-col gap-3">
                {project?.pages?.map((note) => (
                  <div key={note.id}>
                    <NoteCard
                      onDelete={handleDeleteNote(note.id)}
                      note={note}
                      noteRoute={noteRoute}
                    />
                  </div>
                ))}
                <AddNoteForm onSubmit={handleAddNote(project.id)} />
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
