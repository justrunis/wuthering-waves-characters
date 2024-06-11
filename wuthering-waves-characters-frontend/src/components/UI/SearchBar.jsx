export default function SearchBar({ handleSearch, title }) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <h2 className="text-xl font-bold text-center mt-5">{title}</h2>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded-md"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
