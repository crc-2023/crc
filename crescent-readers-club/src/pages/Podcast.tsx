import { Play, Clock, Calendar, Download, Heart, Share2, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImmersiveBackground from '@/components/ui/immersive-background';

const featuredEpisode = {
  id: 1,
  title: 'The Art of Storytelling with Toni Morrison',
  description: 'A deep dive into the narrative techniques and cultural impact of Nobel Prize winner Toni Morrison. We explore her masterworks including "Beloved" and "The Bluest Eye" with special guest Dr. Angela Davis.',
  duration: '58 minutes',
  date: '2024-09-28',
  plays: 12400,
  likes: 892,
  image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&q=80',
  categories: ['Author Spotlight', 'Contemporary Literature'],
};

const recentEpisodes = [
  {
    id: 2,
    title: 'Science Fiction Renaissance: Modern Space Operas',
    description: 'Exploring the resurgence of space opera in contemporary science fiction with authors like Becky Chambers and James S.A. Corey.',
    duration: '45 minutes',
    date: '2024-09-21',
    plays: 8650,
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&q=80',
    categories: ['Science Fiction', 'Genre Analysis'],
  },
  {
    id: 3,
    title: 'Poetry in Motion: Spoken Word and Literature',
    description: 'The intersection of spoken word poetry and traditional literature, featuring local poet Maya Chen and discussing the works of Rupi Kaur.',
    duration: '42 minutes',
    date: '2024-09-14',
    plays: 6780,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80',
    categories: ['Poetry', 'Guest Interview'],
  },
  {
    id: 4,
    title: 'Young Adult Literature: Coming of Age Stories',
    description: 'A comprehensive look at the evolution of YA literature and its impact on young readers, discussing works by authors like Rainbow Rowell and John Green.',
    duration: '51 minutes',
    date: '2024-09-07',
    plays: 9120,
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80',
    categories: ['Young Adult', 'Genre Discussion'],
  },
  {
    id: 5,
    title: 'Historical Fiction Deep Dive: World War II Narratives',
    description: 'Examining how authors approach historical fiction, focusing on WWII literature including "The Book Thief" and "All the Light We Cannot See".',
    duration: '49 minutes',
    date: '2024-08-31',
    plays: 7890,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80',
    categories: ['Historical Fiction', 'Book Analysis'],
  },
  {
    id: 6,
    title: 'Mystery and Thriller: The Psychology of Suspense',
    description: 'Understanding what makes a great mystery novel with discussions on Agatha Christie, Gillian Flynn, and contemporary thriller writers.',
    duration: '44 minutes',
    date: '2024-08-24',
    plays: 8340,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80',
    categories: ['Mystery', 'Thriller', 'Writing Craft'],
  },
];

const categories = ['All', 'Author Spotlight', 'Genre Analysis', 'Book Reviews', 'Writing Craft', 'Guest Interview'];

export default function Podcast() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ImmersiveBackground height="min-h-[70vh]" overlay="dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="flex items-center mb-4">
                <Headphones className="h-8 w-8 text-secondary mr-3" />
                <span className="text-secondary font-medium">CRESCENT READERS PODCAST</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Literary <span className="text-secondary">Conversations</span>
              </h1>
              <p className="text-xl leading-relaxed mb-8 text-white/90">
                Join us for in-depth discussions about books, authors, and the world of literature. 
                Each episode brings you closer to the stories that shape our world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-smooth">
                  <Play className="mr-2 h-5 w-5" />
                  Listen Now
                </Button>
                <Button variant="outline" size="lg" className="border-white/50 text-black hover:bg-white/10 transition-smooth">
                  Subscribe
                </Button>
              </div>
            </div>
            
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-white">Podcast Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-1">50+</div>
                    <div className="text-white/80">Episodes</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-1">25K+</div>
                    <div className="text-white/80">Downloads</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-1">4.8</div>
                    <div className="text-white/80">Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-1">2K+</div>
                    <div className="text-white/80">Subscribers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ImmersiveBackground>

      {/* Featured Episode */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-gradient">Episode</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our latest deep dive into the world of literature and storytelling.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-elegant border border-border/50 overflow-hidden animate-fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div 
                className="h-64 lg:h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${featuredEpisode.image})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full w-16 h-16 p-0 glow-effect">
                    <Play className="h-6 w-6 ml-1" fill="currentColor" />
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                    Latest Episode
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredEpisode.categories.map((category) => (
                    <span key={category} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                      {category}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {featuredEpisode.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredEpisode.description}
                </p>

                <div className="flex items-center text-sm text-muted-foreground mb-6 space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-secondary" />
                    {featuredEpisode.duration}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-secondary" />
                    {new Date(featuredEpisode.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Play className="h-4 w-4 mr-1 text-secondary" />
                    {featuredEpisode.plays.toLocaleString()} plays
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <Play className="mr-2 h-4 w-4" />
                    Play Episode
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Episodes */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Recent <span className="text-gradient">Episodes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Catch up on our latest literary discussions and author interviews.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="space-y-6">
            {recentEpisodes.map((episode, index) => (
              <div 
                key={episode.id} 
                className="bg-card rounded-xl shadow-soft border border-border/50 p-6 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                  <div className="relative">
                    <img 
                      src={episode.image} 
                      alt={episode.title}
                      className="w-full h-32 md:h-24 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full w-10 h-10 p-0">
                        <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
                      </Button>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {episode.categories.map((category) => (
                        <span key={category} className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs">
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {episode.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {episode.description}
                    </p>
                  </div>

                  <div className="text-center md:text-right">
                    <div className="text-sm text-muted-foreground mb-2">
                      <div className="flex items-center justify-center md:justify-end mb-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {episode.duration}
                      </div>
                      <div className="flex items-center justify-center md:justify-end">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(episode.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {episode.plays.toLocaleString()} plays
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-up">
            <Button variant="outline" size="lg">
              Load More Episodes
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}