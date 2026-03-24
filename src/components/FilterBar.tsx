type FilterValue = "ALL" | "LIVE" | "UPCOMING" | "FINAL"

type FilterBarProps = {
  filter: FilterValue
  onChange: (value: FilterValue) => void
}

export const FilterBar = ({ filter, onChange }: FilterBarProps) => {
  return (
    <div>
        <div className="flex justify-center items-center gap-4 mb-4">
            {["ALL", "LIVE", "UPCOMING", "FINAL"].map(value => (
                <button
                    key={value}
                    className={`px-3 py-1 rounded-full border cursor-pointer hover:bg-blue-900 hover:text-white ${
                        value === filter
                            ? "bg-blue-900 text-white border-blue-900"
                            : "bg-white border-neutral-200 text-neutral-900"
                    }`}
                    onClick={() => onChange(value as FilterValue)}
                >
                    {value}
                </button>
            ))}
        </div>
    </div>
  )
}
