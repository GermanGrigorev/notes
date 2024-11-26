import { Avatar, Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { INote } from "../model/note.model";
import { Link } from "@tanstack/react-router";

export function NoteCard({
  note,
  noteRoute,
  onDelete,
}: {
  note: INote;
  noteRoute: string;
  onDelete: () => void;
}) {
  return (
    <Card>
      <CardHeader className="justify-between gap-7">
        <div className="w-full">
          <Link className="block" to={noteRoute} params={{ noteId: note.id }}>
            {note.title || "*Nameless*"}
          </Link>
        </div>
        <Button color="danger" radius="full" size="sm" onPress={onDelete}>
          Delete
        </Button>
      </CardHeader>
    </Card>
  );
}
