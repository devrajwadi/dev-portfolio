"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="w-full p-4 fixed top-0 left-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-gray-800">
        <nav
          className="max-w-5xl mx-auto flex justify-between items-center"
          aria-label="Primary Navigation"
        >
          <h1 className="text-lg font-bold">Dev Rajwadi</h1>
          <div className="space-x-6 text-sm">
            <Link
              href="#projects"
              aria-label="Navigate to Projects section"
              className="hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              aria-current="page"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              aria-label="Navigate to Contact section"
              className="hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              Contact
            </Link>
            <a
              href="/Dev_Rajwadi_Resume.pdf"
              className="hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Resume PDF in new tab"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <main className="bg-[#0f0f0f] text-white min-h-screen font-sans pt-20">
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I'm <span className="text-blue-500">Dev Rajwadi</span>
          </h1>
          <p className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed font-light tracking-wide">
            🚀 Aspiring{" "}
            <span className="font-semibold text-white">Frontend Developer</span>{" "}
            |{" "}
            <span className="font-semibold text-white">
              MERN Stack Enthusiast
            </span>{" "}
            | <span className="font-semibold text-white">Java &amp; DSA</span>
            <br />
            I'm a 3rd-year Computer Science undergrad passionate about building
            fast, scalable, and user-friendly web apps. Skilled in{" "}
            <code className="font-mono text-blue-400">React.js</code>,{" "}
            <code className="font-mono text-blue-400">Next.js</code>,{" "}
            <code className="font-mono text-blue-400">Node.js</code>, and{" "}
            <code className="font-mono text-blue-400">MongoDB</code>, with
            hands-on full-stack MERN experience.
            <br />
            I enjoy solving problems through coding challenges and building
            meaningful tools — like a movie watchlist or AI-powered mental
            health screener.
            <br />
            Currently exploring cloud, AI, and system design, while preparing
            for impactful software roles at top tech companies.
            <br />
            Always learning, open to internships, collaborations, and
            mentorship. Let’s connect and build something great! 💡
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-[#121212]">
          <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
            {/* Project 1 */}
            <div className="bg-[#1e1e1e] p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition">
              <h3 className="text-xl font-bold mb-2">🎬 Movie Watchlist</h3>
              <p className="text-gray-400 text-sm">
                Full-stack MERN app to search, save, and track movies.
                Integrated OMDb API, backend persistence, and responsive UI.
              </p>
              <div className="text-sm mt-3 text-blue-400">
                <Link
                  href="https://github.com/devrajwadi/movies-watchlist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  GitHub
                </Link>{" "}
                &nbsp;|&nbsp;
                <Link
                  href="https://movies-watchlist-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  Live Demo
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#1e1e1e] p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition">
              <h3 className="text-xl font-bold mb-2">
                🧠 Unwire – LLM Mental Health Tool
              </h3>
              <p className="text-gray-400 text-sm">
                AI-powered mental health screener built using BERT and NLP,
                offering real-time feedback and resources.
              </p>
              <div className="text-sm mt-3 text-blue-400">
                <Link
                  href="https://github.com/devrajwadi/MENTAL-LLM/tree/main/Mental-LLM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  GitHub
                </Link>{" "}
                &nbsp;|&nbsp;
                <Link
                  href="#"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <footer
          id="contact"
          className="text-center py-10 text-sm text-gray-500"
          aria-label="Contact information and social links"
        >
          <p>
            Let's connect:{" "}
            <a
              href="mailto:devrajwadi11@gmail.com"
              className="underline hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              devrajwadi11@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://github.com/devrajwadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              GitHub
            </a>{" "}
            &nbsp;|&nbsp;
            <a
              href="https://linkedin.com/in/dev-rajwadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              LinkedIn
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
