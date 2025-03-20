import { checkAuth } from "server/lib/auth";

export default async function Home() {
  await checkAuth();
  return <></>;
}
