"use client";
import {
  Box,
  Container,
  Paper,
  Typography,
  Divider,
  Alert,
} from "@mui/material";
import CredentialsForm from "./CredentialsForm";
import ProviderSignInButton from "./ProviderSignInButton";

type Provider = {
  id: string;
  name: string;
};

interface SignInFormProps {
  providers: Provider[];
  error?: string;
  callbackUrl: string;
}

export default function SignInForm({
  providers,
  error,
  callbackUrl,
}: SignInFormProps) {
  const getErrorMessage = (errorType?: string) => {
    if (!errorType) return null;

    switch (errorType) {
      case "CredentialsSignin":
        return "Invalid email or password";
      case "AccessDenied":
        return "Access denied. You do not have permission to sign in.";
      default:
        return "An error occurred during sign in";
    }
  };

  const errorMessage = getErrorMessage(error);

  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 2,
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: 600,
            color: "primary.main",
          }}
        >
          Welcome
        </Typography>

        <Typography
          variant="body1"
          sx={{ mb: 3, textAlign: "center", color: "text.secondary" }}
        >
          Log in to your account to continue
        </Typography>

        {errorMessage && (
          <Alert severity="error" sx={{ width: "100%", mb: 3 }}>
            {errorMessage}
          </Alert>
        )}

        <CredentialsForm />

        {providers.length > 0 && (
          <>
            <Divider sx={{ width: "100%", mb: 3 }}>
              <Typography variant="body2" color="text.secondary">
                or continue with
              </Typography>
            </Divider>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {providers.map((provider) => (
                <ProviderSignInButton
                  key={provider.id}
                  provider={provider}
                  callbackUrl={callbackUrl}
                />
              ))}
            </Box>
          </>
        )}

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            <Typography
              component="a"
              href="/signup"
              variant="body2"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                fontWeight: 600,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Sign up
            </Typography>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
