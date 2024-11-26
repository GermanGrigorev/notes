import { FormEvent } from "react";
import { Button } from "@nextui-org/button";

export function AddNoteForm({ onSubmit }: { onSubmit: () => void }) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Button color="primary" type="submit">
        Add Note
      </Button>
    </form>
  );
}
