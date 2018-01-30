//import * as proj4 from 'proj4';
import * as proj4x from 'proj4';
let proj4 = (proj4x as any).default;

export class IndoorLocationConverter {
    map: any;

    constructor() {
        this.map = {
            geo: {
                zeroPoint: {        // array's 0,0 point
                    longitude: null,
                    latitude: null
                },
                horizontalPoint: {
                    longitude: null,
                    latitude: null
                },
                verticalPoint: {
                    longitude: null,
                    latitude: null
                }
            },
            cartesian: {
                zeroPoint: null,    // {x:,y:} format
                horizontalPoint: null,
                verticalPoint: null,
                virtualHorizontalPoint: null,
                virtualVerticalPoint: null,
                rotateDegreeForTransform: null,    // radian unit
                x: {
                    length: null
                },
                y: {
                    length: null
                },
                objectScale: {
                    width: null,
                    height: null
                },
                getRotationDeg: function (p1, p2, p3) { // p1: center, p2 - p1 - p3 connection
                    var p12 = Math.sqrt(Math.pow((p1.x - p2.x),2) + Math.pow((p1.y - p2.y),2)),
                        p13 = Math.sqrt(Math.pow((p1.x - p3.x),2) + Math.pow((p1.y - p3.y),2)),
                        p23 = Math.sqrt(Math.pow((p2.x - p3.x),2) + Math.pow((p2.y - p3.y),2)),
                        resultDegree = Math.acos(((Math.pow(p12, 2)) + (Math.pow(p13, 2)) - (Math.pow(p23, 2))) / (2 * p12 * p13)) * 180 / Math.PI;
                        
                    return resultDegree;
                },
                getRotationRad: function (p1, p2, p3) { // p1: center, p2 - p1 - p3 connection
                    var p12 = Math.sqrt(Math.pow((p1.x - p2.x),2) + Math.pow((p1.y - p2.y),2)),
                        p13 = Math.sqrt(Math.pow((p1.x - p3.x),2) + Math.pow((p1.y - p3.y),2)),
                        p23 = Math.sqrt(Math.pow((p2.x - p3.x),2) + Math.pow((p2.y - p3.y),2)),
                        resultRadian = Math.acos(((Math.pow(p12, 2)) + (Math.pow(p13, 2)) - (Math.pow(p23, 2))) / (2 * p12 * p13));
                        
                    return resultRadian;
                },
                getDistance: function (p1, p2) {
                    var xdf = p2.x - p1.x,
                        ydf = p2.y - p1.y;
                    return Math.sqrt(Math.pow(xdf, 2) + Math.pow(ydf, 2));
                }
            },
            array: {
                x: {
                    min: null,
                    max: null,
                    length: null,
                    reverseFactor: 1
                },
                y: {
                    min: null,
                    max: null,
                    length: null,
                    reverseFactor: 1
                }
            },
            canvas: {
                x: {
                    min: null,
                    max: null,
                    length: null,
                    reverseFactor: 1
                },
                y: {
                    min: null,
                    max: null,
                    length: null,
                    reverseFactor: 1
                }
            }
        };
    }

    setGeoMap(zeroPointLongitude: number, zeroPointLatitude: number, horizontalPointLongitude: number, horizontalPointLatitude: number, verticalPointLongitude: number, verticalPointLatitude: number): void {
        var gps = proj4.Proj('EPSG:4326');    //source coordinates will be in Longitude/Latitude, WGS84
        var cat = proj4.Proj('EPSG:3785');    //destination coordinates in meters, global spherical mercators projection, see http://spatialreference.org/ref/epsg/3785/
    
        this.map.geo.zeroPoint.longitude = zeroPointLongitude;
        this.map.geo.zeroPoint.latitude = zeroPointLatitude;
        this.map.geo.horizontalPoint.longitude = horizontalPointLongitude;
        this.map.geo.horizontalPoint.latitude = horizontalPointLatitude;
        this.map.geo.verticalPoint.longitude = verticalPointLongitude;
        this.map.geo.verticalPoint.latitude = verticalPointLatitude;
        
        this.map.cartesian.zeroPoint = proj4.transform(gps, cat, proj4.toPoint([this.map.geo.zeroPoint.longitude, this.map.geo.zeroPoint.latitude]));
        this.map.cartesian.horizontalPoint = proj4.transform(gps, cat, proj4.toPoint([this.map.geo.horizontalPoint.longitude, this.map.geo.horizontalPoint.latitude]));
        this.map.cartesian.verticalPoint = proj4.transform(gps, cat, proj4.toPoint([this.map.geo.verticalPoint.longitude, this.map.geo.verticalPoint.latitude]));
        
        var parallelRotationDirection = -1; // -1 : clock wise, 1: anti clock wise
        var tmpParallelPoint = {x: this.map.cartesian.zeroPoint.x + parallelRotationDirection, y: this.map.cartesian.zeroPoint.y};
        
        this.map.cartesian.rotateDegreeForTransform = parallelRotationDirection * this.map.cartesian.getRotationRad(this.map.cartesian.zeroPoint, this.map.cartesian.horizontalPoint, tmpParallelPoint);
        
        var vX = this.map.cartesian.verticalPoint.x - this.map.cartesian.zeroPoint.x,
            vY = this.map.cartesian.verticalPoint.y - this.map.cartesian.zeroPoint.y,
            rX = vX * Math.cos(this.map.cartesian.rotateDegreeForTransform) - vY * Math.sin(this.map.cartesian.rotateDegreeForTransform),
            rY = vX * Math.sin(this.map.cartesian.rotateDegreeForTransform) + vY * Math.cos(this.map.cartesian.rotateDegreeForTransform);
            
        this.map.cartesian.virtualVerticalPoint = {x: rX + this.map.cartesian.zeroPoint.x, y: rY + this.map.cartesian.zeroPoint.y};
        
        vX = this.map.cartesian.horizontalPoint.x - this.map.cartesian.zeroPoint.x;
        vY = this.map.cartesian.horizontalPoint.y - this.map.cartesian.zeroPoint.y;
        rX = vX * Math.cos(this.map.cartesian.rotateDegreeForTransform) - vY * Math.sin(this.map.cartesian.rotateDegreeForTransform);
        rY = vX * Math.sin(this.map.cartesian.rotateDegreeForTransform) + vY * Math.cos(this.map.cartesian.rotateDegreeForTransform);
            
        this.map.cartesian.virtualHorizontalPoint = {x: rX + this.map.cartesian.zeroPoint.x, y: rY + this.map.cartesian.zeroPoint.y};
        
        var xMin = Math.min(this.map.cartesian.virtualHorizontalPoint.x, this.map.cartesian.zeroPoint.x),
            xMax = Math.max(this.map.cartesian.virtualHorizontalPoint.x, this.map.cartesian.zeroPoint.x),
            yMin = Math.min(this.map.cartesian.virtualVerticalPoint.y, this.map.cartesian.zeroPoint.y),
            yMax = Math.max(this.map.cartesian.virtualVerticalPoint.y, this.map.cartesian.zeroPoint.y);
            
        this.map.cartesian.x.length = xMax - xMin;
        this.map.cartesian.y.length = yMax - yMin;
    }

    setArrayMap(minX: number, maxX: number, minY: number, maxY: number, reverseFactorX: number, reverseFactorY: number): void {
        this.map.array.x.min = minX;
        this.map.array.x.max = maxX;
        this.map.array.y.min = minY;
        this.map.array.y.max = maxY;
        this.map.array.x.reverseFactor = reverseFactorX;
        this.map.array.y.reverseFactor = reverseFactorY;
        this.map.array.x.length = this.map.array.x.max - this.map.array.x.min + 1;
        this.map.array.y.length = this.map.array.y.max - this.map.array.y.min + 1;
        this.map.cartesian.objectScale.width = this.map.array.x.length * 0.1; // meter unit
        this.map.cartesian.objectScale.height = this.map.array.y.length * 0.1; // meter unit
    }

    setCanvasMap(minX: number, maxX: number, minY: number, maxY: number, reverseFactorX: number, reverseFactorY: number): void {
        this.map.canvas.x.min = minX;
        this.map.canvas.x.max = maxX;
        this.map.canvas.y.min = minY;
        this.map.canvas.y.max = maxY;
        this.map.canvas.y.reverseFactor = reverseFactorX;
        this.map.canvas.y.reverseFactor = reverseFactorY;
        this.map.canvas.x.length = this.map.canvas.x.max - this.map.canvas.x.min;
        this.map.canvas.y.length = this.map.canvas.y.max - this.map.canvas.y.min;
    }
}

export class GeoUnit {
    longitude: number;
    latitude: number;
    altitude: number;
    OLC: IndoorLocationConverter;

    constructor(longitude: number, latitude: number, altitude: number, indoorLocationConverter: IndoorLocationConverter) {
        this.longitude = longitude;
        this.latitude = latitude;
        this.altitude = altitude;
        this.OLC = indoorLocationConverter;
    }

    toArray(): ArrayUnit {
        let canvasUnit = this.toCanvas();
        return canvasUnit.toArray();
    }

    toCanvas(): CanvasUnit {
        let gps = proj4.Proj('EPSG:4326');    //source coordinates will be in Longitude/Latitude, WGS84
        let cat = proj4.Proj('EPSG:3785');    //destination coordinates in meters, global spherical mercators projection, see http://spatialreference.org/ref/epsg/3785/
        let ratioX = this.OLC.map.canvas.x.length / this.OLC.map.cartesian.x.length,
            ratioY = this.OLC.map.canvas.y.length / this.OLC.map.cartesian.y.length,
            cP = proj4.transform(gps, cat, proj4.toPoint([this.longitude, this.latitude])),
            vX = cP.x - this.OLC.map.cartesian.zeroPoint.x,
            vY = cP.y - this.OLC.map.cartesian.zeroPoint.y,
            rX = vX * Math.cos(this.OLC.map.cartesian.rotateDegreeForTransform) - vY * Math.sin(this.OLC.map.cartesian.rotateDegreeForTransform),
            rY = vX * Math.sin(this.OLC.map.cartesian.rotateDegreeForTransform) + vY * Math.cos(this.OLC.map.cartesian.rotateDegreeForTransform),
            canvasX = ((rX * ratioX) - this.OLC.map.canvas.x.min) * this.OLC.map.canvas.x.reverseFactor,
            canvasY = ((rY * ratioY) - this.OLC.map.canvas.y.max) * this.OLC.map.canvas.y.reverseFactor;
        return new CanvasUnit(canvasX, canvasY, this.OLC);
    }
}

export class ArrayUnit {
    x: number;
    y: number;
    OLC: IndoorLocationConverter;

    constructor(x: number, y: number, indoorLocationConverter: IndoorLocationConverter) {
        this.x = x;
        this.y = y;
        this.OLC = indoorLocationConverter;
    }

    toGeo(): GeoUnit {
        let canvasUnit = this.toCanvas();
        return canvasUnit.toGeo();
    }

    toCanvas(): CanvasUnit {
        let ratioX = this.OLC.map.canvas.x.length / this.OLC.map.array.x.length,
            ratioY = this.OLC.map.canvas.y.length / this.OLC.map.array.y.length,
            canvasX = (this.x * ratioX) + this.OLC.map.canvas.x.min,
            canvasY = (this.y * ratioY) + this.OLC.map.canvas.y.min;
        return new CanvasUnit(canvasX, canvasY, this.OLC);
    }
}

export class CanvasUnit {
    x: number;
    y: number;
    OLC: IndoorLocationConverter;

    constructor(x: number, y: number, indoorLocationConverter: IndoorLocationConverter) {
        this.x = x;
        this.y = y;
        this.OLC = indoorLocationConverter;
    }

    toGeo(): GeoUnit {
        let gps = proj4.Proj('EPSG:4326');    //source coordinates will be in Longitude/Latitude, WGS84
        let cat = proj4.Proj('EPSG:3785');    //destination coordinates in meters, global spherical mercators projection, see http://spatialreference.org/ref/epsg/3785/
        let ratioX = this.OLC.map.canvas.x.length / this.OLC.map.cartesian.x.length,
            ratioY = this.OLC.map.canvas.y.length / this.OLC.map.cartesian.y.length,
            rX = ((this.x / this.OLC.map.canvas.x.reverseFactor) +  - this.OLC.map.canvas.x.min) / ratioX,
            rY = ((this.y / this.OLC.map.canvas.y.reverseFactor) + this.OLC.map.canvas.y.max) / ratioY,
            vY = (rY - (rX * Math.tan(this.OLC.map.cartesian.rotateDegreeForTransform))) / (Math.sin(this.OLC.map.cartesian.rotateDegreeForTransform) * Math.tan(this.OLC.map.cartesian.rotateDegreeForTransform) + 1),
            vX = (rX / Math.cos(this.OLC.map.cartesian.rotateDegreeForTransform)) + (vY * Math.sin(this.OLC.map.cartesian.rotateDegreeForTransform) / Math.cos(this.OLC.map.cartesian.rotateDegreeForTransform)),
            cPx = vX + this.OLC.map.cartesian.zeroPoint.x,
            cPy = vY + this.OLC.map.cartesian.zeroPoint.y,
            gP = proj4.transform(cat, gps, proj4.toPoint([cPx, cPy]));
        return new GeoUnit(gP.x, gP.y, 0, this.OLC);
    }

    toArray(): ArrayUnit {
        let ratioX = this.OLC.map.array.x.length / this.OLC.map.canvas.x.length,
            ratioY = this.OLC.map.array.y.length / this.OLC.map.canvas.y.length,
            arrayX = Math.ceil((this.x - this.OLC.map.canvas.x.min) * ratioX),
            arrayY = Math.ceil((this.y - this.OLC.map.canvas.y.min) * ratioY);
        return new ArrayUnit(arrayX, arrayY, this.OLC);
    }
}