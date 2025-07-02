type Props = {
  image: string;
  price: string;
  beds: number;
  baths: number;
  address: string;
  description: string;
};

export default function PropertyCard({ image, price, beds, baths, address, description }: Props) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <img src={image} alt={address} className="h-48 w-full object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <div className="font-semibold text-lg text-primary mb-1">{price}</div>
        <div className="text-gray-700 mb-1">{address}</div>
        <div className="text-xs text-gray-500 mb-2">{beds} beds &bull; {baths} baths</div>
        <div className="text-sm text-gray-600 flex-1">{description}</div>
      </div>
    </div>
  );
} 