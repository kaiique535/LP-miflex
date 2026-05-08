"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, Image as ImageIcon, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Produtos", href: "/admin/produtos", icon: Package },
  { name: "Carrossel", href: "/admin/carrossel", icon: ImageIcon },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="h-20 flex items-center px-6 border-b border-gray-200">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-miflex-blue rounded-xl flex items-center justify-center transform -rotate-6">
            <span className="text-white font-heading font-bold">M</span>
          </div>
          <span className="font-heading font-bold text-xl text-miflex-blue">
            Mi-Flex Admin
          </span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/admin");
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-semibold ${
                isActive
                  ? "bg-miflex-blue/10 text-miflex-blue"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "text-miflex-blue" : "text-gray-400"}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-xl text-red-600 hover:bg-red-50 transition-colors font-semibold"
        >
          <LogOut className="w-5 h-5" />
          Sair
        </button>
      </div>
    </div>
  );
}
