import { getProviderMap } from "auth"
import SignInForm from "app/ui/signin/SignInForm"

export default async function SignInPage(props: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const searchParams = await props.searchParams;
  
  return (
    <SignInForm
      providers={await getProviderMap()}
      error={searchParams?.error as string | undefined}
      callbackUrl={searchParams?.callbackUrl as string}
    />
  )
}