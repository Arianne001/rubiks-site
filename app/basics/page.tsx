export default function Basics() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">🧠 Cube Fundamentals</h1>

      <div className="max-w-4xl mx-auto space-y-8 leading-relaxed">

        <p>
          A Rubik’s Cube consists of 26 smaller pieces known as cubies. These include center pieces, edge pieces, and corner pieces. The center pieces define the color of each face and do not move relative to one another. Edge pieces contain two colors, while corner pieces contain three.
        </p>

        <p>
          Understanding cube notation is essential for learning algorithms. Each face is represented by a letter: R, L, U, D, F, and B. These letters indicate which face to turn, while additional symbols indicate direction and repetition.
        </p>

        <p>
          The cube can also be studied using mathematical concepts such as group theory. Each move acts as a transformation, and sequences of moves form structured patterns. This mathematical perspective allows for deeper understanding of solving strategies.
        </p>

        <p>
          Solving the cube involves applying algorithms — sequences of moves that manipulate specific pieces while preserving others. Beginners typically use layer-by-layer methods, while advanced solvers use optimized techniques such as CFOP.
        </p>

        <p>
          Efficiency becomes important as solvers improve. Reducing the number of moves and increasing execution speed are key goals in advanced solving.
        </p>

      </div>
    </main>
  )
}
