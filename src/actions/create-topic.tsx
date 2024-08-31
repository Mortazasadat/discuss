"use server";

import { db } from "@/db";
import { z } from "zod";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z]+$/, {
      message: " Must be lowercase letters without spaces",
    }),
  description: z.string().min(10),
});

interface createTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
  };
}

async function createTopic(
  formState: createTopicFormState,
  formData: FormData
): Promise<createTopicFormState> {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    errors: {},
  };
}

export default createTopic;
