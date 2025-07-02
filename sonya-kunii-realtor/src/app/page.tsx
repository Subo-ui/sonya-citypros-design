'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StarBorder from '@/components/StarBorder';

// Hero background image (replace with your own or use Unsplash)
const heroImage = '/images/homeextr.jpg'; // Or use a beautiful Unsplash interior

const featuredListings = [
  {
    id: 1,
    image: '/images/listing1.jpg',
    price: '$799,900',
    beds: 4,
    baths: 2.5,
    address: '401 S Wood Dale Road, Wood Dale, IL',
    description: 'Modern 4BR home with open floor plan and large backyard.'
  },
  {
    id: 2,
    image: '/images/listing2.jpg',
    price: '$975,000',
    beds: 6,
    baths: 3,
    address: '1707 W Chicago Avenue, Chicago, IL',
    description: 'Spacious mixed-use property in the heart of Chicago.'
  },
  {
    id: 3,
    image: '/images/listing3.jpg',
    price: '$3,499,000',
    beds: 6,
    baths: 6,
    address: '2132 W Agatite Avenue, Chicago, IL',
    description: 'Luxury new construction with high-end finishes.'
  },
];

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
];

function useResponsiveCards() {
  // 1 card on mobile, 2 on tablet, 3 on desktop
  const [cards, setCards] = useState(3);
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setCards(1);
      else if (window.innerWidth < 1024) setCards(2);
      else setCards(3);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return cards;
}

export default function HomePage() {
  const cardsToShow = useResponsiveCards();
  const [start, setStart] = useState(0);
  const end = start + cardsToShow;
  const canPrev = start > 0;
  const canNext = end < featuredListings.length;

  function prev() {
    setStart((s) => Math.max(0, s - cardsToShow));
  }
  function next() {
    setStart((s) => Math.min(featuredListings.length - cardsToShow, s + cardsToShow));
  }

  return (
    <div className="bg-white">
      {/* Hero Section - full-bleed */}
      <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center w-full">
        <img
          src={heroImage}
          alt="Chicago home interior"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center drop-shadow-lg">FINDING HOME, TOGETHER.</h1>
          <StarBorder as="div" className="w-full max-w-xl mx-auto" color="#00bcd4" speed="4s">
            <form className="flex items-center bg-white/90 rounded shadow overflow-hidden">
            <input
              type="text"
              className="flex-1 px-4 py-3 text-gray-800 bg-transparent outline-none"
              placeholder="Search by Neighborhood, Address, Zip, MLS Number, Agent"
            />
            <button type="submit" className="px-4 py-3 text-primary font-bold hover:bg-primary/10 transition">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          </form>
          </StarBorder>
        </div>
      </section>
      {/* Main content in a card */}
      <main className="w-full mx-auto max-w-7xl px-4 py-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg mt-6 text-gray-900">
        {/* Featured Listings Carousel */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Featured Listings</h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={prev}
              disabled={!canPrev}
              className={`p-2 rounded-full border bg-white shadow hover:bg-gray-100 transition disabled:opacity-30 disabled:cursor-not-allowed`}
              aria-label="Previous"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div className="flex gap-6 overflow-x-auto">
              {featuredListings.slice(start, end).map((listing) => (
                <div key={listing.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col w-80 min-w-[18rem]">
                  <img src={listing.image} alt={listing.address} className="h-48 w-full object-cover" />
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="font-semibold text-lg text-primary mb-1">{listing.price}</div>
                    <div className="text-gray-700 mb-1">{listing.address}</div>
                    <div className="text-xs text-gray-500 mb-2">{listing.beds} beds &bull; {listing.baths} baths</div>
                    <div className="text-sm text-gray-600 flex-1">{listing.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={next}
              disabled={!canNext}
              className={`p-2 rounded-full border bg-white shadow hover:bg-gray-100 transition disabled:opacity-30 disabled:cursor-not-allowed`}
              aria-label="Next"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
          <div className="flex justify-center mt-8 relative z-10">
            <Link href="/contact" className="bg-white text-black border border-black px-6 py-3 rounded font-semibold hover:bg-black hover:text-white focus:bg-black focus:text-white transition shadow">Contact Us</Link>
          </div>
        </section>
        {/* Value Proposition */}
        <section className="my-12 grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl mb-2">⭐</span>
            <div className="font-semibold mb-1">Top-Rated Agent</div>
            <div className="text-gray-500">Consistently 5-star reviews from happy clients.</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl mb-2">📍</span>
            <div className="font-semibold mb-1">Local Market Expertise</div>
            <div className="text-gray-500">Deep knowledge of Chicago neighborhoods and trends.</div>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-3xl mb-2">🤝</span>
            <div className="font-semibold mb-1">White Glove Service</div>
            <div className="text-gray-500">Personalized, attentive support from start to finish.</div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-lg shadow p-6 flex flex-col gap-2">
                <div className="text-lg italic text-gray-700">"{t.quote}"</div>
                <div className="text-sm text-primary font-semibold mt-2">{t.client}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="my-12 bg-primary text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold">Ready to buy or sell?</div>
          <Link href="/contact" className="bg-white text-primary px-6 py-3 rounded font-semibold hover:bg-gray-100 transition">Contact Sonya</Link>
        </section>
      </main>
      {/* Value Proposition Section - Full Bleed */}
      <section className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center my-16">
        <img
          src="/images/valueprop.jpg"
          alt="Modern kitchen"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 w-full flex flex-col items-center justify-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">
            A COMPREHENSIVE APPROACH TO REAL ESTATE
          </h2>
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
            {/* Sales */}
            <div className="flex-1 flex flex-col items-center">
              <div className="font-semibold text-lg text-white mb-2">SALES</div>
              <div className="text-white mb-4">Search for your next home</div>
              <Link href="/listings" className="border border-white text-white px-5 py-2 rounded font-semibold hover:bg-white hover:text-primary transition">Search Now</Link>
            </div>
            {/* Property Management */}
            <div className="flex-1 flex flex-col items-center">
              <div className="font-semibold text-lg text-white mb-2">PROPERTY MANAGEMENT</div>
              <div className="text-white mb-4">Learn what we can do for you</div>
              <Link href="/contact" className="border border-white text-white px-5 py-2 rounded font-semibold hover:bg-white hover:text-primary transition">Learn More</Link>
            </div>
            {/* Rentals */}
            <div className="flex-1 flex flex-col items-center">
              <div className="font-semibold text-lg text-white mb-2">RENTALS</div>
              <div className="text-white mb-4">Find your next rental with us</div>
              <Link href="/listings" className="border border-white text-white px-5 py-2 rounded font-semibold hover:bg-white hover:text-primary transition">Search Now</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Chicago Neighborhoods Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">Explore Chicago Neighborhoods</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Addison */}
          <div className="relative rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
            <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Addison" width={600} height={192} className="h-48 w-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
              <div className="font-bold text-lg text-white">Addison</div>
              <div className="text-white text-sm">Addison Real Estate</div>
            </div>
          </div>
          {/* Streeterville */}
          <div className="relative rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
            <Image src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80" alt="Streeterville" width={600} height={192} className="h-48 w-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
              <div className="font-bold text-lg text-white">Streeterville</div>
              <div className="text-white text-sm">Streeterville Real Estate</div>
            </div>
          </div>
          {/* Naperville */}
          <div className="relative rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
            <Image src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80" alt="Naperville" width={600} height={192} className="h-48 w-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
              <div className="font-bold text-lg text-white">Naperville</div>
              <div className="text-white text-sm">Naperville Real Estate</div>
            </div>
          </div>
          {/* Lincoln Park */}
          <div className="relative rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
            <Image src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Lincoln Park" width={600} height={192} className="h-48 w-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
              <div className="font-bold text-lg text-white">Lincoln Park</div>
              <div className="text-white text-sm">Lincoln Park Real Estate</div>
            </div>
          </div>
          {/* Avondale */}
          <div className="relative rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
            <Image src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80" alt="Avondale" width={600} height={192} className="h-48 w-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
              <div className="font-bold text-lg text-white">Avondale</div>
              <div className="text-white text-sm">Avondale Real Estate</div>
            </div>
          </div>
          {/* Waukegan */}
          <div className="relative rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
            <Image src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=600&q=80" alt="Waukegan" width={600} height={192} className="h-48 w-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
              <div className="font-bold text-lg text-white">Waukegan</div>
              <div className="text-white text-sm">Waukegan Real Estate</div>
            </div>
          </div>
          {/* Gurnee */}
          <div className="relative rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
            <Image src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80" alt="Gurnee" width={600} height={192} className="h-48 w-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
              <div className="font-bold text-lg text-white">Gurnee</div>
              <div className="text-white text-sm">Gurnee Real Estate</div>
            </div>
          </div>
          {/* Northfield */}
          <div className="relative rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
            <Image src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80" alt="Northfield" width={600} height={192} className="h-48 w-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
              <div className="font-bold text-lg text-white">Northfield</div>
              <div className="text-white text-sm">Northfield Real Estate</div>
            </div>
          </div>
          {/* Logan Square */}
          <div className="relative rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
            <Image src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=600&q=80" alt="Logan Square" width={600} height={192} className="h-48 w-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
              <div className="font-bold text-lg text-white">Logan Square</div>
              <div className="text-white text-sm">Logan Square Real Estate</div>
            </div>
          </div>
          {/* Lincoln Square */}
          <div className="relative rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
            <Image src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80" alt="Lincoln Square" width={600} height={192} className="h-48 w-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
              <div className="font-bold text-lg text-white">Lincoln Square</div>
              <div className="text-white text-sm">Lincoln Square Real Estate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
