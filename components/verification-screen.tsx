"use client"

interface VerificationScreenProps {
  onVerified: () => void
  isLoading: boolean
}

export default function VerificationScreen({ onVerified, isLoading }: VerificationScreenProps) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 animate-fade-in">
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="mb-8 animate-slide-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Talaj <span className="text-primary">FC</span>
            </h1>
            <p className="text-lg text-foreground/80">A legjobb kosárlabdacsapat</p>
          </div>

          {!isLoading ? (
            <button
              onClick={onVerified}
              className="animate-slide-right px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Ellenőrizz, hogy ember vagy
            </button>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              <p className="text-foreground/60">Kapcsolódás az AI-hoz...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
