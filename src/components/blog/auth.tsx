import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Feather, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBlog } from "@/lib/blog/context";
export function AuthForm({ signup = false }: { signup?: boolean }) {
  const { login } = useBlog();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
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
      <form
        className="auth-form"
        onSubmit={(e) => {
          e.preventDefault();
          login(signup ? name : undefined);
          navigate({ to: "/dashboard" });
        }}
      >
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
          <input type="email" autoComplete="email" placeholder="you@example.com" required />
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
        <div className="demo-note">
          <strong>Frontend preview</strong>
          <p>
            This form opens a demo session. No account is created, and your email and password are
            not stored or sent.
          </p>
        </div>
        <Button type="submit" size="lg" className="auth-submit">
          {signup ? "Try demo sign up" : "Enter demo session"}
          <ArrowRight />
        </Button>
        <p className="auth-switch">
          {signup ? "Already have an account?" : "New to BlogSpace?"}{" "}
          <Link to={signup ? "/login" : "/signup"}>{signup ? "Log in" : "Sign up"}</Link>
        </p>
      </form>
    </main>
  );
}
