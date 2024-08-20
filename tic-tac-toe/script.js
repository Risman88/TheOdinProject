const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
  
    const getBoard = () => board;
  
    const resetBoard = () => {
      board = ["", "", "", "", "", "", "", "", ""];
    };
  
    const setMark = (index, mark) => {
      if (board[index] === "") {
        board[index] = mark;
        return true;
      }
      return false;
    };
  
    return { getBoard, resetBoard, setMark };
  })();

  const Player = (name, marker) => {
    return { name, marker };
  };

  const GameController = (() => {
    let players = []; 
    let currentPlayerIndex = 0;
    let gameOver = false;
  
    const initializeGame = (player1Name, player2Name) => {
      players = [Player(player1Name, "X"), Player(player2Name, "O")];
      currentPlayerIndex = 0;
      gameOver = false;
      Gameboard.resetBoard();
      DisplayController.renderBoard();
      DisplayController.setResultMessage(`${players[currentPlayerIndex].name}'s turn`);
    };
  
    const handleClick = (index) => {
      if (gameOver || !Gameboard.setMark(index, players[currentPlayerIndex].marker)) return;
  
      DisplayController.renderBoard();
  
      if (checkWinner(Gameboard.getBoard(), players[currentPlayerIndex].marker)) {
        gameOver = true;
        DisplayController.setResultMessage(`${players[currentPlayerIndex].name} wins!`);
      } else if (checkTie(Gameboard.getBoard())) {
        gameOver = true;
        DisplayController.setResultMessage("It's a tie!");
      } else {
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
        DisplayController.setResultMessage(`${players[currentPlayerIndex].name}'s turn`);
      }
    };
  
    const checkWinner = (board, marker) => {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];
  
      return winPatterns.some(pattern => 
        pattern.every(index => board[index] === marker)
      );
    };
  
    const checkTie = (board) => {
      return board.every(cell => cell !== "");
    };
  
    return { initializeGame, handleClick };
  })();

  const DisplayController = (() => {
    const gameboardDiv = document.getElementById("gameboard");
    const resultMessage = document.getElementById("result");
  
    const renderBoard = () => {
      const board = Gameboard.getBoard();
      gameboardDiv.innerHTML = "";
      board.forEach((mark, index) => {
        const square = document.createElement("div");
        square.classList.add("square");
        square.textContent = mark;
        square.addEventListener("click", () => GameController.handleClick(index));
        gameboardDiv.appendChild(square);
      });
    };
  
    const setResultMessage = (message) => {
      resultMessage.textContent = message;
    };
  
    return { renderBoard, setResultMessage };
  })();
  
  document.getElementById("start").addEventListener("click", () => {
    const player1Name = prompt("Input player 1 name: ");
    const player2Name = prompt("Input player 2 name: ");
  
  
    // Initialize the game with player names
    GameController.initializeGame(player1Name, player2Name);
  });