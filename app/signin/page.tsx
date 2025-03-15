import { getProviderMap } from "auth";
import SignInForm from "components/ui/signin/SignInForm";
import { NextSegmentPage } from "next";

const SignInPage: NextSegmentPage<{
  params: {
    callbackUrl: string;
    error: string;
  };
}> = async ({ params }) => {
  const { callbackUrl, error } = await params;
  return (
    <SignInForm
      providers={await getProviderMap()}
      error={error}
      callbackUrl={callbackUrl}
    />
  );
};

export default SignInPage;
