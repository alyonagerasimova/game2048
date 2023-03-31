import {Cell} from "./cell.js";

const GRID_SIZE = 4;
const COUNT_CELLS = GRID_SIZE * GRID_SIZE;

export class Grid {
    constructor(gridElement) {
        this.cells = [];
        for (let i = 0; i < COUNT_CELLS; i++) {
            this.cells.push(
                new Cell(gridElement, i % GRID_SIZE, Math.floor(i / GRID_SIZE))
            );
        }
        this.cellsGroupedByColumn = this.groupCellsByColumn();
        this.cellsGroupedByReversedColumn = this.cellsGroupedByColumn.map(column => [...column].reverse());
        this.cellsGroupedByRow = this.groupCellsByRow();
        this.cellsGroupedByReversedRow = this.cellsGroupedByRow.map(row => [...row].reverse());
    }

    getRandomEmptyCell() {
        const emptyCell = this.cells.filter(cell => cell.isEmpty());
        const randIndex = Math.floor(emptyCell.length * Math.random());
        return emptyCell[randIndex];
    }

    groupCellsByColumn() {
        return this.cells.reduce((groupCells, cell) => {
            groupCells[cell.x] = groupCells[cell.x] || [];
            groupCells[cell.x][cell.y] = cell;
            return groupCells;
        }, []);
    }

    groupCellsByRow() {
        return this.cells.reduce((groupCells, cell) => {
            groupCells[cell.y] = groupCells[cell.y] || [];
            groupCells[cell.y][cell.x] = cell;
            return groupCells;
        }, []);
    }
}