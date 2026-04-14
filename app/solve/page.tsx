import Image from "next/image"

export default function SolvePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 p-10">

      <h1 className="text-4xl font-bold mb-10 text-center">
        🛠️ Step-by-Step Rubik’s Cube Solution
      </h1>

      <div className="max-w-4xl mx-auto space-y-12 text-gray-800">

        {/* STEP 1 */}
        <section className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-2xl font-bold">Step 1: White Cross</h2>

          <p>
            Create a white “+” shape and align edges with center colors.
          </p>

          <Image
            src="/images/white-cross.png"
            alt="White Cross"
            width={500}
            height={300}
            className="mx-auto"
          />

          <iframe
            className="w-full h-64 rounded-xl"
            src="https://www.youtube.com/embed/7Ron6MN45LY"
            title="White Cross Tutorial"
            allowFullScreen
          />
        </section>

        {/* STEP 2 */}
        <section className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-2xl font-bold">Step 2: White Corners</h2>

          <p>Complete the first layer.</p>

          <p className="font-mono bg-gray-100 p-2 text-center rounded">
            R' D' R D
          </p>

          <Image
            src="/images/white-corners.png"
            alt="White Corners"
            width={500}
            height={300}
            className="mx-auto"
          />

          <iframe
            className="w-full h-64 rounded-xl"
            src="https://www.youtube.com/embed/7Ron6MN45LY"
            title="White Corners"
            allowFullScreen
          />
        </section>

        {/* STEP 3 */}
        <section className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-2xl font-bold">Step 3: Middle Layer</h2>

          <p className="font-mono bg-gray-100 p-2 text-center rounded">
            U R U' R' U' F' U F
          </p>

          <p className="font-mono bg-gray-100 p-2 text-center rounded">
            U' L' U L U F U' F'
          </p>

          <Image
            src="/images/middle-layer.png"
            alt="Middle Layer"
            width={500}
            height={300}
            className="mx-auto"
          />

          <iframe
            className="w-full h-64 rounded-xl"
            src="https://www.youtube.com/embed/7Ron6MN45LY"
            title="Middle Layer"
            allowFullScreen
          />
        </section>

        {/* STEP 4 */}
        <section className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-2xl font-bold">Step 4: Yellow Cross</h2>

          <p className="font-mono bg-gray-100 p-2 text-center rounded">
            F R U R' U' F'
          </p>

          <Image
            src="/images/yellow-cross.png"
            alt="Yellow Cross"
            width={500}
            height={300}
            className="mx-auto"
          />

          <iframe
            className="w-full h-64 rounded-xl"
            src="https://www.youtube.com/embed/7Ron6MN45LY"
            title="Yellow Cross"
            allowFullScreen
          />
        </section>

        {/* STEP 5 */}
        <section className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-2xl font-bold">Step 5: Yellow Face</h2>

          <p className="font-mono bg-gray-100 p-2 text-center rounded">
            R U R' U R U2 R'
          </p>

          <Image
            src="/images/yellow-face.png"
            alt="Yellow Face"
            width={500}
            height={300}
            className="mx-auto"
          />
        </section>

        {/* STEP 6 */}
        <section className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-2xl font-bold">Step 6: Yellow Edges</h2>

          <p className="font-mono bg-gray-100 p-2 text-center rounded">
            R U R' U R U2 R' U
          </p>

          <Image
            src="/images/yellow-edges.png"
            alt="Yellow Edges"
            width={500}
            height={300}
            className="mx-auto"
          />
        </section>

        {/* STEP 7 */}
        <section className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-2xl font-bold">🎉 Final Step</h2>

          <p className="font-mono bg-gray-100 p-2 text-center rounded">
            U R U' L' U R' U' L
          </p>

          <Image
            src="/images/final-step.png"
            alt="Final Step"
            width={500}
            height={300}
            className="mx-auto"
          />
        </section>

      </div>

    </main>
  )
}
