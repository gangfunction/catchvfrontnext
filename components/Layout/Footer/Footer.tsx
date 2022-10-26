const Footer = ()=>{
  return(
    <>
      <footer className="relative  translate-y-full  text-center bg-orange-50h-screen">
        <div className="px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <nav className="p-6 border-4 border-gray-900 rounded-3xl">
              <ul className="flex flex-wrap justify-center text-sm font-bold gap-6">
                <li>
                  <a
                    className="text-gray-900 hover:text-gray-900/75"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>

                </li>

                <li>
                  <a
                    className="text-gray-900 transition hover:text-gray-900/75"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Uses
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-900 transition hover:text-gray-900/75"
                    href="https://adaptable-newsboy-3bc.notion.site/Oss-Notice-b2123e2ab84643889436d069f4af4072"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Oss Notice
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-900 transition hover:text-gray-900/75"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </nav>
            <p className="max-w-lg mx-auto text-xs text-gray-500">

              <span className="block mt-4"> &copy; 2022 Catch V </span>
            </p>
          </div>
        </div>
      </footer>

    </>
  )
}
export default Footer;
