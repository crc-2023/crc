import { BookOpen, Target, Eye, Users, Award, Calendar } from 'lucide-react';
import ImmersiveBackground from '@/components/ui/immersive-background';

const timeline = [
  {
    year: '2020',
    title: 'Club Foundation',
    description: 'Started as a small group of passionate readers meeting weekly to discuss classic literature.',
  },
  {
    year: '2021',
    title: 'Community Growth',
    description: 'Expanded to include diverse genres and welcomed members from different backgrounds.',
  },
  {
    year: '2022',
    title: 'Digital Presence',
    description: 'Launched our podcast and online discussion forums to reach a wider audience.',
  },
  {
    year: '2023',
    title: 'CresPulse Launch',
    description: 'Introduced our newsletter and blog platform for sharing literary insights and reviews.',
  },
  {
    year: '2024',
    title: 'Community Impact',
    description: 'Became a recognized literary community with over 150 active members and partnerships with local libraries.',
  },
];

const objectives = [
  {
    icon: BookOpen,
    title: 'Literary Exploration',
    description: 'Discover and discuss diverse genres, authors, and literary movements from around the world.',
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'Foster meaningful connections between readers and create lasting friendships through shared literary experiences.',
  },
  {
    icon: Award,
    title: 'Intellectual Growth',
    description: 'Enhance critical thinking, analytical skills, and cultural awareness through thoughtful discussions.',
  },
  {
    icon: Calendar,
    title: 'Regular Engagement',
    description: 'Maintain consistent reading schedules and host engaging events that enrich our literary journey.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with immersive background */}
      <ImmersiveBackground height="min-h-[60vh]" overlay="dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-up">
            About <span className="text-secondary">Crescent Readers Club</span>
          </h1>
          <p
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white/90 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            A passionate community dedicated to the art of reading, discussion, and literary appreciation. 
            We believe that books have the power to transform minds and build bridges between people.
          </p>
        </div>
      </ImmersiveBackground>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <div className="animate-fade-up">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-secondary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To create an inclusive and vibrant community where readers of all backgrounds can come together 
                to explore literature, share perspectives, and foster a deeper appreciation for the written word. 
                We strive to make reading a social and enriching experience that transcends traditional boundaries.
              </p>
              <div className="bg-card p-6 rounded-xl shadow-soft border border-border/50">
                <p className="text-foreground font-medium italic">
                  "Reading is not just about consuming words; it's about connecting with ideas, 
                  emotions, and experiences that shape our understanding of the world."
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-secondary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To become a leading literary community that inspires lifelong learning, critical thinking, 
                and cultural awareness. We envision a future where our club serves as a beacon for literary 
                excellence and community engagement, influencing positive change through the power of books.
              </p>
              <div className="bg-card p-6 rounded-xl shadow-soft border border-border/50">
                <p className="text-foreground font-medium italic">
                  "We dream of a world where every book discussion sparks new ideas, 
                  every member finds their voice, and every story shared enriches our collective wisdom."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Objectives</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The core principles that guide our activities and shape our community interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div 
                key={objective.title} 
                className="bg-card p-8 rounded-2xl shadow-soft border border-border/50 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-secondary/10">
                    <objective.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground ml-4">
                    {objective.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to a thriving literary community - explore the milestones that shaped us.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary/30 transform md:-translate-x-0.5" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={item.year} 
                  className={`relative flex items-center animate-fade-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-secondary rounded-full transform md:-translate-x-1/2 z-10 shadow-lg" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-card p-6 rounded-xl shadow-soft border border-border/50 card-hover">
                      <div className="text-2xl font-bold text-secondary mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
