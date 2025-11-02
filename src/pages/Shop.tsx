import { useEffect, useState } from "react";
import { Package } from "lucide-react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { getProducts, ShopifyProduct } from "@/lib/shopify";
import { Skeleton } from "@/components/ui/skeleton";

const Shop = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(20);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="font-quote text-4xl md:text-6xl font-bold text-foreground">
              Quote Merchandise Shop 🛍️
            </h1>
            <p className="font-body text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Carry your favorite quotes with you. T-shirts, posters, mugs, and more!
            </p>
          </div>
          
          {/* Products Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-square w-full rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20 space-y-6">
              <div className="inline-block p-6 rounded-full bg-secondary/20">
                <Package className="h-16 w-16 text-muted-foreground" />
              </div>
              <div className="space-y-3">
                <h2 className="font-quote text-3xl font-bold text-foreground">
                  No Products Yet
                </h2>
                <p className="font-body text-lg text-muted-foreground max-w-md mx-auto">
                  Our shop is being prepared! Tell us what quote merchandise you'd like to see.
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Example: "Create a t-shirt with the quote 'Be yourself' for $29.99"
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div 
                  key={product.node.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Shop;
