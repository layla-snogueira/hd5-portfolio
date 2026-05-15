import { Languages, Moon } from 'lucide-react'
//importa os ícones de linguagem e de trocar o tema do lucide

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-black bg-white px-6 py-3">
      <div className="relative mx-auto flex max-w-6xl items-center justify-center">
        <nav aria-label="Main navigation" className="flex items-center gap-4">
          <a href="#about" className="font-bold text-black underline">
            About
          </a>
          <a href="#blog" className="font-bold text-black hover:underline">
            Blog
          </a>
          <a href="#contact" className="font-bold text-black hover:underline">
            Contact
          </a>
        </nav>

        <div className="absolute right-0 flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle dark mode"
            className="flex size-9 items-center justify-center rounded bg-[#5294ff] border-3 border-black shadow-[4px_4px_0_#000] transition-transform hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <Moon size={18} strokeWidth={2.5} />
          </button>

          <button
            type="button"
            aria-label="Change language"
            className="flex size-9 items-center justify-center rounded bg-white border-3 border-black shadow-[4px_4px_0_#000] transition-transform hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <Languages size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
