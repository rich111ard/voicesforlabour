import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { 
  Calendar, 
  User, 
  Tag, 
  Heart, 
  Share2, 
  MessageCircle, 
  ArrowLeft,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon
} from 'lucide-react';

const BlogPostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(Math.floor(Math.random() * 100) + 20);
  const [comments, setComments] = useState([
    { id: 1, user: 'John Doe', text: 'Great article! Very insightful.', date: '2 days ago' },
    { id: 2, user: 'Jane Smith', text: 'This is a crucial topic for our generation.', date: '1 day ago' }
  ]);
  const [newComment, setNewComment] = useState('');
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
          <Link to="/blog" className="text-primary font-bold flex items-center gap-2 justify-center">
            <ArrowLeft size={20} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        user: 'You',
        text: newComment,
        date: 'Just now'
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setShowShareMenu(false);
  };

  return (
    <div className="bg-bg-main min-h-screen pb-20">
      {/* Reading Progress Bar */}
      <motion.div 
        className="fixed top-[80px] left-0 h-1 bg-accent z-50"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-full shadow-2xl z-[100] font-bold flex items-center gap-2"
          >
            <LinkIcon size={18} /> Link copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
              </Link>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-bold uppercase">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight max-w-4xl">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-8 text-white/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-primary font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} /> <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={18} /> <span>{comments.length} Comments</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container-custom mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg dark:prose-invert max-w-none mb-16"
            >
              <div 
                className="blog-content text-text-secondary dark:text-gray-300 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
              />
            </motion.div>

            {/* Interaction Bar */}
            <div className="flex items-center justify-between py-8 border-y border-border-brand mb-16">
              <div className="flex items-center gap-6">
                <button 
                  onClick={handleLike}
                  className={`flex items-center gap-2 font-bold transition-colors ${isLiked ? 'text-accent' : 'text-text-secondary hover:text-accent'}`}
                >
                  <Heart size={24} fill={isLiked ? 'currentColor' : 'none'} />
                  <span>{likesCount}</span>
                </button>
                <button className="flex items-center gap-2 text-text-secondary hover:text-primary font-bold transition-colors">
                  <MessageCircle size={24} />
                  <span>{comments.length}</span>
                </button>
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-2 text-text-secondary hover:text-primary font-bold transition-colors"
                >
                  <Share2 size={24} />
                  <span>Share</span>
                </button>
                
                {showShareMenu && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 bottom-full mb-4 bg-surface border border-border-brand rounded-2xl p-4 shadow-xl min-w-[200px] z-50"
                  >
                    <div className="flex flex-col gap-2">
                      <button className="flex items-center gap-3 p-2 hover:bg-bg-main rounded-xl transition-colors text-left">
                        <Facebook size={18} className="text-blue-600" /> Facebook
                      </button>
                      <button className="flex items-center gap-3 p-2 hover:bg-bg-main rounded-xl transition-colors text-left">
                        <Twitter size={18} className="text-sky-400" /> Twitter
                      </button>
                      <button className="flex items-center gap-3 p-2 hover:bg-bg-main rounded-xl transition-colors text-left">
                        <Linkedin size={18} className="text-blue-700" /> LinkedIn
                      </button>
                      <button onClick={copyLink} className="flex items-center gap-3 p-2 hover:bg-bg-main rounded-xl transition-colors text-left">
                        <LinkIcon size={18} /> Copy Link
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Comments Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-10 dark:text-white">Comments ({comments.length})</h3>
              
              <form onSubmit={handleCommentSubmit} className="mb-12">
                <div className="relative">
                  <textarea 
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="w-full bg-surface border border-border-brand rounded-2xl p-6 min-h-[150px] focus:outline-none focus:border-primary transition-colors text-text-primary"
                  />
                  <button 
                    type="submit"
                    className="absolute bottom-4 right-4 bg-primary text-white p-3 rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>

              <div className="space-y-8">
                {comments.map((comment) => (
                  <motion.div 
                    key={comment.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-surface flex-shrink-0 flex items-center justify-center text-primary font-bold">
                      {comment.user.charAt(0)}
                    </div>
                    <div className="flex-1 bg-surface border border-border-brand rounded-2xl p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold dark:text-white">{comment.user}</h4>
                        <span className="text-xs text-text-secondary">{comment.date}</span>
                      </div>
                      <p className="text-text-secondary dark:text-gray-400 leading-relaxed">
                        {comment.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              {/* Author Card */}
              <div className="bg-surface border border-border-brand rounded-[2rem] p-8">
                <h4 className="text-xl font-bold mb-6 dark:text-white">About the Author</h4>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold dark:text-white">{post.author}</h5>
                    <p className="text-sm text-text-secondary">Labour Rights Advocate</p>
                  </div>
                </div>
                <p className="text-text-secondary dark:text-gray-400 text-sm leading-relaxed mb-6">
                  Dedicated to highlighting the stories and struggles of workers worldwide. With over 10 years of experience in labour advocacy.
                </p>
                <button className="btn-outline w-full py-3 text-sm">Follow Author</button>
              </div>

              {/* Related Posts */}
              <div>
                <h4 className="text-xl font-bold mb-8 dark:text-white">Related Articles</h4>
                <div className="space-y-6">
                  {BLOG_POSTS.filter(p => p.id !== id).map(related => (
                    <Link key={related.id} to={`/blog/${related.id}`} className="group flex gap-4">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                        <img 
                          src={related.image} 
                          alt={related.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-accent mb-1 block">
                          {related.category}
                        </span>
                        <h5 className="font-bold text-sm group-hover:text-primary transition-colors line-clamp-2 dark:text-white">
                          {related.title}
                        </h5>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-surface border border-border-brand rounded-[2rem] p-8">
                <h4 className="text-xl font-bold mb-6 dark:text-white">Popular Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {['Labour', 'Rights', 'Advocacy', 'Policy', 'Digital', 'Future', 'Workers'].map(tag => (
                    <span key={tag} className="bg-bg-main text-text-secondary px-4 py-2 rounded-xl text-xs font-bold hover:bg-primary hover:text-white cursor-pointer transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostDetail;
