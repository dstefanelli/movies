import FilmRoll from "../atoms/FilmRoll"

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="text-center">
      <FilmRoll width={100} height={100} alt="Film roll" />
      <h1 className="text-2xl text-gray-900">{message}</h1>
    </div>
  )
}
