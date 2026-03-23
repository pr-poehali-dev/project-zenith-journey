import { Button } from "@/components/ui/button"

export function Header() {
  const handleGetStarted = () => {
    const bookingSection = document.getElementById("booking")
    bookingSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg">E</span>
          </div>
          <span className="font-semibold text-foreground">Elevate VA Academy</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition">
            О нас
          </a>
          <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition">
            Преимущества
          </a>
          <a href="#booking" className="text-sm text-muted-foreground hover:text-foreground transition">
            Записаться
          </a>
          <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition">
            Отзывы
          </a>
        </nav>
        <Button onClick={handleGetStarted} className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Начать
        </Button>
      </div>
    </header>
  )
}
