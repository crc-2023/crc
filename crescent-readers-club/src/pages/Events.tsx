import { Calendar, MapPin, Clock, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImmersiveBackground from '@/components/ui/immersive-background';

const upcomingEvents = [
  {
    id: 1,
    title: 'Classic Literature Discussion: Pride and Prejudice',
    date: '2024-10-15',
    time: '7:00 PM - 9:00 PM',
    location: 'Community Center, Main Hall',
    description: 'Join us for an engaging discussion about Jane Austen\'s timeless masterpiece. We\'ll explore themes of social class, marriage, and personal growth.',
    attendees: 24,
    maxAttendees: 30,
    category: 'Book Discussion',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80',
  },
  {
    id: 2,
    title: 'Author Meet & Greet: Sarah J. Maas',
    date: '2024-10-22',
    time: '6:30 PM - 8:30 PM',
    location: 'City Library Auditorium',
    description: 'An exclusive evening with bestselling author Sarah J. Maas. Learn about her writing process, upcoming projects, and get your books signed.',
    attendees: 45,
    maxAttendees: 50,
    category: 'Author Event',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    id: 3,
    title: 'Poetry Night: Voices of the Heart',
    date: '2024-11-05',
    time: '7:30 PM - 9:30 PM',
    location: 'Café Literati',
    description: 'An intimate evening of poetry readings, both classic and contemporary. Open mic session for members to share their own works.',
    attendees: 18,
    maxAttendees: 25,
    category: 'Poetry',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80',
  },
  {
    id: 4,
    title: 'Writing Workshop: Crafting Compelling Characters',
    date: '2024-11-12',
    time: '2:00 PM - 5:00 PM',
    location: 'Online via Zoom',
    description: 'A hands-on workshop for aspiring writers. Learn techniques for developing memorable characters that drive your story forward.',
    attendees: 32,
    maxAttendees: 40,
    category: 'Workshop',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80',
  },
];

const pastEvents = [
  {
    id: 5,
    title: 'Science Fiction Spectacular: Dune Discussion',
    date: '2024-09-20',
    location: 'Community Center',
    attendees: 35,
    category: 'Book Discussion',
  },
  {
    id: 6,
    title: 'Young Adult Literature Panel',
    date: '2024-09-08',
    location: 'High School Library',
    attendees: 42,
    category: 'Panel Discussion',
  },
  {
    id: 7,
    title: 'Historical Fiction Deep Dive',
    date: '2024-08-25',
    location: 'Museum Conference Room',
    attendees: 28,
    category: 'Book Discussion',
  },
];

const categoryColors = {
  'Book Discussion': 'from-blue-500 to-purple-600',
  'Author Event': 'from-green-500 to-teal-600',
  'Poetry': 'from-pink-500 to-rose-600',
  'Workshop': 'from-orange-500 to-red-600',
  'Panel Discussion': 'from-indigo-500 to-blue-600',
};

export default function Events() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ImmersiveBackground height="min-h-[60vh]" overlay="dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-up">
            Events & <span className="text-secondary">Activities</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white/90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Discover our upcoming literary events, workshops, and community gatherings. 
            Join us for engaging discussions, author meetups, and creative activities.
          </p>
        </div>
      </ImmersiveBackground>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Upcoming <span className="text-gradient">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mark your calendars and join us for these exciting literary adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={event.id} 
                className="bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${event.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${categoryColors[event.category as keyof typeof categoryColors]}`}>
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-secondary" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-secondary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-secondary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-secondary" />
                      <span>{event.attendees}/{event.maxAttendees} attending</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="w-full bg-muted rounded-full h-2 mr-4">
                      <div 
                        className="bg-secondary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                      />
                    </div>
                    <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-smooth">
                      Register
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Past <span className="text-gradient">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Look back at some of our memorable literary gatherings and community events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div 
                key={event.id} 
                className="bg-card p-6 rounded-xl shadow-soft border border-border/50 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${categoryColors[event.category as keyof typeof categoryColors]}`}>
                    {event.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-secondary" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-secondary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-secondary" />
                    <span>{event.attendees} attended</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}