import { ProductGrid } from "@/components/home/ProductGrid";
import { CTASection } from "@/components/home/CTASection";

export default function ProductsPage() {
  return (
    <div className="flex flex-col flex-1 w-full pt-10">
      <ProductGrid isCatalogPage={true} />
      <CTASection />
    </div>
  );
}
