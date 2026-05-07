"use client";

import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface AdminTableProps {
  data: any[];
}

export default function AdminTable({ data }: AdminTableProps) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
      try {
        const res = await fetch(`/api/products/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          router.refresh();
        } else {
          alert("Erro ao excluir o produto.");
        }
      } catch (error) {
        alert("Erro de conexão ao excluir.");
      }
    }
  };

  if (!data || data.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        Nenhum produto cadastrado ainda.
      </div>
    );
  }

  const columns = Object.keys(data[0]).filter((key) => key !== "id");

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {columns.map((col) => (
              <th key={col} className="px-6 py-4 font-semibold text-gray-600 capitalize">
                {col}
              </th>
            ))}
            <th className="px-6 py-4 font-semibold text-gray-600 text-right">Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50/50">
              {columns.map((col) => (
                <td key={col} className="px-6 py-4 text-gray-700">
                  {row[col]}
                </td>
              ))}
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2">
                  <Link
                    href={`/admin/produtos/form?id=${row.id}`}
                    className="p-2 text-miflex-blue hover:bg-miflex-blue/10 rounded-lg transition-colors"
                  >
                    <Edit className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() => handleDelete(row.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
