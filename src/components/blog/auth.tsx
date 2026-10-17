import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Feather, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBlog } from "@/lib/blog/context";

const isSupabaseConfigured =
  !!import.meta.env["VITE_SUPABASE_URL"] && !!import.meta.env["VITE_SUPABASE_ANON_KEY"];

export function AuthForm({ signup = false }: { signup?: boolean }) {
  const { login, signup: signupFn } = useBlog();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      if (signup) {
        await signupFn(email, password, name);
      } else {
        await login(email, password);
      }
      navigate({ to: "/dashboard" });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-heading">
        <span className="auth-symbol">
          <Feather size={26} />
        </span>
        <div className="eyebrow">YOUR NEXT CHAPTER</div>
        <h1>{signup ? "Make room for your story." : "Welcome back."}</h1>
        <p>{signup ? "Join a community of curious minds." : "Good stories are waiting for you."}</p>
      </div>
      <form className="auth-form" onSubmit={handleSubmit}>
        {signup && (
          <label>
            Your name
            <input
              autoComplete="name"
              placeholder="Emma Wilson"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={60}
            />
          </label>
        )}
        <label>
          Email address
          <input
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <div className="password-field">
            <input
              type={visible ? "text" : "password"}
              autoComplete={signup ? "new-password" : "current-password"}
              placeholder={signup ? "At least 8 characters" : "Enter your password"}
              minLength={8}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="ghost"
              size="icon"
              type="button"
              aria-label={visible ? "Hide password" : "Show password"}
              onClick={() => setVisible(!visible)}
            >
              {visible ? <EyeOff /> : <Eye />}
            </Button>
          </div>
        </label>

        {!isSupabaseConfigured && (
          <div className="demo-note">
            <strong>Frontend preview</strong>
            <p>
              Supabase is not connected. This opens a demo session — no account is created and no
              data is stored.
            </p>
          </div>
        )}

        {error && (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        )}

        <Button type="submit" size="lg" className="auth-submit" disabled={submitting}>
          {submitting
            ? "Please wait…"
            : isSupabaseConfigured
              ? signup
                ? "Create account"
                : "Log in"
              : signup
                ? "Try demo sign up"
                : "Enter demo session"}
          {!submitting && <ArrowRight />}
        </Button>
        <p className="auth-switch">
          {signup ? "Already have an account?" : "New to BlogSpace?"}{" "}
          <Link to={signup ? "/login" : "/signup"}>{signup ? "Log in" : "Sign up"}</Link>
        </p>
      </form>
    </main>
  );
}
