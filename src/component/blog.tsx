import Image from 'next/image';

type Blog = {
  title: string;
  author: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
};

const blogs: Blog[] = [
  {
    title: 'Small business & Startup',
    author: 'Prabhash Mishra',
    date: '1 Jan 2023',
    description:
      'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    tags: ['Tax & Audit', 'Management'],
    image: '/path-to-image-1.jpg',
  },
  {
    title: 'Scale-Up Company Offer',
    author: 'Mahesh Kumar',
    date: '1 Jan 2023',
    description:
      'Mental models are simple expressions of complex processes or relationships.',
    tags: ['Tax', 'Research', 'Compliance'],
    image: '/path-to-image-2.jpg',
  },
  {
    title: 'Growing Business Package',
    author: 'Rakhi Verma',
    date: '1 Jan 2023',
    description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
    tags: ['Audit', 'Money Back'],
    image: '/path-to-image-3.jpg',
  },
  {
    title: 'Growing Business Package',
    author: 'Rakhi Verma',
    date: '1 Jan 2023',
    description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
    tags: ['Audit', 'Money Back'],
    image: '/path-to-image-3.jpg',
  },
  {
    title: 'Growing Business Package',
    author: 'Rakhi Verma',
    date: '1 Jan 2023',
    description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
    tags: ['Audit', 'Money Back'],
    image: '/path-to-image-3.jpg',
  },
  {
    title: 'Growing Business Package',
    author: 'Rakhi Verma',
    date: '1 Jan 2023',
    description: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.',
    tags: ['Audit', 'Money Back'],
    image: '/path-to-image-3.jpg',
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen py-8 px-4 md:px-16">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-8">
        Accelerate Digital Transformation
      </h1>
      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-400">
                {blog.author} • {blog.date}
              </p>
              <p className="text-gray-300 text-sm mt-2">{blog.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {blog.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-500 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
          Show more blogs
        </button>
      </div>
      
    </div>
  );
};

export default BlogPage;