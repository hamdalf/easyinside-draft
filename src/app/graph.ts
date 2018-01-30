import { Astar } from './astar';

export class Graph {
    nodes: any;
    diagonal: any;
    grid: any;
    dirtyNodes: any;
    astar: Astar;

    constructor(gridIn, options: any) {
        this.astar = new Astar();
        this.nodes = [];
        this.diagonal = !!options.diagonal;
        this.grid = [];
        for (let x = 0; x < gridIn.length; x++) {
            this.grid[x] = [];

            for (let y = 0, row = gridIn[x]; y < row.length; y++) {
                let node = new GridNode(x, y, row[y]);
                this.grid[x][y] = node;
                this.nodes.push(node);
            }
        }
        this.init();
    }

    init(): void {
        this.dirtyNodes = [];
        for (let i = 0; i < this.nodes.length; i++) {
            this.astar.cleanNode(this.nodes[i]);
        }
    }

    cleanDirty(): void {
        for (let i = 0; i < this.dirtyNodes.length; i++) {
            this.astar.cleanNode(this.dirtyNodes[i]);
        }
        this.dirtyNodes = [];
    }

    markDirty(node: any): void {
        this.dirtyNodes.push(node);
    }
    
    neighbors(node: any): any {
        let ret = [],
            x = node.x,
            y = node.y,
            grid = this.grid;

        // West
        if(grid[x-1] && grid[x-1][y]) {
            ret.push(grid[x-1][y]);
        }

        // East
        if(grid[x+1] && grid[x+1][y]) {
            ret.push(grid[x+1][y]);
        }

        // South
        if(grid[x] && grid[x][y-1]) {
            ret.push(grid[x][y-1]);
        }

        // North
        if(grid[x] && grid[x][y+1]) {
            ret.push(grid[x][y+1]);
        }

        if (this.diagonal) {
            // Southwest
            if(grid[x-1] && grid[x-1][y-1]) {
                ret.push(grid[x-1][y-1]);
            }

            // Southeast
            if(grid[x+1] && grid[x+1][y-1]) {
                ret.push(grid[x+1][y-1]);
            }

            // Northwest
            if(grid[x-1] && grid[x-1][y+1]) {
                ret.push(grid[x-1][y+1]);
            }

            // Northeast
            if(grid[x+1] && grid[x+1][y+1]) {
                ret.push(grid[x+1][y+1]);
            }
        }

        return ret;
    }

    toString(): any {
        let graphString = [],
            nodes = this.grid, // when using grid
            rowDebug, row, y, l;
        for (let x = 0, len = nodes.length; x < len; x++) {
            rowDebug = [];
            row = nodes[x];
            for (y = 0, l = row.length; y < l; y++) {
                rowDebug.push(row[y].weight);
            }
            graphString.push(rowDebug.join(" "));
        }
        return graphString.join("\n");
    }
}

export class GridNode {
    x: number;
    y: number;
    weight: number;

    constructor(x: number, y: number, weight: number) {
        this.x = x;
        this.y = y;
        this.weight = weight;
    }

    toString(): string {
        return "[" + this.x + " " + this.y + "]";
    };

    getCost(): number {
        return this.weight;
    };

    isWall(): boolean {
        return this.weight === 0;
    }
}