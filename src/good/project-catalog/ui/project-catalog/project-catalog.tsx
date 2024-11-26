import { TNoteId } from "../../../../entity/note";
import { useProjectAllQuery } from "../../../../feature/project";

export function ProjectCatalog({
  getNoteUrl,
}: {
  getNoteUrl: (id: TNoteId) => string;
}) {
  const { data } = useProjectAllQuery();
  return (
    <div>
      {data?.map((project) => (
        <div className="mb-6" key={project.id}>
          <div>Name: {project.title}</div>
          <div>Notes:</div>
          <div className="pl-10">
            {/* {project?.pages?.map((note) => (
              <div key={note.id}>
                <a href={getNoteUrl(note.id)}>{note.title}</a>
              </div>
            ))} */}
          </div>
        </div>
      ))}
    </div>
  );
}
