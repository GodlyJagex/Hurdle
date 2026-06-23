document.addEventListener("DOMContentLoaded", () => {
    const SAVE_KEY = 'hurdleGameState'; 


    let GAME_COUNT = 1; 
    let WORD_LENGTH = 5; 
    let GUESS_COUNT = 6; 
    let targetWords = []; 
    let currentRow = 0;
    let currentGuess = "";
    let isGameOver = false; 
    let highlightKeysEnabled = true;
    let classicModeEnabled = false; 
    let hardModeEnabled = false; 

    let allLetterStates = []; 
    let previousGuess = ""; 
    let guessHistory = []; 
    let gameStates = []; 


    const settingsScreen = document.getElementById("settings-screen");
    const gameContainer = document.getElementById("game-container");
    const startGameBtn = document.getElementById("start-game-btn");
    const settingGameCount = document.getElementById("setting-game-count"); 
    const settingLength = document.getElementById("setting-length"); 
    const settingGuesses = document.getElementById("setting-guesses");
    const settingInfinite = document.getElementById("setting-infinite");
    const settingReveal = document.getElementById("setting-reveal");
    const settingClassicMode = document.getElementById("setting-classic-mode"); 
    const settingHardMode = document.getElementById("setting-hard-mode"); 
    const labelHardMode = document.getElementById("label-hard-mode"); 
    const settingHighlightKeys = document.getElementById("setting-highlight-keys"); 

    const lengthDisclaimer = document.getElementById("length-disclaimer");

    
    const gameBoard = document.getElementById("game-board");
    const keyboard = document.getElementById("keyboard");
    const revealAnswerBtn = document.getElementById("reveal-answer-btn");
    const newGameBtn = document.getElementById("new-game-btn");
    const titleElement = document.getElementById("title");
    const toastContainer = document.getElementById("toast-container"); 
    
    const keysLayout = [
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "a", "s", "d", "f", "g", "h", "j", "k", "l",
        "enter", "z", "x", "c", "v", "b", "n", "m", "backspace"
    ];
    

    function saveGame() {
        const state = {
            targetWords, guessHistory, allLetterStates, gameStates,
            currentRow, isGameOver, GAME_COUNT, WORD_LENGTH, GUESS_COUNT,
            classicModeEnabled, hardModeEnabled, highlightKeysEnabled, 

            infiniteGuesses: settingInfinite.checked,
            canReveal: settingReveal.checked
        };
        localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    }

    function loadGame() {
        const savedData = localStorage.getItem(SAVE_KEY);
        if (!savedData) {
            updateLengthDisclaimer();

            return; 
        }
        const state = JSON.parse(savedData);
        
        targetWords = state.targetWords;
        guessHistory = state.guessHistory;
        allLetterStates = state.allLetterStates;
        gameStates = state.gameStates;
        currentRow = state.currentRow;
        isGameOver = state.isGameOver;
        GAME_COUNT = state.GAME_COUNT;
        WORD_LENGTH = state.WORD_LENGTH;
        GUESS_COUNT = state.GUESS_COUNT;
        classicModeEnabled = state.classicModeEnabled;
        hardModeEnabled = state.hardModeEnabled;
        highlightKeysEnabled = state.highlightKeysEnabled;

        
        settingGameCount.value = GAME_COUNT;
        settingLength.value = WORD_LENGTH;
        settingGuesses.value = GUESS_COUNT;
        settingInfinite.checked = state.infiniteGuesses;
        settingReveal.checked = state.canReveal;
        settingClassicMode.checked = classicModeEnabled;
        settingHardMode.checked = hardModeEnabled;
        settingHighlightKeys.checked = highlightKeysEnabled;

        
        settingInfinite.dispatchEvent(new Event('change'));
        settingClassicMode.dispatchEvent(new Event('change'));
        
        settingsScreen.style.display = 'none';
        gameContainer.style.display = 'flex';
        
        initGameUI(state.canReveal);
        rebuildBoardFromHistory();
        updateKeyboard();
    }

    function clearSavedGame() {
        localStorage.removeItem(SAVE_KEY);
    }

    function rebuildBoardFromHistory() {
        if (!guessHistory) return;
        
        let tempRow = 0;
        for (const guess of guessHistory) {
            currentRow = tempRow;
            currentGuess = guess; 
            
            for(let i = 0; i < GAME_COUNT; i++) {
                    addNewGuessRow(i);
            }
            updateGrid(); 
            
            for(let i = 0; i < GAME_COUNT; i++) {
                if (gameStates[i].status === 'won' && guessHistory.indexOf(guess) === gameStates[i].solvedRow) {
                        runGuessLogic(guess, i); 
                } else if (gameStates[i].status === 'active' || (gameStates[i].status === 'lost' && tempRow === GUESS_COUNT - 1)) {
                        runGuessLogic(guess, i);
                }
            }
            tempRow++;
        }
        
        currentRow = tempRow;
        currentGuess = "";
        previousGuess = guessHistory.length > 0 ? guessHistory[guessHistory.length - 1] : "";

        if (isGameOver) {
            showAnswerInHeader(gameStates.every(g => g.status === 'won') ? 'win' : 'lose', true); 
        } else {
            for(let i = 0; i < GAME_COUNT; i++) {
                if (gameStates[i].status === 'active') {
                    addNewGuessRow(i);
                }
            }
        }
    }
    

    function showToast(message) {
        const toast = document.createElement("div");
        toast.classList.add("toast");
        toast.textContent = message;
        toastContainer.appendChild(toast);
        setTimeout(() => { toast.classList.add("show"); }, 10); 
        setTimeout(() => {
            toast.classList.remove("show");
            toast.addEventListener("transitionend", () => {
                if (toast.parentElement) toast.parentElement.removeChild(toast);
            }, { once: true });
        }, 2000); 
    }


    function updateLengthDisclaimer() {
        const length = parseInt(settingLength.value, 10);
        let count = 0;
        if (length > 0 && WORD_LISTS[length]) count = WORD_LISTS[length].size;
        let message = `(${count} total words found)`;
        if (count === 0) message = "Warning: 0 total words of this length!";
        else if (count < 25) message = `Note: Only ${count} total words.`;
        lengthDisclaimer.textContent = message;
    }
    
    settingInfinite.addEventListener("change", () => {
        settingGuesses.disabled = settingInfinite.checked;
    });
    
    settingLength.addEventListener("input", () => {
        updateLengthDisclaimer();

    }); 

    settingClassicMode.addEventListener("change", () => {
        if (settingClassicMode.checked) {
            settingHighlightKeys.checked = true;
            settingHighlightKeys.disabled = true;
            settingHardMode.disabled = false;
            labelHardMode.classList.remove("disabled");
        } else {
            settingHighlightKeys.disabled = false;
            settingHardMode.checked = false;
            settingHardMode.disabled = true;
            labelHardMode.classList.add("disabled");
        }
    });

    newGameBtn.addEventListener("click", () => {
        clearSavedGame();
        gameContainer.style.display = 'none';
        settingsScreen.style.display = 'flex';
        updateLengthDisclaimer(); 

    });


    startGameBtn.addEventListener("click", () => {
        clearSavedGame(); 
        
        GAME_COUNT = parseInt(settingGameCount.value, 10);
        classicModeEnabled = settingClassicMode.checked;
        hardModeEnabled = settingHardMode.checked;

        
        if (classicModeEnabled) {
            highlightKeysEnabled = true;
        } else {
            highlightKeysEnabled = settingHighlightKeys.checked;
        }
        
        let length = parseInt(settingLength.value, 10);
        WORD_LENGTH = (length >= 1 && length <= 50) ? length : 5; 
        
        if (settingInfinite.checked) {
            GUESS_COUNT = 999;
        } else {
            let guesses = parseInt(settingGuesses.value, 10);
            GUESS_COUNT = (guesses > 0 && guesses <= 10) ? guesses : 6;
        }
        
        const wordListSource = WORD_LISTS[WORD_LENGTH];
        
        if (!WORD_LISTS[WORD_LENGTH] || WORD_LISTS[WORD_LENGTH].size === 0) {
            showToast(`No words of length ${WORD_LENGTH} found.`);
            return;
        }
        
        if (wordListSource.size < GAME_COUNT) {
            showToast(`Not enough unique words for ${GAME_COUNT} games. Max is ${wordListSource.size}.`);
            return;
        }
        
        settingsScreen.style.display = 'none';
        gameContainer.style.display = 'flex';
        
        initGame(settingReveal.checked, wordListSource);
    });

    function initGameUI(canReveal) {
    gameBoard.innerHTML = ''; 
    keyboard.innerHTML = ''; 
    
    titleElement.innerHTML = 'HURDLE';
    titleElement.classList.remove('title-win', 'title-lose');
    
    gameBoard.className = ''; 
    gameBoard.classList.add('responsive-grid');

    newGameBtn.style.display = 'block'; 
    if (canReveal && !isGameOver) {
        revealAnswerBtn.style.display = 'block';
    } else {
        revealAnswerBtn.style.display = 'none';
    }

    const row1 = document.createElement("div");
    row1.className = "keyboard-row";
    keysLayout.slice(0, 10).forEach(key => row1.appendChild(createKey(key)));
    const row2 = document.createElement("div");
    row2.className = "keyboard-row";
    row2.style.paddingLeft = "25px";
    keysLayout.slice(10, 19).forEach(key => row2.appendChild(createKey(key)));
    const row3 = document.createElement("div");
    row3.className = "keyboard-row";
    keysLayout.slice(19).forEach(key => row3.appendChild(createKey(key)));
    keyboard.appendChild(row1);
    keyboard.appendChild(row2);
    keyboard.appendChild(row3);
    
    document.removeEventListener("keydown", handlePhysicalKey);
    keyboard.removeEventListener("click", handleVirtualKey);
    revealAnswerBtn.removeEventListener("click", handleRevealAnswer);
    
    document.addEventListener("keydown", handlePhysicalKey);
    keyboard.addEventListener("click", handleVirtualKey);
    revealAnswerBtn.addEventListener("click", handleRevealAnswer);
    
    for (let i = 0; i < GAME_COUNT; i++) {
        const miniBoard = document.createElement('div');
        miniBoard.className = 'mini-board';
        miniBoard.id = `mini-board-${i}`;
        
        // Add answer container for each game
        const answerContainer = document.createElement('div');
        answerContainer.className = 'answer-container';
        answerContainer.id = `answer-container-${i}`;
        answerContainer.style.display = 'none';
        miniBoard.appendChild(answerContainer);
        
        if (gameStates[i] && (gameStates[i].status === 'won' || gameStates[i].status === 'lost')) {
            miniBoard.classList.add('solved');
        }
        gameBoard.appendChild(miniBoard);
    }
}

    function initGame(canReveal, wordListSource) {
        currentRow = 0;
        currentGuess = "";
        previousGuess = "";
        isGameOver = false;
        guessHistory = [];
        targetWords = [];
        allLetterStates = [];
        gameStates = [];

        initGameUI(canReveal); 
        
        let tempWordList = Array.from(wordListSource);
        for(let i = 0; i < GAME_COUNT; i++) {
            const randIndex = Math.floor(Math.random() * tempWordList.length);
            const newWord = tempWordList[randIndex];
            
            targetWords.push(newWord);
            gameStates.push({ id: i, status: 'active', solvedRow: -1 });
            allLetterStates.push({}); 
            
            tempWordList.splice(randIndex, 1);
            
            addNewGuessRow(i); 
        }
        
        console.log("Target Words:", targetWords);
        
        saveGame(); 
    }
    
    function showAnswerInHeader(state, isRebuild = false) {
    if (GAME_COUNT === 1) {
        const NewHtml = '<a href="https://en.wiktionary.org/wiki/' + targetWords[0] + '" target="_blank">' + targetWords[0] + '</a>';
        titleElement.innerHTML = NewHtml.toLowerCase();
    } else {
        // For multiple games, don't modify the header
        return;
    }
    
    titleElement.classList.remove('title-win', 'title-lose'); 
    if (state === 'win') {
        titleElement.classList.add('title-win');
    } else { 
        titleElement.classList.add('title-lose');
    }
    
    if (!isRebuild) { 
        isGameOver = true;
        clearSavedGame(); 
    }
    revealAnswerBtn.style.display = 'none'; 
}


    function handleRevealAnswer() {
    if (isGameOver) return;
    
    // Show answer for each game
    for(let i = 0; i < GAME_COUNT; i++) {
        gameStates[i].status = 'lost'; 
        document.getElementById(`mini-board-${i}`).classList.add('solved');
        showAnswerForGame(i, targetWords[i]);
    }
    
    // Hide the main reveal button
    revealAnswerBtn.style.display = 'none';
    saveGame();
}
    
    function addNewGuessRow(boardIndex) {
        const miniBoard = document.getElementById(`mini-board-${boardIndex}`);
        if (!miniBoard) return; 
        
        let row = document.createElement("div");
        row.className = "guess-row";
        
        // FIX: Replaced Enabled with classicModeEnabled
        if (classicModeEnabled) {
            row.style.gridTemplateColumns = `repeat(${WORD_LENGTH}, 1fr)`;
        } else {
            row.style.gridTemplateColumns = `repeat(${WORD_LENGTH}, 1fr) 0.5fr 0.5fr`;
        }

        for (let j = 0; j < WORD_LENGTH; j++) {
            let tile = document.createElement("div");
            tile.className = "guess-tile";
            tile.id = `tile-${boardIndex}-${currentRow}-${j}`;
            row.appendChild(tile);
        }
        
        // FIX: Replaced Enabled with classicModeEnabled
        if (!classicModeEnabled) {
            let correctInfoBox = document.createElement("div");
            correctInfoBox.className = "info-box correct-info";
            correctInfoBox.id = `info-correct-${boardIndex}-${currentRow}`;
            row.appendChild(correctInfoBox);

            let presentInfoBox = document.createElement("div");
            presentInfoBox.className = "info-box present-info";
            presentInfoBox.id = `info-present-${boardIndex}-${currentRow}`;
            row.appendChild(presentInfoBox);
        }
        miniBoard.appendChild(row);
    }

    function createKey(key) {
        const keyElement = document.createElement("button");
        keyElement.className = "key";
        keyElement.dataset.key = key;

        if (key === "enter" || key === "backspace") {
            keyElement.classList.add("large");
            keyElement.textContent = key === "enter" ? "Enter" : "⌫";
        } else {
            keyElement.textContent = key;
        }
        return keyElement;
    }
    
    function applyTileState(tile, state, index) {
        const delay = (index * 50);
        setTimeout(() => {
            tile.classList.add('flip');
            setTimeout(() => {
                tile.classList.add(state);
            }, 300); 
        }, delay); 
    }

    function updateKeyboard() {
        const mergedStates = {};
        for (const singleBoardStates of allLetterStates) {
            for (const letter in singleBoardStates) {
                const state = singleBoardStates[letter];
                const currentState = mergedStates[letter];
                
                if (state === 'correct') {
                    mergedStates[letter] = 'correct';
                } else if (state === 'present' && currentState !== 'correct') {
                    mergedStates[letter] = 'present';
                } else if (state === 'absent' && currentState !== 'correct' && currentState !== 'present') {
                        mergedStates[letter] = 'absent';
                } else if (state === 'used' && !currentState) {
                    mergedStates[letter] = 'used';
                }
            }
        }

        const keys = keyboard.querySelectorAll('.key');
        keys.forEach(keyElement => {
            const letter = keyElement.dataset.key;
            if (!letter) return;
            
            keyElement.classList.remove('key-used', 'correct', 'present', 'absent');
            const state = mergedStates[letter]; 

            // FIX: Replaced Enabled with classicModeEnabled
            if (classicModeEnabled) {
                if (state === 'correct') keyElement.classList.add('correct');
                else if (state === 'present') keyElement.classList.add('present');
                else if (state === 'absent') keyElement.classList.add('absent');
            } else if (highlightKeysEnabled) {
                if (state) keyElement.classList.add('key-used');
            }
        });
    }

    function isValidHardModeGuess() {
        if (!hardModeEnabled || currentRow === 0) {
            return true; 
        }
        
        const guess = currentGuess.split('');
        
        for(let i = 0; i < GAME_COUNT; i++) {
            if (gameStates[i].status !== 'active') continue; 
            const boardLetterStates = allLetterStates[i];

            for (let j = 0; j < WORD_LENGTH; j++) {
                const letter = previousGuess[j];
                if (letter && boardLetterStates[letter] === 'correct' && guess[j] !== letter) {
                    showToast(`Board ${i+1} requires ${letter.toUpperCase()} in position ${j + 1}`);
                    return false;
                }
            }

            const presentLetters = Object.keys(boardLetterStates).filter(k => boardLetterStates[k] === 'present');
            for (const letter of presentLetters) {
                if (!guess.includes(letter)) {
                    showToast(`Board ${i+1} requires ${letter.toUpperCase()}`);
                    return false;
                }
            }
        }
        return true;
    }

    function handlePhysicalKey(e) {
        if (isGameOver) return;
        
        if (e.key === "Enter") {
            handleSubmitGuess();
        } else if (e.key === "Backspace") {
            handleDeleteLetter();
        } else if (e.key.match(/^[a-z]$/i)) {
            handleAddLetter(e.key.toLowerCase());
        }
    }

    function handleVirtualKey(e) {
        if (isGameOver) return;
        const key = e.target.dataset.key;
        if (!key) return;

        if (key === "enter") {
            handleSubmitGuess();
        } else if (key === "backspace") {
            handleDeleteLetter();
        } else {
            handleAddLetter(key);
        }
    }

    function handleAddLetter(letter) {
        if (isGameOver || currentGuess.length >= WORD_LENGTH) return;
        currentGuess += letter;
        updateGrid();
    }

    function handleDeleteLetter() {
        if (isGameOver || currentGuess.length === 0) return;
        currentGuess = currentGuess.slice(0, -1);
        updateGrid();
    }

    function handleSubmitGuess() {
        if (isGameOver) return;
        
        if (currentGuess.length !== WORD_LENGTH) {
            shakeRow(0); 
            showToast("Not enough letters");
            return;
        }

        if (!WORD_LISTS[WORD_LENGTH].has(currentGuess)) {
            shakeRow(0); 
            showToast("Not in word list");
            return;
        }
        
        if (!isValidHardModeGuess()) {
            shakeRow(0); 
            return;
        }
        
        revealGuess();
    }

    function updateGrid() {
        for (let i = 0; i < GAME_COUNT; i++) {
            if (gameStates[i].status !== 'active') continue; 
            
            for (let j = 0; j < WORD_LENGTH; j++) {
                const tile = document.getElementById(`tile-${i}-${currentRow}-${j}`);
                if (tile) {
                    tile.textContent = currentGuess[j] || "";
                    if (currentGuess[j]) {
                        tile.classList.add("filled");
                    } else {
                        tile.classList.remove("filled");
                    }
                }
            }
            if (currentGuess.length < WORD_LENGTH && !classicModeEnabled) {
                const correctBox = document.getElementById(`info-correct-${i}-${currentRow}`);
                const presentBox = document.getElementById(`info-present-${i}-${currentRow}`);
                if (correctBox) correctBox.textContent = "";
                if (presentBox) presentBox.textContent = "";
            }
        }
    }

    function shakeRow(boardIndex) {
    const miniBoard = document.getElementById(`mini-board-${boardIndex}`);
    if (!miniBoard) return;
    const rows = miniBoard.getElementsByClassName("guess-row");
    const row = rows[currentRow];
    if (row) {
        row.classList.add("shake");
        row.addEventListener("animationend", () => {
            row.classList.remove("shake");
        }, { once: true });
    }
}
    
    function runGuessLogic(guessString, boardIndex) {
        const guess = guessString.split('');
        const answer = targetWords[boardIndex].split('');
        const letterStates = allLetterStates[boardIndex];

        if (classicModeEnabled) {
            const miniBoard = document.getElementById(`mini-board-${boardIndex}`);
   
            const rows = miniBoard.getElementsByClassName("guess-row");
            const row = rows[currentRow];
            if (!row) return;
            const tiles = row.children;
            const answerCounts = {};
            answer.forEach(letter => (answerCounts[letter] = (answerCounts[letter] || 0) + 1));
            
            for (let i = 0; i < WORD_LENGTH; i++) {
                if (guess[i] === answer[i]) {
                    applyTileState(tiles[i], 'correct', i);
                    letterStates[guess[i]] = 'correct'; 
                    answerCounts[guess[i]]--;
                }
            }
            for (let i = 0; i < WORD_LENGTH; i++) {
                if (guess[i] !== answer[i]) {
                    if (answer.includes(guess[i]) && answerCounts[guess[i]] > 0) {
                        applyTileState(tiles[i], 'present', i);
                        if (letterStates[guess[i]] !== 'correct') {
                            letterStates[guess[i]] = 'present';
                        }
                        answerCounts[guess[i]]--;
                    } else {
                        applyTileState(tiles[i], 'absent', i);
                        if (!letterStates[guess[i]]) {
                            letterStates[guess[i]] = 'absent';
                        }
                    }
                }
            }
        } else {
            let correctCount = 0;
            let presentCount = 0;
            let tempAnswer = [...answer];
            let tempGuess = [...guess];
            
            if (highlightKeysEnabled) {
                    for (const letter of guess) { letterStates[letter] = 'used'; }
            }
            for (let i = 0; i < WORD_LENGTH; i++) {
                if (tempGuess[i] === tempAnswer[i]) {
                    correctCount++;
                    tempGuess[i] = null;
                    tempAnswer[i] = null;
                }
            }
            for (let i = 0; i < WORD_LENGTH; i++) {
                if (tempGuess[i] !== null) {
                    const answerIndex = tempAnswer.indexOf(tempGuess[i]);
                    if (answerIndex !== -1) {
                        presentCount++;
                        tempAnswer[answerIndex] = null;
                    }
                }
            }
            document.getElementById(`info-correct-${boardIndex}-${currentRow}`).textContent = correctCount;
            document.getElementById(`info-present-${boardIndex}-${currentRow}`).textContent = presentCount;
        }
    }

    function revealGuess() {
        const guess = currentGuess;
        guessHistory.push(guess); 
        previousGuess = guess; 
        
        let allGamesWon = true;
        let activeGameCount = 0;
        
        for(let i = 0; i < GAME_COUNT; i++) {
            if (gameStates[i].status === 'active') {
                runGuessLogic(guess, i);
                
                if (guess === targetWords[i]) {
                    gameStates[i].status = 'won';
                    gameStates[i].solvedRow = currentRow; 
                    document.getElementById(`mini-board-${i}`).classList.add('solved');
                    showToast(`Board ${i+1} solved!`);
                } else {
                    allGamesWon = false; 
                    activeGameCount++;
                }
            }
        }
        
        updateKeyboard(); 

        if (allGamesWon) {
            showAnswerInHeader('win');
            setTimeout(() => showToast(`You won!`), 100);
        } else if (currentRow === GUESS_COUNT - 1 && !settingInfinite.checked) {
            for(let i = 0; i < GAME_COUNT; i++) {
                if(gameStates[i].status === 'active') gameStates[i].status = 'lost';
            }
            showAnswerInHeader('lose');
            setTimeout(() => showToast(`Out of guesses!`), 100);
        } else {
            currentRow++;
            currentGuess = "";
            if (currentRow < GUESS_COUNT) {
                for(let i = 0; i < GAME_COUNT; i++) {
                    if (gameStates[i].status === 'active') {
                        addNewGuessRow(i);
                    }
                }
            }
            saveGame(); 
        }
    }
    function showAnswerForGame(boardIndex, answer) {
    const answerContainer = document.getElementById(`answer-container-${boardIndex}`);
    if (answerContainer) {
        answerContainer.innerHTML = `<a href="https://en.wiktionary.org/wiki/${answer}" target="_blank">${answer}</a>`;
        answerContainer.style.display = 'block';
    }
}
    loadGame();
});
