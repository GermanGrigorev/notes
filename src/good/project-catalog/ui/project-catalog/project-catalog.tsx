import { TNoteId } from "../../../../entity/note";
import { IProject } from "../../../../entity/project";

export function ProjectCatalog({
  getNoteUrl,
}: {
  getNoteUrl: (id: TNoteId) => string;
}) {
  const projects: IProject[] = [
    {
      id: "1",
      name: "University",
      notes: [
        { id: "1", data: { blocks: [], time: 123, version: "123" } },
        { id: "2", data: { blocks: [], time: 123, version: "123" } },
      ],
    },
    {
      id: "2",
      name: "Work",
      notes: [{ id: "3", data: { blocks: [], time: 123, version: "123" } }],
    },
    {
      id: "3",
      name: "Sport",
      notes: [],
    },
    {
      id: "4",
      name: "Dog",
      notes: [{ id: "4", data: { blocks: [], time: 123, version: "123" } }],
    },
  ];
  return (
    <div>
      {projects.map((project) => (
        <div className="mb-6" key={project.id}>
          <div>Name: {project.name}</div>
          <div>Notes:</div>
          <div className="pl-10">
            {project.notes.map((note) => (
              <div key={note.id}>
                <a href={getNoteUrl(note.id)}>id: {note.id}</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
