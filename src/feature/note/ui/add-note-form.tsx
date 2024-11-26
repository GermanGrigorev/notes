import { FormEvent } from "react";

export function AddNoteForm({ onSubmit }: { onSubmit: () => void }) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Add Note</button>
    </form>
  );
}
