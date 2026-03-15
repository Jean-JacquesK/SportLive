export interface Game {
  id: string
  uid: string
  date: string
  name: string
  shortName: string
  season: Season
  week: Week2
  competitions: Competition[]
  links: Link3[]
  status: Status2
}

export interface Season {
  year: number
  type: number
  slug: string
}

export interface Week2 {
  number: number
}

export interface Competition {
  id: string
  uid: string
  date: string
  attendance: number
  type: Type2
  timeValid: boolean
  neutralSite: boolean
  conferenceCompetition: boolean
  playByPlayAvailable: boolean
  recent: boolean
  venue: Venue
  competitors: Competitor[]
  notes: Note[]
  status: Status
  broadcasts: Broadcast[]
  leaders: Leader[]
  format: Format
  startDate: string
  broadcast: string
  geoBroadcasts: GeoBroadcast[]
  highlights: any[]
}

export interface Type2 {
  id: string
  abbreviation: string
}

export interface Venue {
  id: string
  fullName: string
  address: Address
  indoor: boolean
}

export interface Address {
  city: string
  state: string
  country: string
}

export interface Competitor {
  id: string
  uid: string
  type: string
  order: number
  homeAway: string
  winner: boolean
  team: Team
  score: number | null
  linescores: Linescore[]
  statistics: any[]
  records: Record[]
}

export interface Team {
  id: string
  uid: string
  location: string
  name: string
  abbreviation: string
  displayName: string
  shortDisplayName: string
  color: string
  alternateColor: string
  isActive: boolean
  venue: Venue2
  links: Link[]
  logo: string
}

export interface Venue2 {
  id: string
}

export interface Link {
  rel: string[]
  href: string
  text: string
  isExternal: boolean
  isPremium: boolean
}

export interface Linescore {
  value: number
  displayValue: string
  period: number
}

export interface Record {
  name: string
  abbreviation?: string
  type: string
  summary: string
}

export interface Note {
  type: string
  headline: string
}

export interface Status {
  clock: number
  displayClock: string
  period: number
  type: Type3
  isTBDFlex: boolean
}

export interface Type3 {
  id: string
  name: string
  state: string
  completed: boolean
  description: string
  detail: string
  shortDetail: string
}

export interface Broadcast {
  market: string
  names: string[]
}

export interface Leader {
  name: string
  displayName: string
  shortDisplayName: string
  abbreviation: string
  leaders: Leader2[]
}

export interface Leader2 {
  displayValue: string
  value: number
  athlete: Athlete
  team: Team3
}

export interface Athlete {
  id: string
  fullName: string
  displayName: string
  shortName: string
  links: Link2[]
  headshot: string
  jersey?: string
  position: Position
  team: Team2
  active: boolean
}

export interface Link2 {
  rel: string[]
  href: string
}

export interface Position {
  abbreviation: string
}

export interface Team2 {
  id: string
}

export interface Team3 {
  id: string
}

export interface Format {
  regulation: Regulation
}

export interface Regulation {
  periods: number
}

export interface GeoBroadcast {
  type: Type4
  market: Market
  media: Media
  lang: string
  region: string
}

export interface Type4 {
  id: string
  shortName: string
}

export interface Market {
  id: string
  type: string
}

export interface Media {
  shortName: string
}

export interface Link3 {
  language: string
  rel: string[]
  href: string
  text: string
  shortText: string
  isExternal: boolean
  isPremium: boolean
}

export interface Status2 {
  clock: number
  displayClock: string
  period: number
  type: Type5
}

export interface Type5 {
  id: string
  name: string
  state: string
  completed: boolean
  description: string
  detail: string
  shortDetail: string
}

export interface Provider {
  id: string
  name: string
  displayName: string
  priority: number
  logos: Logo2[]
}

export interface Logo2 {
  href: string
  rel: string[]
}
