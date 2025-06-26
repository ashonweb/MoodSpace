import React, { useState, useEffect } from 'react';

const PalindromeGridGame = () => {
  const validPalindromes = {
    4: ['DEED', 'SEES', 'BOOB', 'POOP', 'TOOT', 'NOON', 'PEEP', 'KOOK', 'GOOG', 'KEEK'],
    5: ['RADAR', 'ROTOR', 'DEKED', 'MADAM', 'KAYAK', 'DEWED', 'CIVIC', 'REFER', 'TENET', 'SOLOS', 'STATS', 'LEVEL'],
    6: ['DEIFIED', 'REDDER', 'RACECAR', 'ROTATOR', 'REPAPER']
  };

  const targetGrids = {
    4: [
      [['D', 'E', 'E', 'D'], ['S', 'E', 'E', 'S'], ['B', 'O', 'O', 'B'], ['D', 'E', 'E', 'D']],
      [['T', 'O', 'O', 'T'], ['D', 'E', 'E', 'D'], ['S', 'E', 'E', 'S'], ['T', 'O', 'O', 'T']],
      [['N', 'O', 'O', 'N'], ['P', 'E', 'E', 'P'], ['K', 'O', 'O', 'K'], ['N', 'O', 'O', 'N']]
    ],
    5: [
      [['L', 'E', 'V', 'E', 'L'], ['R', 'A', 'D', 'A', 'R'], ['D', 'E', 'K', 'E', 'D'], ['R', 'O', 'T', 'O', 'R'], ['M', 'A', 'D', 'A', 'M']],
      [['R', 'A', 'D', 'A', 'R'], ['S', 'O', 'L', 'O', 'S'], ['T', 'E', 'N', 'E', 'T'], ['C', 'I', 'V', 'I', 'C'], ['K', 'A', 'Y', 'A', 'K']],
      [['K', 'A', 'Y', 'A', 'K'], ['R', 'E', 'F', 'E', 'R'], ['C', 'I', 'V', 'I', 'C'], ['M', 'A', 'D', 'A', 'M'], ['L', 'E', 'V', 'E', 'L']]
    ],
    6: [
      [['D', 'E', 'I', 'F', 'I', 'E'], ['R', 'E', 'D', 'D', 'E', 'R'], ['R', 'A', 'C', 'E', 'C', 'A'], ['R', 'O', 'T', 'A', 'T', 'O'], ['R', 'E', 'P', 'A', 'P', 'E'], ['D', 'E', 'I', 'F', 'I', 'E']],
      [['R', 'E', 'D', 'D', 'E', 'R'], ['D', 'E', 'I', 'F', 'I', 'E'], ['R', 'A', 'C', 'E', 'C', 'A'], ['R', 'O', 'T', 'A', 'T', 'O'], ['R', 'E', 'P', 'A', 'P', 'E'], ['R', 'E', 'D', 'D', 'E', 'R']]
    ]
  };

  const getDailySeed = () => new Date().toISOString().split('T')[0];

  const seedRandom = (seed, max) => {
    let h = 0;
    for (let i = 0; i < seed.length; i++) {
      h = (h * 31 + seed.charCodeAt(i)) & 0x7fffffff;
    }
    return h % max;
  };

  const gridSizes = [4, 5, 6];
  const dailySeed = getDailySeed();
  const gridSize = gridSizes[seedRandom(dailySeed, gridSizes.length)];
  const initialTargetGrid = targetGrids[gridSize][seedRandom(dailySeed, targetGrids[gridSize].length)];
  const maxGuesses = gridSize === 4 ? 6 : gridSize === 5 ? 6 : 8;

  const [targetGrid, setTargetGrid] = useState(initialTargetGrid);
  const [currentGrid, setCurrentGrid] = useState(() => {
    const grid = Array(gridSize).fill().map(() => Array(gridSize).fill(''));
    grid[0] = [...initialTargetGrid[0]]; // First row is given
    return grid;
  });
  const [currentRow, setCurrentRow] = useState(1);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guessHistory, setGuessHistory] = useState([]);
  const [gameState, setGameState] = useState('playing');
  const [message, setMessage] = useState('');
  const [guessesRemaining, setGuessesRemaining] = useState(maxGuesses);
  const [score, setScore] = useState(0);
  const [showFinalGrid, setShowFinalGrid] = useState(false);
  const [keyStatus, setKeyStatus] = useState({});

  const isPalindrome = (word) => word === word.split('').reverse().join('');

  const checkColumnsPalindrome = (grid) => {
    for (let col = 0; col < gridSize; col++) {
      const column = grid.map(row => row[col]).join('');
      if (column.includes('')) return false;
      if (!isPalindrome(column)) return false;
    }
    return true;
  };

  const getLetterFeedback = (guess, targetRow) => {
    const result = Array(gridSize).fill('incorrect');
    const targetLetters = [...targetRow];
    const guessLetters = [...guess];

    // First pass: mark correct positions
    for (let i = 0; i < gridSize; i++) {
      if (guessLetters[i] === targetLetters[i]) {
        result[i] = 'correct';
        targetLetters[i] = null;
        guessLetters[i] = null;
      }
    }

    // Second pass: mark present letters
    for (let i = 0; i < gridSize; i++) {
      if (guessLetters[i] !== null) {
        const index = targetLetters.indexOf(guessLetters[i]);
        if (index !== -1) {
          result[i] = 'present';
          targetLetters[index] = null;
        }
      }
    }
    return result;
  };

  const submitGuess = () => {
    const upperGuess = currentGuess.toUpperCase();
    if (upperGuess.length !== gridSize) {
      setMessage(`Enter a ${gridSize}-letter word`);
      return;
    }

    const targetRow = targetGrid[currentRow];
    const guessArray = upperGuess.split('');
    const letterFeedback = getLetterFeedback(guessArray, targetRow);

    const updatedHistory = [...guessHistory, { 
      word: upperGuess, 
      feedback: letterFeedback, 
      row: currentRow 
    }];
    setGuessHistory(updatedHistory);
    setGuessesRemaining(prev => prev - 1);

    // Update key status
    const updatedKeyStatus = { ...keyStatus };
    guessArray.forEach((letter, i) => {
      if (letterFeedback[i] === 'correct') {
        updatedKeyStatus[letter] = 'correct';
      } else if (letterFeedback[i] === 'present' && updatedKeyStatus[letter] !== 'correct') {
        updatedKeyStatus[letter] = 'present';
      } else if (!updatedKeyStatus[letter]) {
        updatedKeyStatus[letter] = 'incorrect';
      }
    });
    setKeyStatus(updatedKeyStatus);

    const isCorrect = letterFeedback.every(f => f === 'correct');
    let newScore = score;
    
    if (isCorrect) {
      // Update the grid with the correct guess
      const newGrid = currentGrid.map((row, rowIndex) => 
        rowIndex === currentRow ? [...guessArray] : [...row]
      );
      setCurrentGrid(newGrid);
      newScore += 10;

      // Reset keyboard for next row
      setKeyStatus({});

      if (currentRow === gridSize - 1) {
        // Last row completed
        if (checkColumnsPalindrome(newGrid)) {
          newScore += 20;
          newScore += 5 * guessesRemaining;
          setScore(newScore);
          setGameState('won');
          setMessage(`🎉 You won! Final Score: ${newScore}`);
        } else {
          setScore(newScore);
          setGameState('lost');
          setMessage('❌ Grid complete but columns are not palindromes!');
        }
      } else {
        setCurrentRow(currentRow + 1);
        setMessage(`✅ Row ${currentRow + 1} correct! Now guess row ${currentRow + 2}`);
      }
    } else {
      const hint = targetRow[Math.floor(Math.random() * gridSize)];
      setMessage(`❌ Try row ${currentRow + 1} again. Hint: One letter is '${hint}'. ${guessesRemaining - 1} guesses left.`);
    }

    // Check if all guesses are used up
    if (guessesRemaining <= 1) {
      setScore(newScore);
      setGameState('lost');
      setShowFinalGrid(true);
      setMessage('💀 Game Over! No guesses left. Here\'s the solution:');
    }

    setScore(newScore);
    setCurrentGuess('');
  };

  const shareResult = () => {
    const emojiGrid = guessHistory.map(guess => {
      return guess.feedback.map(f => ({
        correct: '🟩',
        present: '🟨',
        incorrect: '⬜'
      }[f])).join('');
    }).join('\n');
    const text = `Palindrome Grid ${gridSize}x${gridSize} ${dailySeed}\nScore: ${score}\n${emojiGrid}`;
    navigator.clipboard.writeText(text);
    setMessage('📋 Result copied to clipboard!');
  };

  const showSolution = () => {
    setShowFinalGrid(true);
    setMessage('🔍 Here\'s the complete solution!');
  };

  const resetGame = () => {
    const newGridSize = gridSizes[seedRandom(dailySeed, gridSizes.length)];
    const newTargetGrid = targetGrids[newGridSize][seedRandom(dailySeed, targetGrids[newGridSize].length)];
    setTargetGrid(newTargetGrid);
    const newGrid = Array(newGridSize).fill().map(() => Array(newGridSize).fill(''));
    newGrid[0] = [...newTargetGrid[0]];
    setCurrentGrid(newGrid);
    setCurrentRow(1);
    setCurrentGuess('');
    setGuessHistory([]);
    setGameState('playing');
    setMessage('');
    setGuessesRemaining(newGridSize === 4 ? 6 : newGridSize === 5 ? 6 : 8);
    setScore(0);
    setKeyStatus({});
    setShowFinalGrid(false);
  };

  const handleKeyClick = (key) => {
    if (gameState !== 'playing') return;
    
    if (key === 'BACK') {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (key === 'ENTER') {
      submitGuess();
    } else if (currentGuess.length < gridSize) {
      setCurrentGuess(currentGuess + key);
    }
  };

  const getCellStyle = (rowIndex, colIndex) => {
    const cell = showFinalGrid ? targetGrid[rowIndex][colIndex] : currentGrid[rowIndex][colIndex];
    const historyEntry = guessHistory.find(g => g.row === rowIndex);
    const feedback = historyEntry ? historyEntry.feedback[colIndex] : null;
    
    let baseStyle = "w-12 h-12 border-2 flex items-center justify-center text-lg font-bold transition-all duration-3000 ";
    
    if (rowIndex === 0) {
      // First row (given)
      baseStyle += "border-gray-400 bg-gray-100 ";
    } else if (rowIndex === currentRow && gameState === 'playing') {
      // Current row being guessed
      baseStyle += "border-blue-500 bg-blue-50 animate-pulse ";
    } else if (cell !== '' && !showFinalGrid) {
      // Completed row
      baseStyle += "border-green-400 bg-green-50 ";
    } else {
      // Empty cell
      baseStyle += "border-gray-300 bg-white ";
    }
    
    // Add feedback colors
    if (feedback === 'correct') {
      baseStyle += " !text-black ";
    } else if (feedback === 'present') {
      baseStyle += "!text-black ";
    } else if (feedback === 'incorrect') {
      baseStyle += "!text-black ";
    }
    
    // Show solution styling
    if (showFinalGrid && rowIndex > 0) {
      baseStyle += "!border-purple-400 !bg-purple-100 ";
    }
    
    return baseStyle;
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
        {gridSize}×{gridSize} Palindrome Grid
      </h1>
      
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600">Daily Puzzle: {dailySeed}</p>
        <p className="text-sm text-gray-600">Guesses: {guessesRemaining}</p>
        <p className="text-sm text-gray-600">Row: {currentRow + 1}</p>
        <p className="text-sm text-green-600">Score: {score}</p>
      </div>

      {/* Grid */}
      <div className="mb-6 flex justify-center">
        <div 
          className="grid gap-1"
          style={{ 
            gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
            width: 'fit-content'
          }}
        >
          {(showFinalGrid ? targetGrid : currentGrid).map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={getCellStyle(rowIndex, colIndex)}
              >
                {cell}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Input and Submit */}
      {gameState === 'playing' && (
        <div className="mb-4">
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={currentGuess}
              onChange={(e) => setCurrentGuess(e.target.value.toUpperCase().slice(0, gridSize))}
              onKeyPress={(e) => e.key === 'Enter' && submitGuess()}
              className="flex-1 px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
              placeholder={`Enter ${gridSize}-letter palindrome for row ${currentRow + 1}`}
              maxLength={gridSize}
              autoFocus
            />
            <button
              onClick={submitGuess}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={currentGuess.length !== gridSize}
            >
              Submit
            </button>
          </div>
          
          {/* Virtual Keyboard */}
          <div className="space-y-1">
            <div className="flex gap-1 justify-center">
              {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map(key => (
                <button
                  key={key}
                  onClick={() => handleKeyClick(key)}
                  className={`px-2 py-1 text-sm rounded font-semibold ${
                    keyStatus[key] === 'correct' ? 'bg-green-500 text-white' :
                    keyStatus[key] === 'present' ? 'bg-yellow-500 text-white' :
                    keyStatus[key] === 'incorrect' ? 'bg-gray-400 text-white' : 
                    'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
            <div className="flex gap-1 justify-center">
              {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map(key => (
                <button
                  key={key}
                  onClick={() => handleKeyClick(key)}
                  className={`px-2 py-1 text-sm rounded font-semibold ${
                    keyStatus[key] === 'correct' ? 'bg-green-500 text-white' :
                    keyStatus[key] === 'present' ? 'bg-yellow-500 text-white' :
                    keyStatus[key] === 'incorrect' ? 'bg-gray-400 text-white' : 
                    'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
            <div className="flex gap-1 justify-center">
              <button 
                onClick={() => handleKeyClick('ENTER')} 
                className="px-3 py-1 text-sm bg-blue-200 hover:bg-blue-300 rounded font-semibold"
              >
                ENTER
              </button>
              {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map(key => (
                <button
                  key={key}
                  onClick={() => handleKeyClick(key)}
                  className={`px-2 py-1 text-sm rounded font-semibold ${
                    keyStatus[key] === 'correct' ? 'bg-green-500 text-white' :
                    keyStatus[key] === 'present' ? 'bg-yellow-500 text-white' :
                    keyStatus[key] === 'incorrect' ? 'bg-gray-400 text-white' : 
                    'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {key}
                </button>
              ))}
              <button 
                onClick={() => handleKeyClick('BACK')} 
                className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded font-semibold"
              >
                ⌫
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Message */}
      {message && (
        <div className={`p-3 rounded mb-4 text-center font-medium ${
          gameState === 'won' ? 'bg-green-100 text-green-800' :
          gameState === 'lost' ? 'bg-red-100 text-red-800' : 
          'bg-blue-100 text-blue-800'
        }`}>
          {message}
        </div>
      )}

      {/* Game Over Buttons */}
      {gameState !== 'playing' && (
        <div className="flex gap-2 mb-4">
          <button 
            onClick={resetGame} 
            className="flex-1 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            New Game
          </button>
          <button 
            onClick={shareResult} 
            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Share
          </button>
          {!showFinalGrid && (
            <button 
              onClick={showSolution} 
              className="flex-1 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              Show Solution
            </button>
          )}
        </div>
      )}

      {/* Guess History */}
      {guessHistory.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2 text-gray-700">Guess History:</h3>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {guessHistory.map((guess, index) => (
              <div key={index} className="flex items-center text-sm">
                <span className="mr-2 w-12 text-gray-600">R{guess.row + 1}:</span>
                <div className="flex gap-1">
                  {guess.word.split('').map((letter, letterIndex) => (
                    <div
                      key={letterIndex}
                      className={`w-6 h-6 border flex items-center justify-center text-xs font-bold ${
                        guess.feedback[letterIndex] === 'correct' ? 'bg-green-500 text-white' :
                        guess.feedback[letterIndex] === 'present' ? 'bg-yellow-500 text-white' :
                        'bg-gray-400 text-white'
                      }`}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded">
        <h4 className="font-semibold mb-1">How to Play:</h4>
        <ul className="space-y-1">
          <li>• Fill rows 2-{gridSize} with unique {gridSize}-letter palindromes</li>
          <li>• Each column must also form a palindrome</li>
          <li>• 🟩 = correct position, 🟨 = wrong position, ⬜ = not in word</li>
          <li>• Complete in {maxGuesses} guesses or fewer to win</li>
        </ul>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 1.5s ;
        }
      `}</style>
    </div>
  );
};

export default PalindromeGridGame;