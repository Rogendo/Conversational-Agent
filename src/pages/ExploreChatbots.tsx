import { BiSolidBookmarks } from 'react-icons/bi';

const ExploreChatbots = () => {
  const featuredChatbots = [
    { name: 'Pregnancy Support Bot', description: 'Provides support and information during pregnancy.', by: '📑', url: 'pregnancy', img: 'prenatal-care.png' },
    { name: 'Mental Health Support Bot', description: 'Offers mental health support and resources.', by: '📑', url: '/', img:'mental-health.png' },
    { name: 'Customer Support Bot', description: 'Assists with customer inquiries and support.', by: '📑',url:'',img:'24-hours-support.png' }
  ];

  return (
    <div className="h-screen bg-gradient-to-br from-green-500 to-purple-600 text-white flex flex-col items-center p-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Explore Other Chatbots</h1>
        <p className="text-lg">Discover and interact with a variety of chatbots tailored for different needs.</p>
      </div>
      
      {/* Featured Section */}
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Chatbots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredChatbots.map((bot, index) => (
            <a href={bot.url} key={index} className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:bg-opacity-20 transition-all cursor-pointer flex items-center">
              <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                {bot.img ? (
                  <img className="w-full h-full rounded-full object-cover" src={bot.img} alt={bot.name} />
                ) : (
                  <BiSolidBookmarks className="text-gray-700 w-8 h-8" />
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{bot.name}</h3>
                <p className="text-gray-200 mb-2">{bot.description}</p>
                <p className="text-sm text-gray-400"> {bot.by}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreChatbots;
