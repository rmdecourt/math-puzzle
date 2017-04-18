namespace MathPuzzle {

    /**
     * Board
     * Responsible for initializing the board, control
     * all the board events and notify the game controller when a cell
     * is activated.
     */
    export class Board {

        private _controller: GameController;
        private _cells: Cell[] = [];

        /**
         * Initialize the board and bind events to the cells.
         * @constructor
         * @param controller
         */
        public constructor(controller: GameController) {
            this._controller = controller;
            this.initializeBoard();
            this.bindEvents();
        }

        /**
         * Bind events do the cell, so the board can notify the controller
         * when the cell is clicked.
         */
        private bindEvents(): void {
            $('#board').on('click', 'td', (e:Event) => {
                this.notifyController(this._cells[Number($(e.target).attr('id'))]);
            });
        }

        /**
         * Notify the controller when the cell is clicked.
         * @param cell
         */
        private notifyController(cell:Cell): void {
            this._controller.notify(cell);
        }

        /**
         * Initialize the board.
         */
        private initializeBoard(): void {
            const table: JQuery = $('<table></table>');
            table.attr('id','board');
            let tr: JQuery = $('<tr></tr>');
            for(let i:number = 0; i<=100; i++) {
                if(i % 10 == 0) {
                    table.append(tr);
                    tr = $('<tr></tr>');
                }
                let td: JQuery = $('<td></td>');
                td.attr('id', i);
                tr.append(td);
                this._cells.push(new Cell(td));
            }
            $(Configuration.placeholderId).append(table);
        }

        /**
         * Activate all cells by ids.
         * @param id
         */
        public activeCells(id: number[]): void {
            id.forEach((id: number) => this._cells[id].activateCell());
        }

        /**
         * Deactive all cells by id.
         * @param id
         */
        public deactivateCells(id: number[]): void {
            id.forEach((id: number) => this._cells[id].deactiveCell());
        }

        /**
         * Returns the cells array.
         */
        get cells(): Cell[] {
            return this._cells;
        }

    }
}
