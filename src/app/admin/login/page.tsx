"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Credenciais inválidas");
      setLoading(false);
    } else {
      router.push("/admin");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg border border-gray-100">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-miflex-blue rounded-2xl flex items-center justify-center transform -rotate-6 shadow-md mb-4">
            <span className="text-white font-heading font-bold text-3xl">M</span>
          </div>
          <h1 className="font-heading font-bold text-2xl text-foreground">
            Mi-Flex Admin
          </h1>
          <p className="text-gray-500 mt-2">Faça login para gerenciar a loja</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="p-3 bg-red-50 text-red-600 rounded-xl text-sm font-semibold text-center">
              {error}
            </div>
          )}
          
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-miflex-blue focus:ring-2 focus:ring-miflex-blue/20 outline-none transition-all"
              placeholder="admin@miflex.com"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-miflex-blue focus:ring-2 focus:ring-miflex-blue/20 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-miflex-orange hover:bg-miflex-orange-light text-white py-3 rounded-xl font-bold shadow-md shadow-miflex-orange/30 transition-all active:scale-95 disabled:opacity-50 mt-4"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
