import appStore from "@/assets/store/app-store.svg"
import playStore from "@/assets/store/play-store.svg"
import microsoftStore from "@/assets/store/windows-store.svg"
import imgFacebook from "@/assets/social/facebook-white.svg"
import imgTwitter from "@/assets/social/twitter-white.svg"
import imgInstagram from "@/assets/social/instagram-white.svg"

export default function Footer() {
  return (
    <footer className="footer fixed left-0 right-0 bottom-0 bg-gray-900">
      <div className="container mx-auto p-4">
        <nav className="mb-5">
          <ul className="flex gap-4 mb-5">
            <li>
              <a className="text-white" href="#">
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white before:content-['|'] before:pr-4"
                href="#"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                className="text-white before:content-['|'] before:pr-4"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-white before:content-['|'] before:pr-4"
                href="#"
              >
                Collection Statement
              </a>
            </li>
            <li>
              <a
                className="text-white before:content-['|'] before:pr-4"
                href="#"
              >
                Help
              </a>
            </li>
            <li>
              <a
                className="text-white before:content-['|'] before:pr-4"
                href="#"
              >
                Manage Account
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-between">
          <nav className="social-media basis-auto">
            <ul className="flex justify-start gap-4">
              <li>
                <a href="#">
                  <img className="w-8 h-8" src={imgFacebook} alt="Facebook" />
                </a>
              </li>
              <li>
                <a>
                  <img className="w-8 h-8" src={imgTwitter} alt="Twitter" />
                </a>
              </li>
              <li>
                <a>
                  <img className="w-8 h-8" src={imgInstagram} alt="Instagram" />
                </a>
              </li>
            </ul>
          </nav>
          <nav className="app-stores basis-auto">
            <ul className="flex justify-start gap-4">
              <li>
                <a href="#">
                  <img src={appStore} alt="App Store" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={playStore} alt="Play Store" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={microsoftStore} alt="Microsoft Store" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
