interface ChessPieceProps {
  piece: string;
  isBlack?: boolean;
}

export default function ChessPiece({ piece, isBlack = false }: ChessPieceProps) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center text-3xl ${isBlack ? 'text-gray-800' : 'text-white'}`}>
      {piece}
    </div>
  );
}
