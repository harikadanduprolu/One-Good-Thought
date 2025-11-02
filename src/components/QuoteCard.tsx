import { Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface QuoteCardProps {
  quote: string;
  author?: string;
  category?: string;
  gradient?: string;
}

const QuoteCard = ({ quote, author, category, gradient = "gradient-soft" }: QuoteCardProps) => {
  const handleShare = () => {
    const text = `"${quote}"${author ? ` - ${author}` : ''}`;
    if (navigator.share) {
      navigator.share({
        title: 'One Good Thought',
        text: text,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(text);
      toast.success("Quote copied to clipboard!");
    }
  };

  const handleSave = () => {
    toast.success("Quote saved to your collection! ❤️");
  };

  return (
    <Card className={`${gradient} p-8 md:p-12 shadow-float border-0 transition-smooth hover:scale-[1.02] animate-fade-in`}>
      <div className="space-y-6">
        {category && (
          <span className="inline-block px-4 py-1.5 bg-white/60 backdrop-blur-sm rounded-full text-xs font-medium text-foreground/80">
            {category}
          </span>
        )}
        
        <blockquote className="font-quote text-2xl md:text-4xl font-semibold text-foreground leading-relaxed">
          "{quote}"
        </blockquote>
        
        {author && (
          <p className="font-body text-base md:text-lg text-foreground/70 font-light">
            — {author}
          </p>
        )}
        
        <div className="flex gap-3 pt-4">
          <Button
            onClick={handleShare}
            variant="secondary"
            size="lg"
            className="flex-1 bg-white/80 hover:bg-white backdrop-blur-sm shadow-soft transition-smooth"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button
            onClick={handleSave}
            variant="secondary"
            size="lg"
            className="bg-white/80 hover:bg-white backdrop-blur-sm shadow-soft transition-smooth"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default QuoteCard;
