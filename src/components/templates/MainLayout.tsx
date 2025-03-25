import Header from "../organisms/Header"
import Footer from "../organisms/Footer"

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-layout">
      <Header />
      <main className="container mx-auto pt-16 px-4">{children}</main>
      <Footer />
    </div>
  )
}
