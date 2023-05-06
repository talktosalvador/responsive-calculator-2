function App() {
  return (
    <div className="container font-body">
      <header className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex justify-between">
            <a
              aria-label="Home"
              href="https://github.com/talktosalvador"
              className="font-bold text-base text-gray-400"
            >
              TalkToSalvador
            </a>
            <a
              aria-label="Home"
              href="https://github.com/talktosalvador"
              className="font-bold text-base text-gray-400"
            >
              TalkToSalvador
            </a>
          </nav>
        </div>
      </header>
      <main>
        <div className="flex flex-col justify-center sm:flex-row">
          <div>
            {/* title */}
            <div className="mx-auto text-center p-10">
              <h1 className="font-display text-5xl font-normal py-4">
                <span className="text-blue-400 font-bold">PX </span>to
                <span className="text-blue-400 font-bold"> VW</span>
              </h1>
              <p className="text-gray-400 py-4">
                Pixels to Viewport Width converter <br /> an Responsive
                Calculator
              </p>
            </div>

            {/* features */}
            <div className="m-10 flex flex-col rounded-3xl p-8 bg-blue-100 text-blue-400">
              <h3 className="font-display text-lg">Small business</h3>
              <p className="mt-2 text-base text-blue-300">
                Perfect for small / medium sized businesses.
              </p>
              <ul role="list" className="mt-10 flex flex-col gap-y-3 text-sm">
                <li className="flex">
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 flex-none fill-current stroke-current"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">Send 25 quotes and invoices</span>
                </li>
                <li className="flex">
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 flex-none fill-current stroke-current"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span className="ml-4">Connect up to 5 bank accounts</span>
                </li>
              </ul>
            </div>
          </div>

          {/* inputs */}
          <div className="p-10">
            <div className="relative mx-auto py-4">
              <label
                className="absolute left-14 top-2 bg-white px-2 text-sm font-bold"
                htmlFor="parents"
              >
                parent width
              </label>
              <input
                className="border-blue-200 border-4 rounded-xl h-14 w-full text-lg px-2"
                type="text"
                name="parents"
                id="parents"
              />
            </div>
            <div className="relative mx-auto py-4">
              <label
                className="absolute left-14 top-2 bg-white px-2 text-sm font-bold"
                htmlFor="children"
              >
                children width
              </label>
              <input
                className="border-blue-200 border-4 rounded-xl h-14 w-full text-lg px-2"
                type="text"
                name="children"
                id="parents"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
