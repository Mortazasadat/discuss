import PostCreateForm from "@/components/posts/post-create-form";
import React from "react";

async function TopicShowPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <div className="grid grid-cols-4 p-4 gap-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold "> {slug} </h1>
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}

export default TopicShowPage;
