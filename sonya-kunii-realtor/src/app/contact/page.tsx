export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact & Schedule</h1>
      <form className="bg-gray-50 rounded-lg p-6 mb-8 grid gap-4">
        <input className="border rounded px-3 py-2" placeholder="Name" required />
        <input className="border rounded px-3 py-2" placeholder="Email" type="email" required />
        <input className="border rounded px-3 py-2" placeholder="Phone" type="tel" />
        <textarea className="border rounded px-3 py-2" placeholder="Message" rows={4} required />
        <button type="submit" className="bg-primary text-white rounded px-4 py-2 font-semibold hover:bg-primary-dark transition">Send Message</button>
      </form>
      <div className="mb-8">
        <div className="font-semibold mb-1">Schedule a Meeting</div>
        <div className="bg-white border rounded p-4 text-center text-gray-500">[Calendly or scheduling tool placeholder]</div>
      </div>
      <div className="mb-8">
        <div className="font-semibold mb-1">Office Location</div>
        <div>HomeSmart Connect Real Estate, 7240 W Devon Ave, Chicago, IL 60631</div>
        <iframe
          title="Office Map"
          src="https://www.google.com/maps?q=7240+W+Devon+Ave,+Chicago,+IL+60631&output=embed"
          className="w-full h-64 mt-2 rounded border"
          loading="lazy"
        />
      </div>
    </div>
  );
} 