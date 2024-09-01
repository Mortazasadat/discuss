"use server";
import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/helper/path";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

interface formStateProps {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
});

async function createPost(
  slug: string,
  formState: formStateProps,
  formData: FormData
): Promise<formStateProps> {
  const result = schema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be logged in to create a post"],
      },
    };
  }

  const topic = await db.topic.findFirst({
    where: {
      slug,
    },
  });

  if (!topic) {
    return {
      errors: {
        _form: ["Topic not found"],
      },
    };
  }

  let post: Post;
  try {
    post = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id,
        topicId: topic.id,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: {
          title: [error.message],
        },
      };
    } else {
      return {
        errors: {
          title: ["Fialed, Something went wrong!"],
        },
      };
    }
  }

  revalidatePath(paths.topicShowPath(slug));

  redirect(paths.postShowPath(slug, post.id));
}

export default createPost;
