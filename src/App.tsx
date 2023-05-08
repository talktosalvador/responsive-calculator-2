const features = [
  {
    id: 1,
    content: 'Can compute multiple values at the same time',
  },
  {
    id: 2,
    content: 'The calculations made are kept',
  },
  {
    id: 3,
    content: 'Even after closing the browser',
  },
  {
    id: 4,
    content: 'Were you wrong? delete only one, the others will stay there',
  },
  {
    id: 5,
    content: 'Copy values with one click',
  },
  {
    id: 6,
    content: 'Copy with or without "vw"',
  },
];

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
        <div className="flex flex-col justify-center sm:flex-row pb-10">
          <div className="sm:w-1/2">
            {/* title */}
            <div className="mx-auto text-center py-10">
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
            <div className="mx-10 rounded-3xl p-8 bg-blue-100 text-blue-400 shadow-lg">
              <h3 className="font-display text-lg">Save your time</h3>
              <p className="mt-2 text-base text-blue-300">
                A good design needs a group of preset values, here we help you
                with that.
              </p>
              <ul role="list" className="mt-10 flex flex-col gap-y-3 text-sm">
                {features.map(event => (
                  <li key={event.id} className="flex">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-current stroke-current text-green-400 bg-blue-50 rounded-xl"
                    >
                      <path
                        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                        strokeWidth="0"
                      ></path>
                      {/* <circle
                        cx="12"
                        cy="12"
                        r="8.25"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></circle> */}
                    </svg>
                    <span className="ml-4">{event.content}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* inputs */}
          <div className="p-10 sm:w-1/2">
            <div className="relative mx-auto py-4">
              <label
                className="absolute left-6 top-2 bg-white px-2 text-sm font-bold"
                htmlFor="parents"
              >
                parent width
              </label>
              <input
                className="border-blue-200 border-4 rounded-xl h-14 w-full text-lg px-2 shadow-md"
                type="text"
                name="parents"
                id="parents"
              />
            </div>
            <div className="relative mx-auto py-4">
              <label
                className="absolute left-6 top-2 bg-white px-2 text-sm font-bold"
                htmlFor="children"
              >
                children width
              </label>
              <input
                className="border-blue-200 border-4 rounded-xl h-14 w-full text-lg px-2 shadow-md"
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
