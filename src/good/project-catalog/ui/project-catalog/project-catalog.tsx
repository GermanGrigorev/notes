import { IProject } from "../../../../entity/project";

export function ProjectCatalog() {
  const projects: IProject[] = [
    {
      id: "id",
      name: "fist",
      notes: [
        { id: "2", data: { blocks: [], time: 123, version: "123" } },
        { id: "3423", data: { blocks: [], time: 123, version: "123" } },
      ],
    },
    { id: "i2d", name: "fist2", notes: [] },
  ];
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <div>{project.name}</div>
          <div>
            {project.notes.map((note) => (
              <div key={note.id}>
                <a href={`/notes/${note.id}`}>id: {note.id}</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
