// resources/js/Components/About/TeamFilter.jsx

const FilterButton = ({ onClick, isActive, children }) => {
    // Base styles for all buttons
    const baseClasses = "px-6 py-2 rounded-full font-semibold text-lg transition-colors duration-300";

    // Conditional styles for active vs. inactive states
    const activeClasses = "bg-blue-600 text-white";
    const inactiveClasses = "bg-gray-200 text-gray-700 hover:bg-gray-300";

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        >
            {children}
        </button>
    );
};


export default function TeamFilter({ activeFilter, onFilterChange }) {
    return (
        <div className="flex justify-center items-center gap-x-4 mb-12">
            <FilterButton
                onClick={() => onFilterChange('executive')}
                isActive={activeFilter === 'executive'}
            >
                Executives
            </FilterButton>

            <FilterButton
                onClick={() => onFilterChange('member')}
                isActive={activeFilter === 'member'}
            >
                Members
            </FilterButton>

             <FilterButton
                onClick={() => onFilterChange('past_executive')}
                isActive={activeFilter === 'past_executive'}
            >
                Past Executives
            </FilterButton>
        </div>
    );
}