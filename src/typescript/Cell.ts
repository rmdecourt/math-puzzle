namespace MathPuzzle {

    /**
     * Cell
     * A simple class responsible for storing all the information
     * about a certain cell and for changing it's DOM element.
     */
    export class Cell {

        private _element: JQuery;
        private _id: number;
        private _value: number = null;

        /**
         * Creates a new cell based on its DOM element.
         * @constructor
         * @param element
         */
        public constructor(element: JQuery) {
            this._element = element;
            this._id = Number(this._element.attr('id'));
        }

        /**
         * Returns the cell's value.
         */
        get value(): number {
            return this._value;
        }

        /**
         * Sets the cell's values.
         */
        set value(value: number) {
            this._value = value;
            this._element.html(value.toString());
        }

        /**
         * Returns the cell's id.
         */
        get id(): number {
            return this._id;
        }

        /**
         * Activates the cell.
         */
        public activateCell(): void {
            this._element.css('background-color', Configuration.activeCellColor);
        }

        /**
         * Deactivates the cell.
         */
        public deactiveCell(): void {
            this._element.css('background-color', Configuration.deactiveCellColor);
        }

    }

}
