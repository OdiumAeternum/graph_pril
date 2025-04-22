import { useState } from 'react'

type SquareValue = 'X' | 'O' | null

function Square({
  value,
  onClick,
}: {
  value: SquareValue
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="w-24 h-24 border border-gray-400 text-3xl font-bold flex items-center justify-center hover:bg-gray-100 transition"
    >
      {value}
    </button>
  )
}

function Board({
  squares,
  onPlay,
}: {
  squares: SquareValue[]
  onPlay: (nextSquares: SquareValue[]) => void
}) {
  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return

    const nextSquares = squares.slice()
    nextSquares[i] = xIsNext ? 'X' : 'O'
    onPlay(nextSquares)
  }

  const xIsNext =
    squares.filter((s) => s !== null).length % 2 === 0

  const winner = calculateWinner(squares)
  let status = ''
  if (winner) {
    status = `Выиграл: ${winner}`
  } else {
    status = `Ходит: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <>
      <div className="mb-4 text-xl font-semibold">{status}</div>
      <div className="grid grid-cols-3 gap-1 w-fit">
        {squares.map((value, i) => (
          <Square key={i} value={value} onClick={() => handleClick(i)} />
        ))}
      </div>
    </>
  )
}

export default function Game() {
  const [history, setHistory] = useState<SquareValue[][]>([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)

  const currentSquares = history[currentMove]

  function handlePlay(nextSquares: SquareValue[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-screen bg-white text-gray-800">
      <Board squares={currentSquares} onPlay={handlePlay} />
    </div>
  )
}

function calculateWinner(squares: SquareValue[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
