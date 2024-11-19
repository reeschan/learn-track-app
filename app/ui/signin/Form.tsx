"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import {
  TextField,
  Button,
  Box,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import { Google } from "@mui/icons-material";

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      setIsLoading(false);
    } else {
    }
  }

  return (
    <Box
      display="flex"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      bgcolor="grey.100"
      p={2}
    >
      <Box
        width="100%"
        maxWidth={400}
        bgcolor="white"
        p={4}
        borderRadius={2}
        boxShadow={3}
      >
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            Sign In
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Enter your credentials to access your account
          </Typography>
        </Box>
        <form onSubmit={onSubmit}>
          <Box mb={2}>
            <TextField
              id="email"
              name="email"
              label="Email"
              type="email"
              fullWidth
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              required
            />
          </Box>
          {error && (
            <Typography variant="body2" color="error" mb={2}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isLoading}
            sx={{ mb: 2 }}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
        <Divider sx={{ my: 2 }}>Or continue with</Divider>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          startIcon={<Google />}
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          Google
        </Button>
      </Box>
    </Box>
  );
}
