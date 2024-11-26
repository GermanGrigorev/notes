import { FormEvent } from "react";
import { Button } from "@nextui-org/button";

export function AddNoteForm({ onSubmit }: { onSubmit: () => void }) {
  return (
    <Button color="primary" size="sm" onClick={onSubmit}>
      Add Note
    </Button>
  );
}
