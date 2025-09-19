import { Calendar, Clock, User, ArrowRight, Tag, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImmersiveBackground from '@/components/ui/immersive-background';

const featuredArticle = {
  id: 1,
  title: 'The Renaissance of African Literature: Voices Shaping Modern Narratives',
  excerpt: 'Exploring how contemporary African authors are redefining global literature through powerful storytelling, rich cultural narratives, and innovative literary techniques that challenge traditional Western literary canons.',
  content: 'In recent years, African literature has experienced a remarkable renaissance, with authors like Chimamanda Ngozi Adichie, Nnedi Okorafor, and Yaa Gyasi gaining international recognition...',
  author: 'Emma Rodriguez',
  date: '2024-09-28',
  readTime: '8 min read',
  category: 'Literary Analysis',
  tags: ['African Literature', 'Contemporary Fiction', 'Cultural Studies'],
  image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
  featured: true,
};

const recentArticles = [
  {
    id: 2,
    title: 'Book Review: "The Seven Husbands of Evelyn Hugo" by Taylor Jenkins Reid',
    excerpt: 'A captivating tale of love, ambition, and secrets in Golden Age Hollywood that explores themes of identity, sacrifice, and the price of fame.',
    author: 'Sarah Johnson',
    date: '2024-09-25',
    readTime: '5 min read',
    category: 'Book Review',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80',
  },
  {
    id: 3,
    title: 'The Art of World-Building in Fantasy Literature',
    excerpt: 'How master fantasy authors create immersive worlds that feel authentic and lived-in, from Tolkien\'s Middle-earth to N.K. Jemisin\'s Broken Earth.',
    author: 'Michael Chen',
    date: '2024-09-22',
    readTime: '6 min read',
    category: 'Writing Craft',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80',
  },
  {
    id: 4,
    title: 'Poetry Corner: Exploring the Works of Ocean Vuong',
    excerpt: 'A deep dive into the lyrical beauty and emotional depth of Ocean Vuong\'s poetry, examining themes of identity, family, and the immigrant experience.',
    author: 'Lisa Thompson',
    date: '2024-09-19',
    readTime: '4 min read',
    category: 'Poetry',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80',
  },
  {
    id: 5,
    title: 'The Evolution of Science Fiction: From Wells to Liu Cixin',
    excerpt: 'Tracing the development of science fiction from its early pioneers to contemporary masters, exploring how the genre reflects our changing world.',
    author: 'David Park',
    date: '2024-09-16',
    readTime: '7 min read',
    category: 'Genre Study',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&q=80',
  },
  {
    id: 6,
    title: 'Reading Challenge Update: Member Spotlights and Achievements',
    excerpt: 'Celebrating our community members who have completed reading challenges and sharing their favorite discoveries from this year.',
    author: 'James Wilson',
    date: '2024-09-13',
    readTime: '3 min read',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    id: 7,
    title: 'Interview: Local Author Spotlight with Maria Santos',
    excerpt: 'Our conversation with debut novelist Maria Santos about her journey from journalism to fiction and her latest novel about family secrets.',
    author: 'Emma Rodriguez',
    date: '2024-09-10',
    readTime: '9 min read',
    category: 'Interview',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80',
  },
];

const categories = ['All', 'Book Review', 'Literary Analysis', 'Writing Craft', 'Poetry', 'Genre Study', 'Community', 'Interview'];

const trendingTopics = [
  'Contemporary Fiction',
  'African Literature', 
  'Science Fiction',
  'Poetry Analysis',
  'Book Club Picks',
  'Author Interviews',
  'Writing Tips',
  'Classic Literature'
];

export default function CresPulse() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ImmersiveBackground height="min-h-[60vh]" overlay="dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center py-20">
          <div className="animate-fade-up">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-secondary mr-3" />
              <span className="text-secondary font-medium text-lg">CRESPULSE</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Literary <span className="text-secondary">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white/90">
              Dive deep into the world of books with our thoughtful reviews, literary analysis, 
              author interviews, and community discussions.
            </p>
          </div>
        </div>
      </ImmersiveBackground>

      {/* Featured Article */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-gradient">Article</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our latest in-depth exploration of contemporary literature and literary culture.
            </p>
          </div>

          <article className="bg-card rounded-2xl shadow-elegant border border-border/50 overflow-hidden animate-fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div 
                className="h-64 lg:h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${featuredArticle.image})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                    {featuredArticle.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredArticle.readTime}
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {featuredArticle.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-secondary" />
                    <span className="text-sm text-muted-foreground">{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-secondary" />
                    <span className="text-sm text-muted-foreground">
                      {new Date(featuredArticle.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredArticle.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-smooth">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Recent Articles & Sidebar */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="text-center mb-12 animate-fade-up">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Recent <span className="text-gradient">Articles</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Stay updated with our latest literary discussions and insights.
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mb-8 animate-fade-up">
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

              {/* Articles Grid */}
              <div className="space-y-8">
                {recentArticles.map((article, index) => (
                  <article 
                    key={article.id} 
                    className="bg-card rounded-xl shadow-soft border border-border/50 overflow-hidden card-hover animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div 
                        className="h-48 md:h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${article.image})` }}
                      />
                      
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                            {article.category}
                          </span>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {article.readTime}
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-secondary transition-smooth cursor-pointer">
                          {article.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <User className="h-3 w-3 mr-1" />
                            <span className="mr-4">{article.author}</span>
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{new Date(article.date).toLocaleDateString()}</span>
                          </div>
                          
                          <Button variant="ghost" size="sm" className="text-secondary hover:text-secondary/80">
                            Read More
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-12 animate-fade-up">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Newsletter Signup */}
              <div className="bg-card p-6 rounded-xl shadow-soft border border-border/50 animate-fade-up">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Subscribe to CresPulse
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Get our latest articles and literary insights delivered to your inbox weekly.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Trending Topics */}
              <div className="bg-card p-6 rounded-xl shadow-soft border border-border/50 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-5 w-5 text-secondary mr-2" />
                  <h3 className="text-xl font-semibold text-foreground">
                    Trending Topics
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic) => (
                    <span 
                      key={topic}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm hover:bg-secondary hover:text-secondary-foreground transition-smooth cursor-pointer"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recent Comments */}
              <div className="bg-card p-6 rounded-xl shadow-soft border border-border/50 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Recent Discussions
                </h3>
                <div className="space-y-4">
                  {[
                    { user: 'BookLover23', comment: 'Great analysis of Toni Morrison\'s narrative style!', article: 'The Art of Storytelling' },
                    { user: 'LitStudent', comment: 'This really helped me understand world-building better.', article: 'Fantasy Literature' },
                    { user: 'ReadingAddict', comment: 'Can\'t wait to read this book now!', article: 'Seven Husbands Review' },
                  ].map((comment, idx) => (
                    <div key={idx} className="border-l-2 border-secondary/30 pl-3">
                      <p className="text-sm text-muted-foreground mb-1">
                        <span className="font-medium text-foreground">{comment.user}</span> on {comment.article}
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        "{comment.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}