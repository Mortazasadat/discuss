import { db } from "@/db";
import paths from "@/helper/path";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

async function ListTopic() {
  const topics = await db.topic.findMany();

  const renderedTopic = topics.map((topic) => (
    <Link href={paths.topicShowPath(topic.slug)} key={topic.id}>
      <Chip className="mx-0.5 my-0.5 " color="warning">
        {topic.slug}
      </Chip>
    </Link>
  ));

  return (
    <div className="flex flex-col mt-10 shadow-lg rounded-lg p-4">
      <h1 className="text-xl font-semibold my-4">All Topics</h1>
      <div className="flex flex-wrap gap-2">{renderedTopic}</div>
    </div>
  );
}

export default ListTopic;
