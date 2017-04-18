namespace MathPuzzle {

    /**
     * CoordinateCalculator
     * Responsible for calculating all the possible coordinates that
     * the user can set during the game.
     */
    export class CoordinateCalculator {

        /**
         * Returns an array with all the possible cells that the user can 
         * click.
         * @static
         * @param cell
         */
        public static getPossibleCells(cell: Cell): number[] {
            let possibleCells: number[] = [];
            const id = Number(cell.id);
            possibleCells.push(CoordinateCalculator.calculateTop(id));
            possibleCells.push(CoordinateCalculator.calculateDown(id));
            possibleCells.push(CoordinateCalculator.calculateLeft(id));
            possibleCells.push(CoordinateCalculator.calculateRight(id));
            possibleCells.push(CoordinateCalculator.calculateTopLeft(id));
            possibleCells.push(CoordinateCalculator.calculateTopRight(id));
            possibleCells.push(CoordinateCalculator.calculateDownLeft(id));
            possibleCells.push(CoordinateCalculator.calculateDownRight(id));
            possibleCells = possibleCells.filter((val: number) => {
                return val > 0 && val < 100;
            });
            return possibleCells;
        }

        /**
         * Calculate the top cell based on the id.
         * @param id
         */
        public static calculateTop(id:number): number {
            return id - 30;
        }

        /**
         * Calculate the down cell based on the id.
         * @param id 
         */
        public static calculateDown(id: number): number {
            return id + 30;
        }

        /**
         * Calculate the left cell based on the id.
         * @param id
         */
        public static calculateLeft(id: number): number {
            if((id % 10) >= 3) {
                return id - 3;
            }
            return -1;
        }

        /**
         * Calculate the right cell based on the id.
         * @param id
         */
        public static calculateRight(id: number): number {
            if(id + 3 < (Math.floor((id + 10) / 10) * 10)) {
                return id + 3;
            }
            return -1;
        }

        /**
         * Calculate the top left cell based on the id.
         * @param id
         */
        public static calculateTopLeft(id: number): number {
            if((id - 22) >= Math.floor((id - 20) / 10) * 10 && (id - 22) <= Math.ceil((id - 20) / 10) * 10) {
                return id - 22;
            }
            return -1
        }

        /**
         * Calculate the top right cell based on the id.
         * @param id
         */
        public static calculateTopRight(id: number): number {
            if((id - 18) >= Math.floor((id - 20) / 10) * 10 && (id - 18) < Math.floor((id - 10) / 10) * 10) {
                return id - 18;
            }
            return -1;
        }

        /**
         * Calculate the down left cell based on the id.
         * @param id
         */
        public static calculateDownLeft(id: number): number {
            if((id + 18) >= Math.floor((id + 20) / 10) * 10 && (id + 18) < Math.floor((id + 30) / 10) * 10) {
                return id + 18;
            }
            return -1;
        }

        /**
         * Calculate the down right cell based on the id.
         * @param id
         */
        public static calculateDownRight(id: number): number {
            if((id + 22) >= Math.floor((id + 20) / 10) * 10 && (id + 22) < Math.floor((id + 30) / 10) * 10) {
                return id + 22;
            }
            return -1;
        }

    }
}
