export default function FunFacts() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 p-10">

      <h1 className="text-4xl font-bold mb-10 text-center">
        🧊 The Rubik’s Cube: History, Background & Global Fascination
      </h1>

      <div className="max-w-4xl mx-auto space-y-10 leading-relaxed text-gray-800">

        {/* ORIGINS */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">📜 Origins and Invention</h2>

          <p>
            The Rubik’s Cube was invented in 1974 by Ernő Rubik, a Hungarian architect and professor.
            At the time, Rubik was teaching students about spatial relationships and three-dimensional movement.
            He wanted a hands-on object that could demonstrate how individual parts could move independently
            while still forming a complete structure.
          </p>

          <p className="mt-4">
            What he created was something far more powerful than a classroom tool. The cube’s rotating mechanism—
            simple in concept but incredibly clever in design—allowed each section to move without the entire
            structure falling apart. This innovation was groundbreaking and later patented.
          </p>

          <p className="mt-4">
            Interestingly, Rubik himself didn’t initially realize how difficult his invention was. After scrambling
            the cube for the first time, it reportedly took him over a month to restore it. This moment marked the
            beginning of what would become one of the most famous puzzles in history.
          </p>

          <p className="mt-4">
            Originally called the “Magic Cube,” it was renamed the Rubik’s Cube when it was licensed for international
            distribution. The new name helped establish a strong identity, turning both the object and its creator
            into global icons.
          </p>
        </section>

        {/* GLOBAL RISE */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">🌍 Global Rise to Fame</h2>

          <p>
            The Rubik’s Cube quickly transformed from a teaching experiment into a worldwide phenomenon.
            By the late 1970s and early 1980s, it had spread across continents, captivating people of all ages.
          </p>

          <p className="mt-4">
            Its appeal was universal. You didn’t need special knowledge or language skills to understand it—
            just curiosity and patience. Bright colors and smooth movements made it visually engaging,
            while the challenge of solving it kept people hooked.
          </p>

          <p className="mt-4 font-semibold">During the height of its popularity:</p>

          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>It was featured in television shows, advertisements, and magazines</li>
            <li>Schools began using it as a learning tool</li>
            <li>Competitions and informal challenges became common</li>
          </ul>

          <p className="mt-4">
            The cube became a defining symbol of the 1980s, often associated with creativity,
            intelligence, and problem-solving. Even as trends changed, the cube never truly disappeared.
          </p>
        </section>

        {/* SPEEDCUBING */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">🏆 The World of Speedcubing</h2>

          <p>
            Over time, solving the cube evolved from a casual pastime into a highly competitive activity
            known as speedcubing. Today, official competitions are organized worldwide.
          </p>

          <p className="mt-4">
            Speedcubing combines mental sharpness with physical skill. Competitors must quickly recognize
            patterns and execute precise hand movements to solve the cube in the shortest time possible.
          </p>

          <p className="mt-4 font-semibold">Modern competitions include:</p>

          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Solving with one hand</li>
            <li>Solving while blindfolded</li>
            <li>Solving larger and more complex cubes</li>
            <li>Solving multiple cubes in a row</li>
          </ul>

          <p className="mt-4">
            These events bring together people from around the world, creating a strong and supportive community.
          </p>
        </section>

        {/* CULTURE */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">🎨 Cultural Impact and Influence</h2>

          <p>
            The Rubik’s Cube has grown far beyond its identity as a puzzle. It has become a cultural icon
            recognized across the globe.
          </p>

          <p className="mt-4 font-semibold">It frequently appears in:</p>

          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Movies and television shows as a symbol of intelligence</li>
            <li>Art exhibitions and large mosaic projects</li>
            <li>Educational environments promoting problem-solving</li>
          </ul>

          <p className="mt-4">
            Artists use cubes to create portraits, while designers invent new variations,
            expanding the original concept in creative ways.
          </p>
        </section>

        {/* FUN FACTS */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">⚡ Fun Facts</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>The Rubik’s Cube is the best-selling puzzle toy in history</li>
            <li>Over 450 million cubes have been sold worldwide</li>
            <li>The fastest solves are under 4 seconds</li>
            <li>Some people can solve it blindfolded</li>
            <li>Robots can solve it in under one second</li>
            <li>There are many variations including mirror and pyramid cubes</li>
          </ul>
        </section>

        {/* WHY IT ENDURES */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">🌟 Why the Rubik’s Cube Endures</h2>

          <p>
            What makes the Rubik’s Cube so special is its timeless appeal. It doesn’t rely on technology,
            batteries, or language—it’s purely mechanical, yet endlessly engaging.
          </p>

          <p className="mt-4">
            Every person who picks up a cube has a unique experience. Some see it as a challenge,
            others find it relaxing, and many become deeply invested in mastering it.
          </p>

          <p className="mt-4 font-semibold text-center">
            Complex problems can be solved — one move at a time.
          </p>
        </section>

      </div>
    </main>
  )
}
