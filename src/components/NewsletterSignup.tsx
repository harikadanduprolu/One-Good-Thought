import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome! Check your inbox for your first good thought 💌");
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        
        <h2 className="font-quote text-3xl md:text-5xl font-bold text-foreground">
          Get One Good Thought Every Morning 💌
        </h2>
        
        <p className="text-lg text-muted-foreground font-body font-light">
          Start your day with a beautiful dose of positivity delivered straight to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-12 bg-white/80 backdrop-blur-sm border-primary/20 focus:border-primary shadow-soft font-body"
          />
          <Button 
            type="submit" 
            size="lg"
            className="h-12 px-8 bg-primary hover:bg-primary/90 shadow-soft transition-smooth font-body font-medium"
          >
            Subscribe
          </Button>
        </form>
        
        <p className="text-xs text-muted-foreground font-body">
          No spam, ever. Unsubscribe anytime. ✨
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
