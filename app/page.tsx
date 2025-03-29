import { checkAuth } from "server/libs/auth";

export default async function Home() {
  await checkAuth();
  return <></>;
}
