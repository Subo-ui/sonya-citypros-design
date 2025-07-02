export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Sonya Kunii</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
        <img
          src="/Sonya_profilepic.jpg"
          alt="Sonya Kunii headshot"
          className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow"
        />
        <div>
          <p className="mb-4 text-lg font-medium">Sonya Kunii is a dedicated REALTOR® serving buyers and sellers across the Greater Chicago area. Known for her responsiveness, market expertise, and commitment to client success, Sonya brings a personal touch and deep local knowledge to every transaction.</p>
          <p className="mb-2">Whether you're searching for your dream home or selling a cherished property, Sonya's professionalism and attention to detail ensure a smooth, rewarding experience. She is proud to be part of <span className="font-semibold text-primary">HomeSmart Connect Real Estate</span>, a leader in Chicago real estate.</p>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <div className="font-semibold mb-1">Contact Sonya</div>
        <div>Phone: <a href="tel:7739515807" className="text-primary hover:underline">(773) 951-5807</a></div>
        <div>Email: <a href="mailto:skuniire@gmail.com" className="text-primary hover:underline">skuniire@gmail.com</a></div>
        <div>Office: HomeSmart Connect Real Estate, 7240 W Devon Ave, Chicago, IL 60631</div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <img src="https://www.homesmart.com/images/logos/homesmart-connect-logo.png" alt="HomeSmart Connect Logo" className="h-8" />
        <span className="text-xs text-gray-500">Proudly serving Chicago and surrounding communities</span>
      </div>
    </div>
  );
} 