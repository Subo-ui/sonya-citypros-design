import PropertyCard from '@/components/PropertyCard';

const listings = [
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

export default function ListingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Featured Listings</h1>
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <input className="border rounded px-3 py-2 w-full sm:w-64" placeholder="Search by address, neighborhood, etc." />
        <input className="border rounded px-3 py-2 w-full sm:w-40" placeholder="Min Price" />
        <input className="border rounded px-3 py-2 w-full sm:w-40" placeholder="Max Price" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <PropertyCard key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
} 