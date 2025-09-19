import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import ImmersiveBackground from '@/components/ui/immersive-background';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Founder & President',
    bio: 'Passionate about classical literature and community building. Sarah founded the club with a vision to create an inclusive space for literary discussions.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80',
    email: 'sarah@crescentreaders.com',
    linkedin: '#',
    specialties: ['Classic Literature', 'Community Leadership', 'Event Planning'],
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Vice President',
    bio: 'Science fiction enthusiast and workshop facilitator. Michael brings innovative ideas and helps organize our technical discussions and author meetups.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    email: 'michael@crescentreaders.com',
    linkedin: '#',
    specialties: ['Science Fiction', 'Workshop Facilitation', 'Technology'],
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Content Director',
    bio: 'Contemporary fiction lover and creative writer. Emma oversees our CresPulse publication and coordinates our writing workshops.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    email: 'emma@crescentreaders.com',
    linkedin: '#',
    specialties: ['Contemporary Fiction', 'Creative Writing', 'Content Creation'],
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Podcast Host',
    bio: 'Audio storytelling expert and interviewer extraordinaire. David hosts our weekly podcast and brings authors closer to our community.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    email: 'david@crescentreaders.com',
    linkedin: '#',
    specialties: ['Podcasting', 'Audio Production', 'Author Interviews'],
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Events Coordinator',
    bio: 'Detail-oriented planner with a love for young adult literature. Lisa ensures our events run smoothly and our members have memorable experiences.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    email: 'lisa@crescentreaders.com',
    linkedin: '#',
    specialties: ['Event Planning', 'Young Adult Literature', 'Member Engagement'],
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Community Manager',
    bio: 'Social media strategist and community engagement specialist. James helps connect our members online and offline through various platforms.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    email: 'james@crescentreaders.com',
    linkedin: '#',
    specialties: ['Social Media', 'Community Engagement', 'Digital Marketing'],
  },
];

export default function Team() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ImmersiveBackground height="min-h-[60vh]" overlay="dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-up">
            Our Amazing <span className="text-secondary">Team</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white/90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Meet the passionate individuals who make our literary community thrive. 
            Each member brings unique perspectives and expertise to our shared love of literature.
          </p>
        </div>
      </ImmersiveBackground>

      {/* Team Members */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each team member brings unique expertise and passion to create an exceptional literary community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="group bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links - Appear on hover */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a 
                      href={`mailto:${member.email}`}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-secondary/80 transition-colors"
                    >
                      <Mail className="h-4 w-4 text-white" />
                    </a>
                    <a 
                      href={member.linkedin}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-secondary/80 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-white" />
                    </a>
                    <a 
                      href="#"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-secondary/80 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-medium mb-3">
                    {member.role}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Join Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Are you passionate about literature and community building? We're always looking for 
              dedicated volunteers to help us grow and serve our reading community better.
            </p>
            
            <div className="bg-card p-8 rounded-2xl shadow-soft border border-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Open Positions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="p-4 bg-accent/30 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Social Media Coordinator</h4>
                  <p className="text-sm text-muted-foreground">Help us engage with our community across various social platforms.</p>
                </div>
                <div className="p-4 bg-accent/30 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Workshop Assistant</h4>
                  <p className="text-sm text-muted-foreground">Support our workshop facilitators and help with event logistics.</p>
                </div>
                <div className="p-4 bg-accent/30 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Content Writer</h4>
                  <p className="text-sm text-muted-foreground">Contribute articles and reviews to our CresPulse publication.</p>
                </div>
                <div className="p-4 bg-accent/30 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Event Volunteer</h4>
                  <p className="text-sm text-muted-foreground">Help with setup, registration, and coordination at our events.</p>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="mailto:hello@crescentreaders.com"
                  className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-smooth font-medium"
                >
                  Get in Touch
                  <Mail className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}