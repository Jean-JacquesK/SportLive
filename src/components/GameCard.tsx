type Team = {
  name: string
  score: number | null
}

type GameCardProps = {
  homeTeam: Team
  awayTeam: Team
  status: "LIVE" | "FINAL" | "UPCOMING"
  clock?: string
}

const GameCard = ({ homeTeam, awayTeam, status, clock }: GameCardProps) => {

  const homeWin = status === "FINAL" && homeTeam.score !== null && awayTeam.score !== null && homeTeam.score > awayTeam.score
  const awayWin = status === "FINAL" && homeTeam.score !== null && awayTeam.score !== null && awayTeam.score > homeTeam.score

  return (
    <div className="w-120 mx-auto px-4 py-3">
      <div className="w-full text-center mx-auto bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4">
        
        {/* Status */}
        <div className="flex items-center gap-2 mb-3">
          {status === "LIVE" ? (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-red-500 text-white tracking-wide">
              LIVE
            </span>
          ) : status === "UPCOMING" ? (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-orange-400 dark:bg-neutral-800 text-white dark:text-neutral-400 border border-orange-400 dark:border-neutral-700">
              {status}
            </span>
          ) : (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
              {status}
            </span>
          )}
          {status === "LIVE" && clock && (
            <span className="text-[13px] text-neutral-500 dark:text-neutral-400">
              {clock}
            </span>
          )}
        </div>

        {/* Teams */}
        <div className="flex justify-center items-center gap-2.5">
          
          {/* Home team */}
          <div className="flex items-center justify-between gap-3">
            <span className={`text-[15px] font-medium ${homeWin ? "text-green-500" : "text-neutral-900 dark:text-neutral-100"}`}>
              {homeTeam.name}
            </span>
            <span className="text-[22px] font-medium text-neutral-900 dark:text-neutral-100 min-w-[28px] text-right">
              {homeTeam.score !== null ? homeTeam.score : "-"}
            </span>
          </div>

          {/* Divider */}
          <div className="w-1 h-px bg-neutral-500 dark:bg-neutral-800" />

          {/* Away team */}
          <div className="flex items-center justify-between gap-3">
            <span className="text-[22px] font-medium text-neutral-900 dark:text-neutral-100 min-w-[28px] text-left">
              {awayTeam.score !== null ? awayTeam.score : "-"}
            </span>
            <span className={`text-[15px] font-medium ${awayWin ? "text-green-500" : "text-neutral-900 dark:text-neutral-100"}`}>
              {awayTeam.name}
            </span>
          </div>

        </div>
      </div>
    </div>  
  )
}

export default GameCard 