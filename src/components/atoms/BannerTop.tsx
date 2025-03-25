export default function BannerTop({ text }: { text: string }) {
  return (
    <div className="banner-top  pt-16 bg-blue-500 text-white">
      <div className="container mx-auto">
        <h1 className="py-4 font-medium text-2xl">{text}</h1>
      </div>
    </div>
  )
}
