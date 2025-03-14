import {
  GitHub as GitHubIcon,
  Google as GoogleIcon,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { handleProviderSignIn } from "server/actions";

type ProviderProps = {
  provider: {
    id: string;
    name: string;
  };
  callbackUrl: string;
};

export default function ProviderSignInButton({
  provider,
  callbackUrl,
}: ProviderProps) {
  const getProviderIcon = (providerId: string) => {
    switch (providerId.toLowerCase()) {
      case "google":
        return <GoogleIcon />;
      case "github":
        return <GitHubIcon />;
      default:
        return null;
    }
  };

  return (
    <form
      action={async () => await handleProviderSignIn(provider.id, callbackUrl)}
    >
      <Button
        type="submit"
        fullWidth
        variant="outlined"
        startIcon={getProviderIcon(provider.id)}
        sx={{
          py: 1.5,
          textTransform: "none",
          justifyContent: "flex-start",
          pl: 3,
        }}
      >
        Continue with {provider.name}
      </Button>
    </form>
  );
}
