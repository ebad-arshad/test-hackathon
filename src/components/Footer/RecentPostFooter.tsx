export default function RecentPostsSection() {
  const posts = [
    { title: "Is fastfood good for your body?", date: "February 28, 2022", image: "/recentPost.png" },
    { title: "Change your food habit With organic food", date: "February 28, 2022", image: "/recentPost.png" },
    { title: "Do you like fastfood for your life?", date: "February 28, 2022", image: "/recentPost.png" },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full max-w-[350px] sm:max-w-[500px] lg:max-w-[273.83px] mx-auto">
      <h3 className="text-xl font-bold mb-8">Recent Post</h3>
      {posts.map((post, index) => (
        <div key={index} className="flex items-center mb-4">
          <img
            src={post.image}
            alt={post.title}
            className="w-16 h-16 object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold mb-1 text-base">{post.title}</h4>
            <p className="text-sm text-gray-400">{post.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
