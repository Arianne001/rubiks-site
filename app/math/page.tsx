export default function MathPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-10">

      <h1 className="text-4xl font-bold mb-10 text-center">
        🧠 The Mathematics Behind the Rubik’s Cube
      </h1>

      <div className="max-w-4xl mx-auto space-y-10 leading-relaxed text-gray-800">

        {/* INTRO */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">🔍 More Than Just a Puzzle</h2>

          <p>
            The Rubik’s Cube is not just a game of trial and error—it is a physical representation
            of structured Mathematics. Every twist follows strict rules, and every scrambled state
            is part of a larger mathematical system.
          </p>

          <p className="mt-4 font-semibold">What makes the cube fascinating is that it combines:</p>

          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Order (fixed rules and constraints)</li>
            <li>Complexity (a massive number of configurations)</li>
            <li>Solvability (a guaranteed path back to order)</li>
          </ul>

          <p className="mt-4">
            This balance is exactly what mathematicians study: systems that seem chaotic
            but are governed by deep structure.
          </p>
        </section>

        {/* GROUP THEORY */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">🔄 Group Theory: The Language of Moves</h2>

          <p>
            At the heart of the cube lies Group Theory, which studies how operations behave when combined.
          </p>

          <p className="mt-4">
            Each move on the cube can be thought of as a transformation. These transformations form
            a mathematical group because they satisfy four key properties:
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-1">
            <li>Closure: Combining two moves gives another valid move sequence</li>
            <li>Identity: Doing nothing leaves the cube unchanged</li>
            <li>Inverse: Every move can be undone</li>
            <li>Associativity: The order of grouping moves doesn’t change the result</li>
          </ul>

          <p className="mt-4">
            Sequences of moves (algorithms) act like functions. Some sequences commute,
            but most do not. This non-commutativity is why solving requires careful planning.
          </p>
        </section>

        {/* CONFIGURATIONS */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">🔢 The Vast Space of Configurations</h2>

          <p className="text-lg font-semibold">
            43,252,003,274,489,856,000 possible states
          </p>

          <p className="mt-4">
            This number comes from counting all the ways the pieces can be arranged,
            while respecting the cube’s constraints:
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-1">
            <li>Corner pieces can be permuted and oriented</li>
            <li>Edge pieces can be permuted and flipped</li>
            <li>Not all combinations are possible due to parity restrictions</li>
          </ul>

          <p className="mt-4">
            For example, you cannot swap just two pieces—this would violate the cube’s structure.
          </p>
        </section>

        {/* GOD NUMBER */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">⚡ God’s Number: Ultimate Efficiency</h2>

          <p className="text-3xl font-bold text-center">20</p>

          <p className="mt-4">
            No matter how scrambled the cube is, there is always a solution in 20 moves or fewer.
          </p>

          <p className="mt-4">
            This was proven in 2010 using massive computational power, showing that even extremely
            complex systems can have elegant limits.
          </p>
        </section>

        {/* ALGORITHMS */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">🧩 Algorithms: Structured Problem Solving</h2>

          <p>
            An algorithm is a fixed sequence of moves designed to achieve a specific result.
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-1">
            <li>Some algorithms only affect corner pieces</li>
            <li>Others swap edges while leaving everything else unchanged</li>
            <li>They allow precise, local control</li>
          </ul>

          <p className="mt-4">
            This reflects a key mathematical idea: breaking a large problem into smaller steps.
          </p>
        </section>

        {/* PERMUTATIONS */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">📐 Symmetry, Permutations, and Constraints</h2>

          <p>
            Each move rearranges pieces and changes orientation, but strict constraints apply:
          </p>

          <ul className="list-disc pl-6 mt-4 space-y-1">
            <li>Total corner twist must remain constant</li>
            <li>Total edge flip must remain constant</li>
            <li>Permutations must have even parity</li>
          </ul>

          <p className="mt-4">
            This means some configurations are impossible through legal moves.
          </p>
        </section>

        {/* ADVANCED */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">🔁 Commutators and Conjugates</h2>

          <p className="text-center font-mono mt-4">A B A⁻¹ B⁻¹</p>
          <p className="text-center text-sm">Commutator</p>

          <p className="text-center font-mono mt-4">A B A⁻¹</p>
          <p className="text-center text-sm">Conjugate</p>

          <p className="mt-4">
            These allow extremely precise manipulation of pieces and enable advanced solving techniques.
          </p>
        </section>

        {/* WHY IT MATTERS */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">🧠 Why This Matters</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Abstraction: understanding transformations</li>
            <li>Pattern recognition</li>
            <li>Logical sequencing</li>
            <li>Strategic thinking</li>
          </ul>

          <p className="mt-4">
            These are used in computer science, engineering, cryptography, and data analysis.
          </p>
        </section>

        {/* CONCLUSION */}
        <section className="bg-white p-6 rounded-2xl shadow text-center">
          <h2 className="text-2xl font-bold mb-4">🌟 A Tangible Mathematical Universe</h2>

          <p>
            The Rubik’s Cube turns abstract mathematics into something physical.
            It is a miniature mathematical universe—one that fits in your hand,
            yet contains incredible depth.
          </p>
        </section>

      </div>
    </main>
  )
}
