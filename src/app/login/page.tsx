"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Lock, Mail, ArrowRight, ShieldCheck, AlertCircle, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid admin email or security key.");
        setLoading(false);
      } else {
        router.push("/admin");
        router.refresh();
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-charcoal text-ivory flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-md bg-charcoal-light/80 border border-white/10 p-8 sm:p-10 rounded-2xl shadow-2xl backdrop-blur-md relative z-10">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center font-display font-bold text-2xl text-white tracking-tighter mb-4 shadow-lg shadow-accent/20">
            NG
          </div>
          <span className="text-[10px] font-mono text-accent uppercase tracking-widest">NOOCKIE GRAPHICS</span>
          <h1 className="font-display font-bold text-2xl text-ivory mt-1">Studio Admin Portal</h1>
          <p className="text-xs text-white/50 mt-1 font-sans">Enter authorized credentials to access management console.</p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-white/70 mb-2">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@noockiegraphics.co.ke"
                className="w-full bg-charcoal border border-white/15 rounded-lg pl-10 pr-4 py-3 text-ivory text-xs placeholder:text-white/30 focus:outline-none focus:border-accent font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-white/70 mb-2">
              Security Key
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-charcoal border border-white/15 rounded-lg pl-10 pr-4 py-3 text-ivory text-xs placeholder:text-white/30 focus:outline-none focus:border-accent font-mono"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-accent hover:bg-accent-hover text-white text-xs font-mono uppercase tracking-wider font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Authenticating...</span>
              </>
            ) : (
              <>
                <span>Login</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Footer Security Badge */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-[10px] font-mono text-white/40">
          <ShieldCheck className="w-3.5 h-3.5 text-accent" />
          <span>Encrypted Session • Nairobi Server</span>
        </div>

      </div>
    </div>
  );
}