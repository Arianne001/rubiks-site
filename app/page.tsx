export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-10 flex flex-col items-center justify-center">

      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center">
        🧊 Rubik’s Cube Guide
      </h1>

      <p className="text-lg md:text-xl mb-12 max-w-2xl text-center text-gray-700">
        Explore the Rubik’s Cube — from its history and background to the
        knowledge and mathematical principles behind solving it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl">

        {/* History */}
        <a href="/funfacts" className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition text-center">
          <div className="text-5xl mb-4">📜</div>
          <h2 className="text-2xl font-bold mb-2">History & Background</h2>
          <p className="text-gray-600">Origins, global rise, and cultural impact.</p>
        </a>

        {/* Basics */}
        <a href="/basics" className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition text-center">
          <div className="text-5xl mb-4">🧠</div>
          <h2 className="text-2xl font-bold mb-2">Basics</h2>
          <p className="text-gray-600">Understand how the cube works.</p>
        </a>

        {/* Solve */}
        <a href="/solve" className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition text-center">
          <div className="text-5xl mb-4">🛠️</div>
          <h2 className="text-2xl font-bold mb-2">Solve</h2>
          <p className="text-gray-600">Step-by-step solving guide.</p>
        </a>

        {/* NEW MATH */}
        <a href="/math" className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition text-center">
          <div className="text-5xl mb-4">🔢</div>
          <h2 className="text-2xl font-bold mb-2">Mathematics</h2>
          <p className="text-gray-600">Explore the math behind the cube.</p>
        </a>

      </div>

    </main>
  )
}
