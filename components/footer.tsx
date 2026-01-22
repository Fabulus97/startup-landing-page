export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo-lia.svg" alt="lia" className="w-8 h-8" />
            <span className="font-semibold text-xl text-foreground">lia</span>
            <span className="ml-2 text-xs font-medium bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
              for Startup
            </span>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            lia è un servizio della Lendit srl - Via Francesco Ferrara 32, 90141, Palermo - P.IVA 07135270820
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} lia. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}
