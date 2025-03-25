import { useSearchMediaQuery } from "./mediaApiSlice"
import { useDispatch, useSelector } from "react-redux"
import { selectSearchTerm, setSearchTerm } from "./mediaSearchSlice"
import { useDebounce } from "../../hooks/useDebounce"
import Loader from "../../components/atoms/Loader"
import ErrorMessage from "../../components/molecules/ErrorMessage"
import MediaCard from "../../components/molecules/MediaCard"

interface Props {
  type?: "movie" | "series" | "episode" | ""
}

export default function MediaSearch({ type }: Props) {
  const dispatch = useDispatch()
  const searchTerm = useSelector(selectSearchTerm)
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const { data, isLoading, isError } = useSearchMediaQuery({
    search: debouncedSearchTerm,
    type,
  })

  return (
    <div className="media-wrapper">
      <div className="search-bar py-4 bg-gray-200">
        <div className="container mx-auto">
          <input
            className="p-2 bg-white rounded border border-gray-300"
            type="text"
            value={searchTerm}
            onChange={e => dispatch(setSearchTerm(e.target.value))}
            placeholder="Search by title..."
          />
        </div>
      </div>
      <div className="container mx-auto p-4">
        {isLoading && <Loader />}
        {isError || data?.Response === "False" ? (
          <ErrorMessage message={data?.Error || "An error occurred"} />
        ) : (
          <div className="media-list flex gap-4">
            {data?.Search.map(item => (
              <MediaCard key={item.imdbID} media={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
