export interface MediaItem {
  Title: string
  Year: string
  imdbID: string
  Type: "movie" | "series"
  Poster: string
}

export interface MediaApiResponse {
  Search: MediaItem[]
  totalResults: string
  Response: "True" | "False"
  Error?: string
}
