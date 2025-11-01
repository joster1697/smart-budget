import { IconBellRinging } from "@tabler/icons-react";

function Searchbar() {
  return (
    <div className="flex items-center w-full justify-between px-4 bg-white-800 py-2 rounded ">
      <div className="relative flex items-center flex-1 border border-gray-300 rounded pl-3 bg-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fffffc"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-search"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
        <input
          type="text"
          placeholder="Search Transactions, budgets, etc..."
          className="search-input p-2 w-100 ml-2 bg-gray-500 focus:outline-none"
        />
      </div>

      <p className="text-md text-white-500 ml-4 flex items-center">
        <IconBellRinging stroke={2} />
      </p>
    </div>
  );
}

export default Searchbar;
