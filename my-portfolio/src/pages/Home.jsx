export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-[#f5f5f5] text-zinc-900 flex items-center justify-center -mt-20">
      <section className="max-w-4xl mx-auto px-6 text-center">
        {/* כותרת שומרת על הפונט והצבע המגניב */}
        <h1 className="font-harry text-8xl text-yellow-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] mb-6">
          Welcome
        </h1>

        {/* תיאור קצר וקריא */}
        <p className="text-lg md:text-xl text-zinc-700 leading-relaxed max-w-2xl mx-auto mb-10">
          Hey, I’m <span className="font-semibold text-yellow-500">Maayan Ifergan </span>
          a Computer Science student with a real passion for code and self-growth.  
          Feel free to explore and check out my projects 💛.
          <br/> <span className="font-semibold text-yellow-500">Creative mind. Logical heart. Magical code. </span>
        </p>
      </section>
    </main>
  );
}
