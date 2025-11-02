import { useState } from "react";
import { Shuffle } from "lucide-react";
import Navigation from "@/components/Navigation";
import QuoteCard from "@/components/QuoteCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Button } from "@/components/ui/button";
import { quotes } from "@/data/quotes";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuoteIndex(randomIndex);
  };
  
  const currentQuote = quotes[currentQuoteIndex];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 px-4 relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
        
        <div className="relative max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="font-quote text-5xl md:text-7xl font-bold text-foreground">
              Today's Good Thought 💫
            </h1>
            <p className="font-body text-lg md:text-xl text-foreground/70 font-light">
              One beautiful thought can change your entire day
            </p>
          </div>
          
          <QuoteCard
            quote={currentQuote.text}
            author={currentQuote.author}
            category={currentQuote.category}
            gradient={currentQuote.gradient}
          />
          
          <div className="flex justify-center pt-4">
            <Button
              onClick={getRandomQuote}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-float transition-bounce font-body font-medium"
            >
              <Shuffle className="mr-2 h-5 w-5" />
              See Another Thought
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <div className="gradient-soft">
        <NewsletterSignup />
      </div>
      
      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="font-quote text-2xl font-semibold text-foreground">
            One Good Thought
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Spreading positivity, one thought at a time ✨
          </p>
          <p className="font-body text-xs text-muted-foreground">
            © 2024 One Good Thought. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
