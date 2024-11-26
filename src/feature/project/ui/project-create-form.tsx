import { Button } from "@nextui-org/button";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNoteQuery, useNoteUpdateMutation } from "../../note";
import { useProjectCreateMutation } from "../state/project-create.mutation";

type Inputs = {
  title: string;
};

export function ProjectCreateForm({}: {}) {
  const { mutateAsync } = useProjectCreateMutation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = async (formData) => {
    await mutateAsync(formData.title);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex gap-10 items-center">
        <label className="">
          <input
            required
            className="bg-background focus-visible:outline-none p-2 text-xl w-full"
            placeholder="Title"
            {...register("title")}
          />
        </label>
        <Button color="primary" type="submit">
          New project
        </Button>
      </div>
    </form>
  );
}
