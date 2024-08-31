import TopicCreateForm from "@/components/topic-create-form";

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl font-semibold m-2">Top Posts</h1>
      </div>
      <div className="">
        <TopicCreateForm />
      </div>
    </div>
  );
}
