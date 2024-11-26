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
      owner_id: "2",
      title: "University",
      pages: [
        {
          id: "1",
          owner_id: "2",
          project_id: "2",
          title: "sweets",
          data: { blocks: [], time: 123, version: "123" },
        },
        {
          id: "2",
          owner_id: "2",
          project_id: "2",
          title: "hleb",
          data: { blocks: [], time: 123, version: "123" },
        },
      ],
    },
  ];
  return (
    <div>
      {projects.map((project) => (
        <div className="mb-6" key={project.id}>
          <div>Name: {project.title}</div>
          <div>Notes:</div>
          <div className="pl-10">
            {project.pages.map((note) => (
              <div key={note.id}>
                <a href={getNoteUrl(note.id)}>{note.title}</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
