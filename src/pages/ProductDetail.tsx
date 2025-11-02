import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Loader2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { getProductByHandle } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!handle) return;
      
      try {
        const data = await getProductByHandle(handle);
        setProduct(data);
        setSelectedVariant(data?.variants?.edges[0]?.node);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const cartItem = {
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart! 🛒", {
      position: "top-center",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="font-quote text-2xl font-bold">Product not found</h2>
          <Link to="/shop">
            <Button variant="outline">Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images?.edges || [];
  const variants = product.variants?.edges || [];
  const currentImage = images[selectedImage]?.node?.url || '/placeholder.svg';

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth font-body mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/10 shadow-soft">
                <img
                  src={currentImage}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {images.length > 1 && (
                <div className="grid grid-cols-5 gap-3">
                  {images.map((img: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square rounded-lg overflow-hidden transition-smooth ${
                        selectedImage === index 
                          ? 'ring-2 ring-primary shadow-soft' 
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.node.url}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-quote text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {product.title}
                </h1>
                <p className="font-body text-3xl font-bold text-primary">
                  {selectedVariant?.price.currencyCode} ${parseFloat(selectedVariant?.price.amount || 0).toFixed(2)}
                </p>
              </div>
              
              {product.description && (
                <div className="prose prose-lg">
                  <p className="font-body text-foreground/80 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}
              
              {/* Variants */}
              {variants.length > 1 && (
                <div className="space-y-3">
                  <label className="font-body font-medium text-foreground">Select Option:</label>
                  <div className="flex flex-wrap gap-2">
                    {variants.map((variant: any) => (
                      <Button
                        key={variant.node.id}
                        onClick={() => setSelectedVariant(variant.node)}
                        variant={selectedVariant?.id === variant.node.id ? "default" : "outline"}
                        className="transition-smooth"
                      >
                        {variant.node.title}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Add to Cart */}
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 shadow-soft transition-smooth font-body font-medium text-lg h-14"
                disabled={!selectedVariant?.availableForSale}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                {selectedVariant?.availableForSale ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
