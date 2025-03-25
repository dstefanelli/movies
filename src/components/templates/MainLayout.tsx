import Header from "../organisms/Header"
import Footer from "../organisms/Footer"
import BannerTop from "../atoms/BannerTop"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-layout">
      <Header />
      <BannerTop text="Popular Titles" />
      <main className="container mx-auto pt-16 px-4">{children}</main>
      <Footer />
    </div>
  )
}
