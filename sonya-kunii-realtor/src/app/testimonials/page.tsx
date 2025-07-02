const testimonials = [
  {
    id: 1,
    quote: 'Sonya was incredibly responsive and made our home buying process smooth and stress-free. Highly recommend!',
    client: '— J. Smith'
  },
  {
    id: 2,
    quote: 'Her knowledge of the Chicago market is unmatched. We sold our home quickly and for a great price.',
    client: '— M. Patel'
  },
  {
    id: 3,
    quote: 'Sonya went above and beyond to help us find our dream home. Thank you! ',
    client: '— L. Nguyen'
  },
  {
    id: 4,
    quote: 'Professional, attentive, and truly cares about her clients. We felt supported every step of the way.',
    client: '— D. Garcia'
  },
  {
    id: 5,
    quote: 'We would recommend Sonya to anyone looking to buy or sell in Chicago.',
    client: '— R. Johnson'
  },
];

export default function TestimonialsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Client Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
            <div className="text-lg italic text-gray-700">“{t.quote}”</div>
            <div className="text-sm text-primary font-semibold mt-2">{t.client}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 