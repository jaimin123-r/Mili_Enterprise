const BlogPreview = () => {
    const blogPosts = [
      {
        id: 1,
        title: "Advancements in Metal Fabrication Technology",
        excerpt: "Discover the latest innovations in metal fabrication technology and how they're revolutionizing the industry.",
        image: "/api/placeholder/600/400",
        date: "Feb 15, 2025",
        author: "Rajesh Kumar",
      },
      {
        id: 2,
        title: "5 Benefits of Precision Sheet Metal Fabrication",
        excerpt: "Learn about the advantages of precision sheet metal fabrication for your manufacturing projects.",
        image: "/api/placeholder/600/400",
        date: "Feb 08, 2025",
        author: "Anita Patel",
      },
      {
        id: 3,
        title: "How to Choose the Right Fabrication Partner",
        excerpt: "Important factors to consider when selecting a fabrication partner for your next project.",
        image: "/api/placeholder/600/400",
        date: "Jan 28, 2025",
        author: "Sunil Sharma",
      },
    ];
  
    return (
      <div className="bg-gray-50 section-padding">
        <div className="container-custom">
          <h2 className="title-section">Latest From Our Blog</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {post.date} • By {post.author}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    <a href={`/blog/${post.id}`} className="text-gray-800 hover:text-blue-600 transition duration-300">
                      {post.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/blog" className="btn-primary">View All Posts</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default BlogPreview;