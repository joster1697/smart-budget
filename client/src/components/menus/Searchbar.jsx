function Searchbar() {
    return (
        <div className="flex justify-content-around w-100">
            <input
                type="text"
                placeholder="Search..."
                className="search-input p-2 border border-gray-300 rounded w-full"
            />
            <p className="text-sm text-gray-500">Notifications</p>
        </div>
    )
}

export default Searchbar;