export default function Blog() {
  return (
    <>
      <div className="contents">
        <div className="bg-black">
          <div className="bg-black h-screen">
            <div className="flex flex-col justify-center px-8 bg-black">
              <div className="flex flex-col justify-center max-w-2xl mx-auto mb-4 mt-40">
                <nav className="flex justify-end">
                  <a
                    className="text-slate-800 hover:text-slate-600 font-medium transition-colors duration-200"
                    href="/"
                  >
                    / home
                  </a>
                </nav>
                <h1 className="text-5xl font-bold text-white">Blog</h1>
                <h2 className="text-xl font-medium text-slate-500 mt-2">
                  Insights, projects, and stories.
                </h2>
                <div className="text-md text-slate-200 mt-8 mb-8">
                  <p className="text-base leading-relaxed mt-5 mb-5">
                    Welcome to my blog! Here, I share thoughts on software engineering, technology, and
                    life as a developer.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="bg-gray-800 p-6 rounded-2xl">
                    <h3 className="text-2xl font-bold text-white">
                      How I Built My First Open-Source Project
                    </h3>
                    <p className="text-base text-slate-400 mt-2">
                      A deep dive into the journey of creating an open-source project from scratch, 
                      including challenges and lessons learned.
                    </p>
                    <a
                      className="text-white hover:text-slate-600 font-medium transition-colors duration-200 mt-4 inline-block"
                      href="/blog/how-i-built-my-first-open-source-project"
                    >
                      Read more →
                    </a>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-2xl">
                    <h3 className="text-2xl font-bold text-white">
                      5 Tips to Improve Your Code Quality
                    </h3>
                    <p className="text-base text-slate-400 mt-2">
                      Practical advice on writing cleaner, more maintainable code to enhance your development workflow.
                    </p>
                    <a
                      className="text-white hover:text-slate-600 font-medium transition-colors duration-200 mt-4 inline-block"
                      href="/blog/5-tips-to-improve-your-code-quality"
                    >
                      Read more →
                    </a>
                  </div>
                </div>

                <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mt-8">
                  <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
                  <div className="flex sm:flex-row mb-8 space-x-0 sm:space-x-2 w-full">
                    <a className="pr-4" href="https://www.linkedin.com/in/jakeswinford/">
                      {/* LinkedIn Icon */}
                      <svg
                        fill="#3a3a3a"
                        height="24px"
                        width="24px"
                        viewBox="0 0 455 455"
                        className="fill-zinc-700"
                      >
                        <path
                          d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"
                        ></path>
                        <path
                          d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087 c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345 c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537 c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002 z"
                        ></path>
                      </svg>
                    </a>
                    <a href="https://github.com/JakeSwinford">
                      {/* GitHub Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-zinc-700"
                      >
                        <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
