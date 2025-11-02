import { Heart, Mail, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-quote text-4xl md:text-6xl font-bold text-foreground">
              About One Good Thought
            </h1>
            <p className="font-body text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Spreading positivity, one beautiful thought at a time ✨
            </p>
          </div>
          
          {/* Mission Section */}
          <div className="gradient-soft p-8 md:p-12 rounded-3xl shadow-float space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-8 w-8 text-primary" />
              <h2 className="font-quote text-3xl font-bold text-foreground">
                Our Mission
              </h2>
            </div>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              In a world that moves so fast, we believe everyone deserves a moment of peace and positivity. 
              One Good Thought was created to provide daily doses of inspiration, encouragement, and joy.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Whether you're starting your morning, taking a break, or winding down your day, we're here 
              to remind you of life's beauty and your own incredible strength.
            </p>
          </div>
          
          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft text-center space-y-3">
              <div className="text-4xl">💖</div>
              <h3 className="font-quote text-xl font-bold text-foreground">Authenticity</h3>
              <p className="font-body text-sm text-muted-foreground">
                Real wisdom from real hearts, curated with care and intention
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft text-center space-y-3">
              <div className="text-4xl">🌱</div>
              <h3 className="font-quote text-xl font-bold text-foreground">Growth</h3>
              <p className="font-body text-sm text-muted-foreground">
                Encouraging personal development and continuous self-improvement
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-soft text-center space-y-3">
              <div className="text-4xl">✨</div>
              <h3 className="font-quote text-xl font-bold text-foreground">Joy</h3>
              <p className="font-body text-sm text-muted-foreground">
                Finding and celebrating the light in everyday moments
              </p>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="gradient-dreamy p-8 md:p-12 rounded-3xl shadow-float text-center space-y-6">
            <Mail className="h-12 w-12 text-primary mx-auto" />
            <h2 className="font-quote text-3xl font-bold text-foreground">
              Get in Touch
            </h2>
            <p className="font-body text-lg text-foreground/80">
              Have a beautiful thought to share? Want to collaborate? We'd love to hear from you!
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft transition-smooth font-body font-medium"
              onClick={() => window.location.href = 'mailto:hello@onegoodthought.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              hello@onegoodthought.com
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
