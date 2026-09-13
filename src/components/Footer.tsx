import footerLogo from "../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-12 mt-20 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="max-w-sm">
            <img src={footerLogo} alt="Dev Stack" className="h-8 w-auto" />
            <p className="mt-4 text-sm text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-6 flex items-center gap-6 text-sm font-semibold text-slate-700">
              <a href="#" className="hover:text-slate-400">
                GitHub
              </a>
              <a href="#" className="hover:text-slate-400 ">
                Twitter
              </a>
              <a href="#" className="hover:text-slate-400 ">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-20">
            <div>
              <h3 className="text-xs font-bold text-slate-900">
                PRODUCT
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-slate-800 ">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-800 ">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-800 ">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-900">
                COMPANY
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-slate-800">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-800">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-800">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-900">
                LEGAL
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-500">
                <li>
                  <a href="#" className="hover:text-slate-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-slate-800">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}