namespace MathPuzzle {

    /**
     * GameController
     * This class is resposible for controlling all the game itself.
     */
    export class GameController {

        private _board: Board;
        private _currentValue: number = 1;
        private _currentCell: Cell;

        /**
         * Starts the game by create the board.
         */
        public start(): void {
            this._board = new MathPuzzle.Board(this);
        }

        /**
         * Receives notifications when a cell is clicked and change the board
         * based on it's value.
         * @param cell
         */
        public notify(cell: Cell): void {
            if(this._currentValue == 1) {
                cell.value = this._currentValue;
                this.activePossibleCells(cell);
                this._currentValue++;
                this._currentCell = cell;
            } else {
                if(CoordinateCalculator.getPossibleCells(this._currentCell).indexOf(cell.id) < 0 || cell.value !== null) {
                    this.showMessage('Invalid Cell');
                } else {
                    this.showMessage('');
                    cell.value = this._currentValue;
                    this.deactivatePossibleCells(this._currentCell);
                    console.log(this.getAvailableCellIds(cell).length);
                    if(this.getAvailableCellIds(cell).length == 0) {
                        this.showMessage('Your are Locked');
                    }
                    this.activePossibleCells(cell);
                    this._currentValue++;
                    this._currentCell = cell;
                }
            }

        }

        /**
         * Returns an array with all available cells that the user can click.
         * @param cell
         */
        private getAvailableCellIds(cell:Cell): number[] {
            return CoordinateCalculator.getPossibleCells(cell).filter((id: number) => {
                return this._board.cells[id].value == null;
            });
        }

        /**
         * Activate all possible cells.
         * @param cell 
         */
        private activePossibleCells(cell:Cell): void {
            this._board.activeCells(this.getAvailableCellIds(cell));
        }

        /**
         * Deactivate all possible cells.
         * @param cell
         */
        private deactivatePossibleCells(cell: Cell): void {
            this._board.deactivateCells(CoordinateCalculator.getPossibleCells(cell));
        }

        /**
         * Show a message under the board.
         * @param message
         */
        private showMessage(message: string): void {
            $(Configuration.infoId).html(message);
        }

    }
}
