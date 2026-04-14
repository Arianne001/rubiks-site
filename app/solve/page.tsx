"use client"

export default function Solve() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-200 p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">🛠️ Solve Guide</h1>

      <div className="max-w-4xl mx-auto space-y-8 leading-relaxed">

        <p>
          Solving a Rubik’s Cube requires a structured approach. The most common beginner method is the layer-by-layer method, which breaks the solve into manageable steps.
        </p>

        <p>
          The first step is creating a white cross by aligning edge pieces with their corresponding centers. This forms the foundation of the solve.
        </p>

        <p>
          Next, the first layer is completed by inserting corner pieces into their correct positions. This step requires understanding how pieces move through algorithms.
        </p>

        <p>
          The middle layer is solved by placing edge pieces using specific sequences of moves. This step builds upon the structure established in earlier stages.
        </p>

        <p>
          The final layer involves orienting and permuting the remaining pieces. Advanced methods like CFOP break this into OLL and PLL stages for efficiency.
        </p>

        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold mb-4">🎥 Full Tutorial</h2>
          <iframe
            className="mx-auto rounded-xl"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7Ron6MN45LY"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </main>
  )
}
