import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-[100dvh] bg-[#f5f5f5] flex flex-col items-center justify-center text-center text-zinc-800 px-6">
      <h1 className="font-harry text-5xl text-yellow-500 drop-shadow-[0_0_10px_rgba(255,215,0,0.4)] mb-10">
        Contact Me 💛
      </h1>

      <div className="space-y-6 text-lg text-left">
        {/* Email */}
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-yellow-500" />
          <div>
            <p className="font-semibold text-zinc-700">Email</p>
            <a
              href="mailto:maayan3330@gmail.com"
              className="text-zinc-600 hover:text-yellow-600 transition"
            >
              maayan3330@gmail.com
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-3">
          <Linkedin className="w-5 h-5 text-yellow-500" />
          <div>
            <p className="font-semibold text-zinc-700">LinkedIn</p>
            <a
            href="https://www.linkedin.com/in/maayan-ifergan-ma132002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-yellow-600 transition"
            >
            linkedin.com/in/maayan-ifergan-ma132002
            </a>

          </div>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-3">
          <Github className="w-5 h-5 text-yellow-500" />
          <div>
            <p className="font-semibold text-zinc-700">GitHub</p>
            <a
            href="https://github.com/maaayan3330"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-yellow-600 transition"
            >
            github.com/maaayan3330
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-yellow-500" />
          <div>
            <p className="font-semibold text-zinc-700">Phone</p>
            <a
              href="tel:+972501234567"
              className="text-zinc-600 hover:text-yellow-600 transition"
            >
              +972 52-379-1169
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
