import { MediaItem } from "../../types/media"

export default function MediaCard({ media }: { media: MediaItem }) {
  return (
    <div className="media-card w-96">
      <img src={media.Poster} alt={media.Title} />
      <p>{media.Title}</p>
    </div>
  )
}
