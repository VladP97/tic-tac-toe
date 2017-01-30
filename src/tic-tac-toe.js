class TicTacToe {
    constructor() {
        this.field = [[null,null,null],[null,null,null],[null,null,null]];;
        this.turnIs = 'x';
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                this.field[i][j] = null;
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.turnIs;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] == null) {
            this.field[rowIndex][columnIndex] = this.turnIs;
            if (this.turnIs == 'x') {
                this.turnIs = 'o';
            } else {
                this.turnIs = 'x';
            }
        }
    }

    isFinished() {
        if ((this.noMoreTurns() == true) || (this.getWinner() == 'x') || (this.getWinner() == 'o')) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        if ((this.field[0][0] == 'x') & (this.field[1][1] == 'x') & (this.field[2][2] == 'x')) {
            return 'x';
        }
        if ((this.field[1][1] == 'x') & (this.field[2][0] == 'x') & (this.field[0][2] == 'x')) {
            return 'x';
        }
        for (var i = 0; i < 3; i++) {
            if ((this.field[i][0] == 'x') & (this.field[i][1] == 'x') & (this.field[i][2] == 'x')) {
                return 'x';
            }
        }
        for (var i = 0; i < 3; i++) {
            if ((this.field[0][i] == 'x') & (this.field[1][i] == 'x') & (this.field[2][i] == 'x')) {
                return 'x';
            }
        }
        if ((this.field[0][0] == 'o') & (this.field[1][1] == 'o') & (this.field[2][2] == 'o')) {
            return 'o';
        }
        if ((this.field[1][1] == 'o') & (this.field[2][0] == 'o') & (this.field[0][2] == 'o')) {
            return 'o';
        }
        for (var i = 0; i < 3; i++) {
            if ((this.field[i][0] == 'o') & (this.field[i][1] == 'o') & (this.field[i][2] == 'o')) {
                return 'o';
            }
        }
        for (var i = 0; i < 3; i++) {
            if ((this.field[0][i] == 'o') & (this.field[1][i] == 'o') & (this.field[2][i] == 'o')) {
                return 'o';
            }
        }
        return null;
    }

    noMoreTurns() {
        var turnsCount = 0;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.field[i][j] != null) {
                    turnsCount++;
                }
            }
        }
        if (turnsCount == 9) {
            return true;
        } else {
            return false;
        }
    }

    isDraw() {
        if ((this.getWinner() != 'y') & (this.getWinner() != 'x') & (this.noMoreTurns() == true)) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
