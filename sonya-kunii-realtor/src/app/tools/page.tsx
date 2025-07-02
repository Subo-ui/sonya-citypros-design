export default function ToolsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Tools & Resources</h1>
      <div className="mb-8">
        <div className="font-semibold mb-1">Mortgage Calculator</div>
        <div className="bg-white border rounded p-4 text-center text-gray-500">
          [Mortgage calculator iframe placeholder]
        </div>
      </div>
      <div className="mb-8">
        <div className="font-semibold mb-1">Office Location</div>
        <iframe
          title="Office Map"
          src="https://www.google.com/maps?q=7240+W+Devon+Ave,+Chicago,+IL+60631&output=embed"
          className="w-full h-64 mt-2 rounded border"
          loading="lazy"
        />
      </div>
      <div className="mb-8">
        <div className="font-semibold mb-1">IDX/MLS Feed</div>
        <div className="bg-white border rounded p-4 text-center text-gray-500">
          [Placeholder for future IDX/MLS integration]
        </div>
      </div>
    </div>
  );
} 