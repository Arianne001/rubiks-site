export default function SolvePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 p-10">

      <h1 className="text-4xl font-bold mb-10 text-center">
        🧠 Complete Beginner’s Guide to Solving the Rubik’s Cube
      </h1>

      <div className="max-w-4xl mx-auto space-y-10 text-gray-800 leading-relaxed">

        {/* ================= PART 1 ================= */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-3xl font-bold mb-6">
            🧠 Part 1: Essential Knowledge Before Solving
          </h2>

          {/* Pieces */}
          <h3 className="text-xl font-semibold mt-4 mb-2">🔹 1. Understanding the Pieces</h3>
          <p>A Rubik’s Cube is made up of three types of pieces:</p>

          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><b>Centers:</b> one color, fixed in position</li>
            <li><b>Edges:</b> two colors, between corners</li>
            <li><b>Corners:</b> three colors, at the cube’s corners</li>
          </ul>

          <p className="mt-3 font-semibold">
            👉 Key idea: You are not moving colors—you are moving pieces.
          </p>

          {/* Goal */}
          <h3 className="text-xl font-semibold mt-6 mb-2">🔹 2. The Goal of the Cube</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Each face must have one solid color</li>
            <li>Each piece must match its center color</li>
          </ul>

          {/* Notation */}
          <h3 className="text-xl font-semibold mt-6 mb-2">🔹 3. Cube Notation</h3>
          <p>Moves are written using letters:</p>

          <div className="grid grid-cols-3 gap-2 mt-2">
            <span>R = Right</span>
            <span>L = Left</span>
            <span>U = Up</span>
            <span>D = Down</span>
            <span>F = Front</span>
            <span>B = Back</span>
          </div>

          <p className="mt-2">Modifiers:</p>
          <ul className="list-disc pl-6">
            <li>R' = counterclockwise</li>
            <li>R2 = double turn</li>
          </ul>

          {/* Holding */}
          <h3 className="text-xl font-semibold mt-6 mb-2">🔹 4. Hold the Cube Consistently</h3>
          <ul className="list-disc pl-6">
            <li>Keep the same front and top</li>
            <li>Follow instructions relative to your view</li>
          </ul>

          {/* Layers */}
          <h3 className="text-xl font-semibold mt-6 mb-2">🔹 5. Solve Layer-by-Layer</h3>
          <ul className="list-disc pl-6">
            <li>First layer (white)</li>
            <li>Middle layer</li>
            <li>Last layer</li>
          </ul>
        </section>

        {/* ================= PART 2 ================= */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-3xl font-bold mb-6">
            🚀 Part 2: Step-by-Step Beginner Solution Guide
          </h2>

          <p className="mb-4 font-semibold">
            Notation Reminder: R, L, U, D, F, B (clockwise), ' = counterclockwise, 2 = double
          </p>

          {/* Step 1 */}
          <h3 className="text-xl font-semibold mt-4 mb-2">✅ Step 1: White Cross</h3>
          <p>
            Form a white “+” and match edges with center colors. This step is intuitive.
          </p>

          {/* Step 2 */}
          <h3 className="text-xl font-semibold mt-6 mb-2">✅ Step 2: White Corners</h3>
          <p>Complete the first layer.</p>

          <p className="font-mono bg-gray-100 p-2 rounded mt-2 text-center">
            R' D' R D
          </p>

          {/* Step 3 */}
          <h3 className="text-xl font-semibold mt-6 mb-2">✅ Step 3: Middle Layer</h3>

          <p className="mt-2">Insert to the RIGHT:</p>
          <p className="font-mono bg-gray-100 p-2 rounded text-center">
            U R U' R' U' F' U F
          </p>

          <p className="mt-2">Insert to the LEFT:</p>
          <p className="font-mono bg-gray-100 p-2 rounded text-center">
            U' L' U L U F U' F'
          </p>

          {/* Step 4 */}
          <h3 className="text-xl font-semibold mt-6 mb-2">✅ Step 4: Yellow Cross</h3>
          <p className="font-mono bg-gray-100 p-2 rounded text-center">
            F R U R' U' F'
          </p>

          {/* Step 5 */}
          <h3 className="text-xl font-semibold mt-6 mb-2">✅ Step 5: Yellow Face</h3>
          <p className="font-mono bg-gray-100 p-2 rounded text-center">
            R U R' U R U2 R'
          </p>

          {/* Step 6 */}
          <h3 className="text-xl font-semibold mt-6 mb-2">✅ Step 6: Yellow Edges</h3>
          <p className="font-mono bg-gray-100 p-2 rounded text-center">
            R U R' U R U2 R' U
          </p>

          {/* Step 7 */}
          <h3 className="text-xl font-semibold mt-6 mb-2">🎉 Step 7: Final Corners</h3>
          <p className="font-mono bg-gray-100 p-2 rounded text-center">
            U R U' L' U R' U' L
          </p>

        </section>

      </div>

    </main>
  )
}
