import { useVisitorCount } from "@/hooks/useVisitorCount";

export default function VisitorCounter() {
  const { visitorCount } = useVisitorCount();
  
  return (
    <section className="py-12 bg-chess-black text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block bg-chess-gold text-chess-black p-6 rounded-lg shadow-lg">
          <h3 className="font-accent text-2xl mb-2">Visitor Counter</h3>
          <div className="flex items-center justify-center space-x-2">
            {/* Chess Piece Icon */}
            <div className="text-3xl" aria-hidden="true">♟</div>
            
            {/* Counter Display */}
            <div id="visitor-count" className="font-chess text-4xl font-bold">
              {visitorCount}
            </div>
          </div>
          <p className="mt-2 text-sm">
            Thanks for being my {visitorCount}<sup>th</sup> visitor!
          </p>
        </div>
      </div>
    </section>
  );
}
