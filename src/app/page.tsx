import { Button } from "@nextui-org/react";
import * as action from "@/actions";
import { auth } from "@/auth";
import Image from "next/image";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();

  let content;
  if (session?.user) {
    content = (
      <div>
        {JSON.stringify(session.user)}
        <img src={`${session.user.image}`} className=" h-20 w-20" alt="" />
      </div>
    );
  } else {
    content = <div>sign out</div>;
  }
  return (
    <div className="h-screen w-full">
      <form action={action.singIn}>
        <Button type="submit">sign in</Button>
      </form>
      <form className="my-5" action={action.singOut}>
        <Button type="submit">sign out</Button>
      </form>
      {content}
      <Profile />
    </div>
  );
}
