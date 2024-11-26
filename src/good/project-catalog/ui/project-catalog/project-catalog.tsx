import { Link, useNavigate } from "@tanstack/react-router";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { TProjectId } from "../../../../entity/project";
import { DEFAULT_USER_ID } from "../../../../entity/user";
import { AddNoteForm, useNoteCreateMutation } from "../../../../feature/note";
import { useProjectAllQuery } from "../../../../feature/project";
import { ThemeSwitcher } from "../../../../component/theme-switch";
import { NoteCard } from "../../../../entity/note";

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
                    <NoteCard note={note} noteRoute={noteRoute} />
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
