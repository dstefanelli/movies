import Loader from "../../components/atoms/Loader"
import ErrorMessage from "../../components/molecules/ErrorMessage"
import MediaCard from "../../components/molecules/MediaCard"
import { useSearchMediaQuery } from "./mediaApiSlice"

interface MediaProps {
  search: string
  type?: "movie" | "series"
}

export default function Media({ search, type }: MediaProps) {
  const { data, isLoading, isError } = useSearchMediaQuery({ search, type })

  if (isLoading) return <Loader />
  if (isError || data?.Response === "False")
    return <ErrorMessage message={data?.Error || "An error occurred"} />

  return (
    <div className="media-list flex gap-4">
      {data?.Search.map(item => <MediaCard key={item.imdbID} media={item} />)}
    </div>
  )
}
