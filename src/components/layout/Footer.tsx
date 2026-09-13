import { HiHeart } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-border/80 bg-surface/40 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Logo */}
          <a href="#inicio" className="text-lg font-bold tracking-tight">
            <span className="text-primary">&lt;</span>
            JM
            <span className="text-primary">/&gt;</span>
          </a>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/JesnerMM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-text-secondary transition-all hover:border-primary/40 hover:text-primary"
              aria-label="GitHub"
            >
              <SiGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/jesner-eliecer-melgara-murillo-0b4506255/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 text-text-secondary transition-all hover:border-primary/40 hover:text-primary"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="text-lg" />
            </a>
          </div>

          {/* Copyright */}
          <p className="flex items-center gap-1 text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} Jesner Melgara. Built with
            <HiHeart className="text-primary" />
            in Next.js and TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
