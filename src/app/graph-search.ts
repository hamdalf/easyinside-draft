import { Astar } from './astar';
import { BinaryHeap } from './binary-heap';
import { Graph } from './graph';

export class GraphSearch {
    graph: Graph;
    startPoint: any;
    endPoint: any;
    astar: Astar;
    xLength: number;
    yLength: number;
    optimized: boolean;
    nodeRow: any;
    nodes: any;

    constructor() {
        this.astar = new Astar();
        this.optimized = false;
    }

    init(nodes: any): void {
        this.graph = new Graph(nodes, {});
    }

    setPoint(x1: number, y1: number, x2: number, y2: number): void {
        this.startPoint = this.graph.grid[x1][y1];
        this.endPoint = this.graph.grid[x2][y2];
    }

    set(floorData: any, deskData: any, XLength: number, YLength: number, usePath: boolean, callback: any): void {
        this.xLength = XLength;
        this.yLength = YLength;
        let xHalf = Math.floor(this.xLength / 2);
        let yHalf = Math.floor(this.yLength / 2);

        this.nodes = [];
        let nodeRow: any;
        for (let x = 0; x < this.xLength; x++) {
            nodeRow = [];
            for (var y = 0; y < this.yLength; y++) {
                nodeRow.push(0); // Prevented position like as Wall
            }
            this.nodes.push(nodeRow);
        }

        if (usePath) {
            for (let i = 0; i < floorData.length; i++) {
                this.nodes[floorData[i].x + xHalf][floorData[i].z + yHalf] = (floorData[i].p === 2) ? 1 : 0;
            }
        } else {
            for (let i = 0; i < floorData.length; i++) {
                this.nodes[floorData[i].x + xHalf][floorData[i].z + yHalf] = floorData[i].p;
            }
        }

        let fW, tW, fH, tH, typeArr, minW, maxW, minH, maxH;
        for (let i = 0; i < deskData.length; i++) {
            if (deskData[i].p == 'desk') {
                if (deskData[i].n.indexOf('160') > -1) {
                    if (deskData[i].r == true) {
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - 5;
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + 3;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - 8;
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + 8;
                    } else {
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - 8;
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + 8;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - 5;
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + 3;
                    }
                } else if (deskData[i].n.indexOf('200') > -1) {
                    if (deskData[i].r == true) {
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - 10;
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + 10;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - 20;
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + 20;
                    } else {
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - 20;
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + 20;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - 10;
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + 10;
                    }
                }
            } else {
                typeArr = deskData[i].n.substr(deskData[i].n.indexOf(' ')).split('x');
                if (deskData[i].r == true) {
                    if (typeArr[0] % 2 === 0) {
                        if (typeArr[1] % 2 === 0) {
                            minW = Math.floor(typeArr[1] / 2);
                            maxW = minW;
                            minH = Math.floor(typeArr[0] / 2);
                            maxH = minH;
                        } else {
                            minW = Math.floor(typeArr[1] / 2);
                            maxW = minW + 1;
                            minH = Math.floor(typeArr[0] / 2);
                            maxH = minH;
                        }
                    } else {
                        if (typeArr[1] % 2 === 0) {
                            minW = Math.floor(typeArr[1] / 2);
                            maxW = minW;
                            minH = Math.floor(typeArr[0] / 2);
                            maxH = minH + 1;
                        } else {
                            minW = Math.floor(typeArr[1] / 2);
                            maxW = minW + 1;
                            minH = Math.floor(typeArr[0] / 2);
                            maxH = minH + 1;
                        }
                    }
                    fW = Math.ceil(deskData[i].x / 10) + xHalf - (minW * 5);
                    tW = Math.ceil(deskData[i].x / 10) + xHalf + (maxW * 5);
                    fH = Math.ceil(deskData[i].z / 10) + yHalf - (minH * 5);
                    tH = Math.ceil(deskData[i].z / 10) + yHalf + (maxH * 5);
                } else {
                    if (typeArr[0] % 2 === 0) {
                        minW = Math.floor(typeArr[0] / 2);
                        maxW = minW;
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - (minW * 5);
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + (maxW * 5);
                    } else {
                        minW = Math.floor(typeArr[0] / 2);
                        maxW = minW + 1;
                        fW = Math.ceil(deskData[i].x / 10) + xHalf - (minW * 5);
                        tW = Math.ceil(deskData[i].x / 10) + xHalf + (maxW * 5);
                    }
                    if (typeArr[1] % 2 === 0) {
                        minH = Math.floor(typeArr[1] / 2);
                        maxH = minH;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - (minH * 5);
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + (maxH * 5);
                    } else {
                        minH = Math.floor(typeArr[1] / 2);
                        maxH = minH + 1;
                        fH = Math.ceil(deskData[i].z / 10) + yHalf - (minH * 5);
                        tH = Math.ceil(deskData[i].z / 10) + yHalf + (maxH * 5);
                    }
                }
            }
            
            for (let x = fW; x < tW; x++) {
                for (let y = fH; y < tH; y++) {
                    this.nodes[x][y] = 0;   // Prevented position like as Wall
                }
            }
        }

        this.init(this.nodes);
        callback();
    }

    getNearestPoint(x1: number, y1: number): any {
        let x, y, tmpLmt;

        for (let l = 0; l < 50; l++) {
            //console.log(l);
            x = (x1 - l >= 0) ? x1 - l : 0;
            tmpLmt = (y1 + l < this.yLength) ? y1 + l : this.yLength - 1;
            for (y = (y1 - l >= 0) ? y1 - l : 0; y <= tmpLmt; y++) {
                //console.log('part1:',x, y, y1+l);
                if (this.graph.grid[x][y].weight > 0) {
                    return {"x": x, "y": y};
                }
            }
            y = (y1 - l >= 0) ? y1 - l : 0;
            tmpLmt = (x1 + l < this.xLength) ? x1 + l : this.xLength;
            for (x = (x1 - l + 1 >= 0) ? x1 - l + 1 : 0; x < tmpLmt; x++) {
                //console.log(x, y);
                if (this.graph.grid[x][y].weight > 0) {
                    return {"x": x, "y": y};
                }
            }
            y = (y1 + l < this.yLength) ? y1 + l : this.yLength - 1;
            tmpLmt = (x1 + l < this.xLength) ? x1 + l : this.xLength;
            for (x = (x1 - l + 1 >= 0) ? x1 - l + 1 : 0; x < tmpLmt; x++) {
                //console.log(x, y);
                if (this.graph.grid[x][y].weight > 0) {
                    return {"x": x, "y": y};
                }
            }
            x = (x1 + l < this.xLength) ? x1 + l  : this.xLength - 1;
            tmpLmt = (y1 + l < this.yLength) ? y1 + l : this.yLength - 1;
            for (y = (y1 - l >= 0) ? y1 - l : 0; y <= tmpLmt; y++) {
                //console.log(x, y);
                if (this.graph.grid[x][y].weight > 0) {
                    return {"x": x, "y": y};
                }
            }
        }
        return false;
    }
}
