import React from "react";

const EventFilters = ({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
  sortOrder,
  setSortOrder,
  categories,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
      <input
        type="text"
        placeholder="Search by event name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        {categories.map((cat, i) => (
          <option key={i} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        <option value="asc">Sort by Date ↑</option>
        <option value="desc">Sort by Date ↓</option>
      </select>
    </div>
  );
};

export default EventFilters;
