"use server";

import * as auth from "@/auth";

export async function singOut() {
  return auth.signOut();
}
