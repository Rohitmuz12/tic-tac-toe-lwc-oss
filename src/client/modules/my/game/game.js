/* eslint-disable consistent-return */
import { LightningElement, track } from 'lwc';
import * as socketIo from 'socket.io-client';

export default class Game extends LightningElement {
    @track gameBlock = [];
    renderComplete = false;
    activeGame = false;
    currentColor = 'white';
    currentSymbol = 'X';
    channelName = '/event/TicTocEvent__e';
    subscription;
    selectedChannel;
    receiverPlayerName;
    senderPlayerName;
    senderGameId;
    receiverGameId;
    showOverLay = false;
    winningOrLoseMsg;
    winningOrLose = false;
    progress = 1;
    showProgress = false;
    isRematch = false;
    isNoPlayer = false;

    socket = socketIo.connect('https://tic-tac-toe-lwc-oss.herokuapp.com/');

    renderedCallback() {
        if (!this.renderComplete) {
            this.renderComplete = true;
            this.setGameBlock();
        }
    }

    connectedCallback() {
        //From opp to player
        this.socket.on('joinned', (data) => {
            console.log('under if');
            this.socket.emit('room id confirmation', {
                joinned: true,
                playerName: this.senderPlayerName,
                roomId: data.roomId
            });
            this.receiverPlayerName = data.playerName;
            this.senderGameId = data.roomId;
            this.activateGame();
            this.showProgress = true;
            this.progress = 1;
            this.template.querySelector(
                '.slds-progress-bar__value'
            ).style = `width : ${this.progress}%`;
            this.setIntervalFunction();
            console.log(data);
            console.log('Under Joinned');
        });

        //To opp
        this.socket.on('room full', (data) => {
            //Room already full
            console.log(data);
        });

        //To opp
        this.socket.on('successfully connected', (data) => {
            this.receiverPlayerName = data.playerName;
            console.log(this.receiverPlayerName);
            console.log('startgame');
            this.activateGame();
            this.showOverLay = true;
            console.log('Room connected successfully');
        });

        //From player to create room
        this.socket.on('get roomId', (roomId) => {
            this.template.querySelector('my-gamepanel').waitForPlayer(roomId);
            this.senderGameId = roomId;
        });

        this.socket.on('move played', (data) => {
            this.showOverLay = false;
            this.playMove(data.cordinate);
            if (this.checkForWinning(this.currentSymbol, data.cordinate)) {
                this.winningOrLoseMsg = 'You lose';
                this.winningOrLose = true;
            } else if (this.isGridFull()) {
                this.winningOrLoseMsg = 'Game tied';
                this.winningOrLose = true;
            } else {
                this.showProgress = true;
                this.progress = 1;
                this.template.querySelector(
                    '.slds-progress-bar__value'
                ).style = `width : ${this.progress}%`;
                this.setIntervalFunction();
            }
        });

        this.socket.on('rematch', (data) => {
            console.log('rematch');
            if (this.winningOrLose) {
                if (data === 'rematch') {
                    this.isRematch = true;
                }
            } else {
                this.socket.emit('player not available', {
                    roomId: this.senderGameId
                });
            }
        });

        this.socket.on('no player', (data) => {
            console.log('no player');
            if (data === 'noPlayer') {
                this.isNoPlayer = true;
            }
        });
    }

    startAgain() {
        this.winningOrLose = false;
        this.renderComplete = false;
        this.activateGame();
        console.log('Under start game');
        console.log(this.senderGameId);
        if (this.selectedChannel === 'online') {
            this.showOverLay = true;
            this.socket.emit('start again', {
                roomId: this.senderGameId
            });
        }
        this.renderedCallback();
    }

    rematch() {
        this.isRematch = false;
        this.renderComplete = false;
        this.winningOrLose = false;
        this.activateGame();
        this.renderedCallback();
    }

    exitGame() {
        this.winningOrLose = false;
        this.renderComplete = false;
        this.winningOrLose = false;
        this.showOverLay = false;
        this.isNoPlayer = false;
        if (this.isRematch) {
            this.socket.emit('player not available', {
                roomId: this.senderGameId
            });
        }
        this.senderPlayerName = '';
        this.receiverPlayerName = '';
        this.renderedCallback();
        this.activeGame = false;
        this.isRematch = false;
    }

    //Set receiverId amd own player name. Called from child component.
    //When click on join button from child component
    //From opp to player for connection to player
    joinGameRoom(roomId, playerName) {
        console.log(roomId);
        this.socket.emit('confirm room id', {
            roomId: roomId,
            playerName: playerName
        });
    }

    setReceiverId(event) {
        this.joinGameRoom(
            event.detail.receiverGameId,
            event.detail.senderPlayerName
        );
        this.senderGameId = event.detail.receiverGameId;
        this.senderPlayerName = event.detail.senderPlayerName;
        this.selectedChannel = 'online';
    }

    activateGame() {
        this.activeGame = true;
    }

    //Set interval to create a certain time in which player have to play
    setIntervalFunction() {
        this.timeOutVar = setInterval(() => {
            console.log('under interval function ' + this.progress);
            if (this.progress === 100) {
                console.log('under clear interval');
                this.clearIntervalFun();
            } else {
                this.progress += 1;
                this.template.querySelector(
                    '.slds-progress-bar__value'
                ).style = `width : ${this.progress}%`;
            }
        }, 300);
    }

    //Clear time if play play his turn
    //If it automatically get called then current player will lose
    clearIntervalFun() {
        if (this.progress === 100) {
            this.winningOrLose = true;
            if (this.selectedChannel === 'offline') {
                if (this.currentSymbol === 'O')
                    this.winningOrLoseMsg =
                        'Time over \n' + this.receiverPlayerName + ' lose!';
                else
                    this.winningOrLoseMsg =
                        'Time over \n' + this.senderPlayerName + ' lose!';
            }

            //Add time interval logic for online player
        }
    }

    //Set game block and create grid to play
    setGameBlock() {
        this.gameBlock = [];
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                let obj;

                obj = {
                    class: 'blank',
                    cordinate: `${x} : ${y}`,
                    label: 'T'
                };
                this.gameBlock.push(obj);
            }
        }
        console.log(this.gameBlock);
    }

    //handle game grid and move
    handleBlock(event) {
        clearInterval(this.timeOutVar);
        this.showProgress = false;
        let targetId = event.target.dataset.targetId;
        if (
            this.gameBlock[this.getIndexByCordinate(targetId)].class !== 'blank'
        ) {
            return false;
        }
        const win = this.playMove(targetId);
        if (this.selectedChannel === 'online') {
            this.socket.emit('play move', {
                cordinate: targetId,
                roomId: this.senderGameId
            });
        }
        if (win) {
            if (this.selectedChannel === 'offline') {
                if (this.currentSymbol === 'O') {
                    this.winningOrLoseMsg = this.senderPlayerName + ' win!';
                } else {
                    this.winningOrLoseMsg = this.receiverPlayerName + ' win!';
                }
            } else {
                this.winningOrLoseMsg = 'You win!';
            }
            this.winningOrLose = true;
        } else if (this.isGridFull()) {
            this.winningOrLoseMsg = 'Game tied';
            this.winningOrLose = true;
        } else if (!win) {
            if (this.selectedChannel === 'online') this.showOverLay = true;
            else {
                this.progress = 1;
                this.template.querySelector(
                    '.slds-progress-bar__value'
                ).style = `width : ${this.progress}%`;
                this.setIntervalFunction();
            }
        }
    }

    isGridFull() {
        let isFull = true;

        this.gameBlock.forEach((element) => {
            if (element.class === 'blank') isFull = false;
        });

        return isFull;
    }

    playMove(currentCordinate) {
        const currentIndex = this.getIndexByCordinate(currentCordinate);
        this.gameBlock[currentIndex].class =
            this.currentColor === 'black' ? 'white' : 'black';
        this.currentColor = this.currentColor === 'black' ? 'white' : 'black';
        this.gameBlock[currentIndex].label =
            this.currentSymbol === 'X' ? 'O' : 'X';
        this.currentSymbol = this.currentSymbol === 'X' ? 'O' : 'X';
        return this.checkForWinning(this.currentSymbol, currentCordinate);
    }

    //Check for the winning.
    checkForWinning(currentSymbol, currentCordinate) {
        console.log(currentSymbol);
        let xandy = currentCordinate.split(' : ');
        let x =
            8 - Number(xandy[0]) === 8 ? 0 : 8 - Number(xandy[0]) === 7 ? 3 : 6;
        let y =
            8 - Number(xandy[1]) === 8 ? 0 : 8 - Number(xandy[1]) === 7 ? 1 : 2;

        console.log(x);
        console.log(y);

        for (let i = x; i < x + 3; i++) {
            if (this.gameBlock[i].label !== currentSymbol) {
                break;
            }
            if (i === x + 3 - 1) {
                return true;
            }
        }

        for (let i = y; i <= y + 6; i += 3) {
            if (this.gameBlock[i].label !== currentSymbol) {
                break;
            }
            if (i === y + 6) {
                return true;
            }
        }

        if (xandy[0] === xandy[1]) {
            for (let i = 0; i <= 8; i += 4) {
                if (this.gameBlock[i].label !== currentSymbol) break;
                if (i === 8) {
                    return true;
                }
            }
        }

        if (Number(xandy[0]) + Number(xandy[1]) === 2) {
            for (let i = 2; i <= 6; i += 2) {
                if (this.gameBlock[i].label !== currentSymbol) break;
                if (i === 6) {
                    return true;
                }
            }
        }

        return false;
    }

    //get index of game block by cordinate
    getIndexByCordinate(currentCordinate) {
        let currentIndex = this.gameBlock.findIndex(
            (x) => x.cordinate === currentCordinate
        );

        return currentIndex;
    }

    createRoom() {
        this.socket.emit('create room');
    }

    //Called from child component
    startGame(event) {
        this.selectedChannel = event.detail.selectedChannel;
        if (this.selectedChannel === 'online') {
            this.createRoom(this.senderGameId);
        } else {
            console.log(this.selectedChannel);
            this.receiverPlayerName = event.detail.opponentName;
            this.setIntervalFunction();
            this.activateGame();
        }
        this.senderPlayerName = event.detail.playerName;
    }
}
