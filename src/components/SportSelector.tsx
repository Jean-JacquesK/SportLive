import { Sport } from "../types/sports"

type SportSelectorProps = {
  sports: Sport[]
  selected: Sport
  onSelect: (sport: Sport) => void
}

export const SportSelector = ({ sports, selected, onSelect }: SportSelectorProps) => {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 sticky top-0 bg-white py-3 z-10 ">
      {sports.map(sport => (
        <button
          key={sport.id}
          className={`flex items-center gap-1 px-3 py-1 rounded-full border cursor-pointer hover:bg-blue-900 hover:text-white ${
            sport.id === selected.id
              ? "bg-blue-900 text-white border-blue-900"
              : "bg-white border-neutral-200 text-neutral-900"
          }`}
          onClick={() => onSelect(sport)}
        >
          <span>{sport.emoji}</span>
          <span>{sport.label}</span>
        </button>
      ))}
    </div>
  )
}
