import { ArrowRight, BookOpen, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-background.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/10 animate-float" />
        <div className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-secondary/20 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-secondary/15 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to
            <span className="block text-gradient text-6xl md:text-8xl">
              Crescent Readers Club
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            A vibrant community of book enthusiasts, fostering intellectual growth through 
            shared reading experiences, engaging discussions, and literary exploration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              asChild 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-bounce text-lg px-8 py-6 glow-effect"
            >
              <Link to="/about">
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white/50 text-black hover:bg-white/10 transition-bounce text-lg px-8 py-6"
            >
              <Link to="/events">
                Join Our Events
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center card-hover">
            <BookOpen className="h-8 w-8 text-secondary mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
            <p className="text-white/80">Books Discussed</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center card-hover">
            <Users className="h-8 w-8 text-secondary mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-2">150+</h3>
            <p className="text-white/80">Active Members</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center card-hover">
            <Calendar className="h-8 w-8 text-secondary mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
            <p className="text-white/80">Events Hosted</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator 
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-glow-pulse" />
        </div>
      </div>*/}
    </section>
  );
}