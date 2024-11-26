import { Card, CardBody } from "@nextui-org/react";
import { INote } from "../model/note.model";
import { Link } from "@tanstack/react-router";

export function NoteCard({
  note,
  noteRoute,
}: {
  note: INote;
  noteRoute: string;
}) {
  return (
    <Card>
      <CardBody>
        <Link to={noteRoute} params={{ noteId: note.id }}>
          {note.title || "*Nameless*"}
        </Link>
      </CardBody>
    </Card>
  );
}
