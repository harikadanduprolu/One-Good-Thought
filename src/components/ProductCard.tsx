import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const { node } = product;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const defaultVariant = node.variants.edges[0]?.node;
    if (!defaultVariant) {
      toast.error("Product not available");
      return;
    }

    const cartItem = {
      product,
      variantId: defaultVariant.id,
      variantTitle: defaultVariant.title,
      price: defaultVariant.price,
      quantity: 1,
      selectedOptions: defaultVariant.selectedOptions || []
    };
    
    addItem(cartItem);
    toast.success("Added to cart! 🛒", {
      position: "top-center",
    });
  };

  const imageUrl = node.images.edges[0]?.node.url || '/placeholder.svg';
  const price = parseFloat(node.priceRange.minVariantPrice.amount);
  const currencyCode = node.priceRange.minVariantPrice.currencyCode;

  return (
    <Link to={`/product/${node.handle}`}>
      <Card className="group overflow-hidden bg-white shadow-soft hover:shadow-float transition-smooth border-0 h-full">
        <div className="aspect-square overflow-hidden bg-secondary/10">
          <img
            src={imageUrl}
            alt={node.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
        </div>
        
        <div className="p-6 space-y-3">
          <h3 className="font-quote text-xl font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-smooth">
            {node.title}
          </h3>
          
          {node.description && (
            <p className="text-sm text-muted-foreground font-body line-clamp-2">
              {node.description}
            </p>
          )}
          
          <div className="flex items-center justify-between pt-2">
            <span className="font-body text-2xl font-bold text-primary">
              {currencyCode} ${price.toFixed(2)}
            </span>
            
            <Button
              onClick={handleAddToCart}
              size="sm"
              className="bg-primary hover:bg-primary/90 shadow-soft transition-smooth font-body font-medium"
            >
              <ShoppingBag className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
