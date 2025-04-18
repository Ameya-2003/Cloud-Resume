import ChessPiece from "@/components/ChessPiece";

export default function ChessBoard() {
  const renderChessPiece = (row: number, col: number) => {
    const pieces: Record<string, string> = {
      '0,0': '♜', '0,1': '♞', '0,2': '♝', '0,3': '♛', 
      '0,4': '♚', '0,5': '♝', '0,6': '♞', '0,7': '♜',
      '1,0': '♟', '1,1': '♟', '1,2': '♟', '1,3': '♟', 
      '1,4': '♟', '1,5': '♟', '1,6': '♟', '1,7': '♟',
      '6,0': '♙', '6,1': '♙', '6,2': '♙', '6,3': '♙', 
      '6,4': '♙', '6,5': '♙', '6,6': '♙', '6,7': '♙',
      '7,0': '♖', '7,1': '♘', '7,2': '♗', '7,3': '♕', 
      '7,4': '♔', '7,5': '♗', '7,6': '♘', '7,7': '♖'
    };
    
    const key = `${row},${col}`;
    if (pieces[key]) {
      return <ChessPiece piece={pieces[key]} isBlack={row < 2} />;
    }
    return null;
  };

  return (
    <div className="grid grid-cols-8 gap-0 border-4 border-chess-gold shadow-2xl">
      {Array(8).fill(0).map((_, rowIndex) => (
        Array(8).fill(0).map((_, colIndex) => (
          <div 
            key={`board-${rowIndex}-${colIndex}`}
            className={`w-full pt-[100%] relative ${(rowIndex + colIndex) % 2 === 0 ? 'bg-chess-white' : 'bg-chess-black'}`}
          >
            {renderChessPiece(rowIndex, colIndex)}
          </div>
        ))
      ))}
    </div>
  );
}
