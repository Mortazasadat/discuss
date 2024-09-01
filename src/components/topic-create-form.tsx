"use client";

import React, { useState } from "react";

import {
  Input,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Textarea,
} from "@nextui-org/react";
import { useFormState, useFormStatus } from "react-dom";
import createTopic from "@/actions/create-topic";
import SubmitButton from "./SubmitButton";

function TopicCreateForm() {
  const [formState, formAction] = useFormState(createTopic, {
    errors: {},
  });

  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button color="primary">Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={formAction}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              label="name"
              name="name"
              placeholder="Name"
              labelPlacement="outside"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(", ")}
            />
            <Textarea
              label="Description"
              name="description"
              placeholder="Describe your topic"
              labelPlacement="outside"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}
            />
            {formState.errors._form && (
              <p className="text-red-500">
                {formState.errors._form?.join(", ")}
              </p>
            )}
            <SubmitButton>Create</SubmitButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

export default TopicCreateForm;
