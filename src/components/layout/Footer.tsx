import { HiHeart } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Logo */}
          <a href="#inicio" className="text-lg font-bold">
            <span className="text-primary">&lt;</span>
            JM
            <span className="text-primary">/&gt;</span>
          </a>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/JesnerMM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <SiGithub className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/jesnermelgara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="text-xl" />
            </a>
          </div>

          {/* Copyright */}
          <p className="flex items-center gap-1 text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} Jesner Melgara. Hecho con
            <HiHeart className="text-primary" />
            Next.js y TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
