import filmRoll from "../../assets/film_roll.png"

export interface Props {
  className?: string
  width?: number
  height?: number
  alt?: string
}

export default function FilmRoll({ className, width, height, alt }: Props) {
  return (
    <img
      className={className ?? "inline-block"}
      src={filmRoll}
      alt={alt}
      width={width ?? "300px"}
      height={height ?? "300px"}
    />
  )
}
