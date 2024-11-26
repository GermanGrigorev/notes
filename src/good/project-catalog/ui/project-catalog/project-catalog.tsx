import { Link, useNavigate } from "@tanstack/react-router";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { TProjectId } from "../../../../entity/project";
import { DEFAULT_USER_ID } from "../../../../entity/user";
import {
  AddNoteForm,
  useNoteCreateMutation,
  useNoteDeleteMutation,
} from "../../../../feature/note";
import {
  ProjectCreateForm,
  useProjectAllQuery,
} from "../../../../feature/project";
import { NoteCard, TNoteId } from "../../../../entity/note";
import { PROJECT_QUERY_KEY } from "../../../../feature/project/state/project.query";
import { Button } from "@nextui-org/react";
import { useProjectDeleteMutation } from "../../../../feature/project/state/project-delete.mutation";
import { useMemo } from "react";

export function ProjectCatalog({ noteRoute }: { noteRoute: string }) {
  const { data } = useProjectAllQuery();
  const { mutateAsync: createNoteAsync } = useNoteCreateMutation();
  const { mutateAsync: deleteNoteAsync } = useNoteDeleteMutation({
    projectQueryKey: PROJECT_QUERY_KEY,
  });
  const { mutateAsync: deleteProjectAsync } = useProjectDeleteMutation();
  const navigate = useNavigate();

  const handleAddNote = (id: TProjectId) => async () => {
    const noteId = await createNoteAsync({
      data: null,
      owner_id: DEFAULT_USER_ID,
      project_id: id,
      title: "",
    });
    navigate({ to: noteRoute, params: { noteId } });
  };

  const handleDeleteNote = (id: TNoteId) => async () => {
    await deleteNoteAsync(id);
  };
  const handleDeleteProject = (id: TProjectId) => async () => {
    await deleteProjectAsync(id);
  };

  const dataReversed = useMemo(() => {
    if (!data) return [];
    return data.reverse().map((project) => ({
      ...project,
      pages: project.pages?.reverse(),
    }));
  }, [data]);

  return (
    <div>
      <ProjectCreateForm />
      {!dataReversed.length ? null : (
        <Accordion defaultExpandedKeys={[dataReversed[0]?.id]}>
          {dataReversed.map((project) => (
            <AccordionItem className="" key={project?.id} title={project.title}>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  {project?.pages?.map((note) => (
                    <div key={note?.id}>
                      <NoteCard
                        onDelete={handleDeleteNote(note.id)}
                        note={note}
                        noteRoute={noteRoute}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 items-center justify-between">
                  <AddNoteForm onSubmit={handleAddNote(project.id)} />
                  <Button
                    onClick={handleDeleteProject(project.id)}
                    size="sm"
                    className=""
                    color="danger"
                  >
                    Delete {project.title} project
                  </Button>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
