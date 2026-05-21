export default function IndianDatingApp() {
  const profiles = [
    {
      name: 'Aarav',
      age: 24,
      city: 'Delhi',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
      status: 'Online',
    },
    {
      name: 'Priya',
      age: 22,
      city: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
      status: 'Video Call Available',
    },
    {
      name: 'Kabir',
      age: 26,
      city: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
      status: 'Chat Now',
    },
    {
      name: 'Ananya',
      age: 23,
      city: 'Jaipur',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop',
      status: 'Online',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-red-100 text-gray-800">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-pink-600">Uloo</h1>

        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-pink-500">Home</a>
          <a href="#profiles" className="hover:text-pink-500">Profiles</a>
          <a href="#features" className="hover:text-pink-500">Features</a>
          <a href="#chat" className="hover:text-pink-500">Chat</a>
        </nav>

        <button className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full shadow-lg transition-all">
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section id="home" className="grid md:grid-cols-2 gap-10 items-center px-8 md:px-20 py-16">
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Meet New <span className="text-pink-600">People</span> Across India
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Chat, match, and connect through live video calls with verified Indian profiles.
            A modern dating experience designed for real conversations.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-2xl shadow-xl text-lg font-semibold">
              Start Matching
            </button>

            <button className="border border-pink-500 text-pink-600 px-6 py-3 rounded-2xl font-semibold hover:bg-pink-50">
              Explore
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
            alt="dating"
            className="rounded-[30px] shadow-2xl w-full max-w-md"
          />

          <div className="absolute -bottom-6 bg-white shadow-xl rounded-2xl px-5 py-4 flex items-center gap-4">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            <p className="font-medium">1,200+ users online now</p>
          </div>
        </div>
      </section>

      {/* Profiles */}
      <section id="profiles" className="px-8 md:px-20 py-14">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-4xl font-bold">Trending Profiles</h3>

          <button className="text-pink-600 font-semibold hover:underline">
            View All
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="h-72 w-full object-cover"
                />

                <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                  {profile.status}
                </span>
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center">
                  <h4 className="text-2xl font-bold">{profile.name}</h4>
                  <span className="text-gray-500">{profile.age}</span>
                </div>

                <p className="text-gray-500 mt-1">{profile.city}, India</p>

                <div className="flex gap-3 mt-5">
                  <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-xl font-medium">
                    Chat
                  </button>

                  <button className="flex-1 border border-pink-500 text-pink-600 hover:bg-pink-50 py-2 rounded-xl font-medium">
                    Video Call
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-8 md:px-20 py-16 bg-white">
        <h3 className="text-4xl font-bold text-center mb-14">App Features</h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-pink-50 p-8 rounded-3xl shadow-md">
            <div className="text-5xl mb-4">💬</div>
            <h4 className="text-2xl font-bold mb-3">Live Chat</h4>
            <p className="text-gray-600 leading-relaxed">
              Instant private messaging with emoji support and real-time notifications.
            </p>
          </div>

          <div className="bg-red-50 p-8 rounded-3xl shadow-md">
            <div className="text-5xl mb-4">📹</div>
            <h4 className="text-2xl font-bold mb-3">Video Calling</h4>
            <p className="text-gray-600 leading-relaxed">
              Secure HD video calls for genuine conversations and better connections.
            </p>
          </div>

          <div className="bg-orange-50 p-8 rounded-3xl shadow-md">
            <div className="text-5xl mb-4">❤️</div>
            <h4 className="text-2xl font-bold mb-3">Smart Match</h4>
            <p className="text-gray-600 leading-relaxed">
              AI-powered matching system based on interests, location, and activity.
            </p>
          </div>
        </div>
      </section>

      {/* Chat Preview */}
      <section id="chat" className="px-8 md:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-[30px] shadow-xl p-6">
            <div className="flex items-center gap-4 border-b pb-4">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-xl">Priya</h4>
                <p className="text-green-500 text-sm">Online</p>
              </div>
            </div>

            <div className="py-6 space-y-4">
              <div className="bg-gray-100 p-4 rounded-2xl w-fit max-w-[80%]">
                Hey 👋 Nice to meet you!
              </div>

              <div className="bg-pink-600 text-white p-4 rounded-2xl ml-auto w-fit max-w-[80%]">
                Nice meeting you too 😊
              </div>

              <div className="bg-gray-100 p-4 rounded-2xl w-fit max-w-[80%]">
                Want to connect on a video call?
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
              />

              <button className="bg-pink-600 text-white px-5 rounded-2xl font-semibold">
                Send
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-5xl font-bold leading-tight">
              Real-Time Chat & Secure Video Calls
            </h3>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Create meaningful conversations with modern messaging and high-quality video calling features.
            </p>

            <button className="mt-8 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl">
              Start Chatting
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-8 md:px-20 py-10 mt-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-3xl font-bold text-pink-400">Uloo</h4>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Modern Indian dating platform with chat and live video call features.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-4">Quick Links</h5>
            <div className="space-y-2 text-gray-400">
              <p>Home</p>
              <p>Profiles</p>
              <p>Video Call</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-4">Contact</h5>
            <div className="space-y-2 text-gray-400">
              <p>support@dilconnect.in</p>
              <p>India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500">
          © 2026 DilConnect. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
