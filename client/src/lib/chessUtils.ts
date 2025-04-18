// Chess piece positions and utility functions

// Function to determine if a square is black or white based on its position
export function isBlackSquare(row: number, col: number): boolean {
  return (row + col) % 2 === 1;
}

// Chess piece positions for the standard starting position
export const initialBoardPosition: Record<string, string> = {
  '0,0': '♜', '0,1': '♞', '0,2': '♝', '0,3': '♛', 
  '0,4': '♚', '0,5': '♝', '0,6': '♞', '0,7': '♜',
  '1,0': '♟', '1,1': '♟', '1,2': '♟', '1,3': '♟', 
  '1,4': '♟', '1,5': '♟', '1,6': '♟', '1,7': '♟',
  '6,0': '♙', '6,1': '♙', '6,2': '♙', '6,3': '♙', 
  '6,4': '♙', '6,5': '♙', '6,6': '♙', '6,7': '♙',
  '7,0': '♖', '7,1': '♘', '7,2': '♗', '7,3': '♕', 
  '7,4': '♔', '7,5': '♗', '7,6': '♘', '7,7': '♖'
};

// Chess piece Unicode symbols
export const chessPieces = {
  whiteKing: '♔',
  whiteQueen: '♕',
  whiteRook: '♖',
  whiteBishop: '♗',
  whiteKnight: '♘',
  whitePawn: '♙',
  blackKing: '♚',
  blackQueen: '♛',
  blackRook: '♜',
  blackBishop: '♝',
  blackKnight: '♞',
  blackPawn: '♟'
};

// Get piece at position
export function getPieceAtPosition(row: number, col: number): string | null {
  const key = `${row},${col}`;
  return initialBoardPosition[key] || null;
}

// Determine if a piece is black
export function isPieceBlack(piece: string): boolean {
  return '♚♛♜♝♞♟'.includes(piece);
}
