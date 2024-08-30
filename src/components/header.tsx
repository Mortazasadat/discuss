import { singIn, singOut } from "@/actions";
import { auth } from "@/auth";
import {
  Avatar,
  Button,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

async function Header() {
  const session = await auth();

  let authContent: React.ReactNode;
  if (session?.user) {
    authContent = (
      <NavbarItem>
        <Popover placement="bottom">
          <PopoverTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={session.user.name || "User"}
              size="sm"
              src={session.user.image || ""}
            />
          </PopoverTrigger>
          <PopoverContent className="bg-white">
            <div className="px-1 py-2">
              <div className="flex flex-col items-center gap-2 p-2">
                <p className="text-lg font-semibold text-gray-800">
                  {session.user.name}
                </p>
                <p className="text-sm text-gray-500">
                  @{session.user.name?.toLowerCase().replace(/\s+/g, "")}
                </p>
              </div>
              <form action={singOut}>
                <Button
                  type="submit"
                  color="danger"
                  variant="light"
                  className="w-full "
                >
                  Sign Out
                </Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      </NavbarItem>
    );
  } else {
    authContent = (
      <NavbarItem className="flex gap-2">
        <form action={singIn}>
          <Button color="secondary" variant="bordered" type="submit">
            Sign In
          </Button>
        </form>
        <form action={singIn}>
          <Button color="primary" variant="flat" type="submit">
            Sign Up
          </Button>
        </form>
      </NavbarItem>
    );
  }

  return (
    <Navbar className="shadow mb-6 bg-white">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input
            type="text"
            variant="bordered"
            placeholder="Search..."
            className="max-w-xl focus:ring-slate-950 focus:border-slate-950 focus-visible:ring focus-visible:ring-slate-900 focus:outline-offset-2 focus:outline-1 focus:outline-slate-900"
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">{authContent}</NavbarContent>
    </Navbar>
  );
}

export default Header;
