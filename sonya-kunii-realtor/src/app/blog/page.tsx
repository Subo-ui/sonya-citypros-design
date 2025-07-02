import Image from 'next/image';

const posts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    title: '3 Tips for First-Time Homebuyers',
    date: 'May 2024',
    excerpt: 'Buying your first home in Chicago? Here are three essential tips to help you succeed in today\'s market.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
    title: 'How to Maximize Your Home Value Before Selling',
    date: 'April 2024',
    excerpt: 'Simple upgrades and staging strategies can help you get top dollar for your Chicago property.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    title: 'Chicago Market Insights: Spring 2024',
    date: 'March 2024',
    excerpt: 'A quick look at the latest trends and opportunities in the Greater Chicago real estate market.'
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Real Estate Tips & Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
            <Image src={post.image} alt={post.title} width={400} height={160} className="h-40 w-full object-cover" />
            <div className="p-4 flex-1 flex flex-col">
              <div className="text-xs text-gray-400 mb-1">{post.date}</div>
              <div className="font-semibold text-lg mb-2 text-black">{post.title}</div>
              <div className="text-sm text-gray-600 flex-1">{post.excerpt}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 