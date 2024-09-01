"use client";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import React from "react";
import SubmitButton from "../SubmitButton";
import { useFormState } from "react-dom";
import createPost from "@/actions/create-post";

interface postCreateProps {
  slug: string;
}

function PostCreateForm({ slug }: postCreateProps) {
  const [formState, action] = useFormState(createPost.bind(null, slug), {
    errors: {},
  });
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button color="primary">Create Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="p-5 w-80 space-y-4 flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-6">
              Create a post
            </h3>
            <Input
              label="Title"
              name="title"
              placeholder="Title"
              labelPlacement="outside"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              label="Content"
              name="content"
              placeholder="Content"
              labelPlacement="outside"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            {formState.errors._form && (
              <div className="text-red-500 my-2 font-medium">
                {" "}
                {formState.errors._form.join(", ")}{" "}
              </div>
            )}
            <SubmitButton>Create post</SubmitButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

export default PostCreateForm;
