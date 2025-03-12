import { useRef } from "react";

function SearchBar({ query, setQuery, handleSearchSubmit }) {
  const searchInputRef = useRef(null);

  const clearSearch = () => {
    setQuery("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <form
      className="flex items-center gap-2 w-full relative"
      onSubmit={handleSearchSubmit}
    >
      <label htmlFor="default-search" className="sr-only">
        Search For a Product:
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          placeholder="Search for a product"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref={searchInputRef}
          className="w-full min-w-64 p-2 ps-10 text-sm text-gray-900 bg-gray-50 rounded-md border focus:border-gray-500 focus:outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            <svg
              className="w-4 h-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 10l5-5m-5 5l-5 5m5-5l-5-5m5 5l5 5"
              />
            </svg>
          </button>
        )}
      </div>
    </form>
  );
}

export default SearchBar;
