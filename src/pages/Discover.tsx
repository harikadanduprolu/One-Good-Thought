import { useState } from "react";
import { Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import QuoteCard from "@/components/QuoteCard";
import CategoryButton from "@/components/CategoryButton";
import { Input } from "@/components/ui/input";
import { quotes, categories } from "@/data/quotes";

const Discover = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredQuotes = quotes.filter(quote => {
    const matchesCategory = selectedCategory === "all" || quote.category === selectedCategory;
    const matchesSearch = quote.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         quote.author?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="font-quote text-4xl md:text-6xl font-bold text-foreground">
              Discover Good Thoughts ✨
            </h1>
            <p className="font-body text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Explore our collection of uplifting quotes organized by mood and category
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by mood or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-white/80 backdrop-blur-sm border-primary/20 focus:border-primary shadow-soft font-body text-base"
              />
            </div>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <CategoryButton
                key={category.value}
                label={category.label}
                icon={category.icon}
                isActive={selectedCategory === category.value}
                onClick={() => setSelectedCategory(category.value)}
              />
            ))}
          </div>
          
          {/* Quote Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuotes.map((quote, index) => (
              <div 
                key={quote.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <QuoteCard
                  quote={quote.text}
                  author={quote.author}
                  category={quote.category}
                  gradient={quote.gradient}
                />
              </div>
            ))}
          </div>
          
          {filteredQuotes.length === 0 && (
            <div className="text-center py-20 space-y-4">
              <p className="font-quote text-2xl text-muted-foreground">
                No quotes found for your search
              </p>
              <p className="font-body text-muted-foreground">
                Try a different category or search term ✨
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Discover;
