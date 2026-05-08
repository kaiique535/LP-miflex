import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/admin/Sidebar";
import { NextAuthProvider } from "@/components/providers/SessionProvider";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const metadata = {
  title: "Admin - Mi-Flex",
  description: "Painel administrativo Mi-Flex",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  // Proteção da rota
  if (!session) {
    redirect("/admin/login");
  }

  return (
    <NextAuthProvider>
      <div className="min-h-screen bg-gray-50 flex font-sans">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto p-8">
            {children}
          </main>
        </div>
      </div>
    </NextAuthProvider>
  );
}
