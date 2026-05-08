import { Package, Image as ImageIcon } from "lucide-react";
import dbConnect from "@/lib/db";
import { Product } from "@/models/Product";
// Assume a Carousel model or just mocked numbers for now if we haven't created it
// import { CarouselImage } from "@/models/CarouselImage";

export default async function AdminDashboard() {
  await dbConnect();
  
  const productCount = await Product.countDocuments();
  // const carouselCount = await CarouselImage.countDocuments();
  const carouselCount = 0; // mocked for now

  return (
    <div>
      <h1 className="text-3xl font-heading font-bold text-foreground mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Products Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-miflex-blue/10 flex items-center justify-center text-miflex-blue">
            <Package className="w-7 h-7" />
          </div>
          <div>
            <p className="text-gray-500 font-medium">Total de Produtos</p>
            <p className="text-3xl font-bold text-gray-900">{productCount}</p>
          </div>
        </div>

        {/* Carousel Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-miflex-orange/10 flex items-center justify-center text-miflex-orange">
            <ImageIcon className="w-7 h-7" />
          </div>
          <div>
            <p className="text-gray-500 font-medium">Imagens no Carrossel</p>
            <p className="text-3xl font-bold text-gray-900">{carouselCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
