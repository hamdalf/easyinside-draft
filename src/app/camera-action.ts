import * as THREE from 'three';     // must 'npm install @types/three'!!!

export class CameraAction {

    window: any;
    scene: any;
    camera: any;
    container3D: any;
    planeNav: any;
    raycaster: any;
    selectedDesk: any;
    callbackAfterMove: any;
    isMoving: boolean = false;
    moveType: string;
    heightLimit: number = 1000;
    heightMax: number = 8500;
    startPosition: any;
    speedDistance: number = 3;
    speedAngle: number = Math.PI * 0.001;
    totalDistance: number;
    totalAngle: number;
    spinPoint: any;
    finalPosition: any;
    speedDistanceX: number;
    speedDistanceY: number;
    speedDistanceZ: number;
    originPosition: any = {x:0,y:0,z:0};
    angleUntilNow: number;

    constructor(window: any, scene: any, cam: any, container: any, planeNav: any, raycaster: any, callback: any) {
        this.window = window;
        this.scene = scene;
        this.camera = cam;
        this.container3D = container;
        this.planeNav = planeNav;
        this.raycaster = raycaster;
        this.callbackAfterMove = callback;
    }

    move(moveType: string): void {
        if (this.isMoving === false) {
            this.startPosition = this.camera.position.clone();
            this.moveType = moveType;
            this.isMoving = true;
            switch (this.moveType) {
                case 'zoomin':
                    this.totalDistance = 1000;
                    break;
                case 'zoomout':
                    this.totalDistance = 1000;
                    break;
                case 'pedestalleft':
                    this.totalDistance = 1000;
                    break;
                case 'pedestalright':
                    this.totalDistance = 1000;
                    break;
                case 'pedestalup':
                    this.totalDistance = 1000;
                    break;
                case 'pedestaldown':
                    this.totalDistance = 1000;
                    break;
                case 'rotateleft': // see left, move right
                    this.totalAngle = Math.PI / 3;
                    var crossingPoint = this.getCrossingPointOnPlane();
                    crossingPoint.y = 10;
                    this.spinPoint = crossingPoint;
                    this.angleUntilNow = 0;
                    break;
                case 'rotateright':  // see right, move left
                    this.totalAngle = Math.PI / 3;
                    var crossingPoint = this.getCrossingPointOnPlane();
                    crossingPoint.y = 10;
                    this.spinPoint = crossingPoint;
                    this.angleUntilNow = 0;
                    break;
            }
        }
    }

    hedgehop(x: number, y: number, z: number): void {
        if (this.isMoving === false) {
            //if (camera.position.y <= this.heightLimit) {
                this.isMoving = true;
                this.startPosition = this.camera.position.clone();
                this.moveType = 'hedgehop';
                let dx = x, dy = 0, dz = z;
                this.finalPosition = new THREE.Vector3();
                this.finalPosition.x = this.camera.position.x + dx;
                this.finalPosition.y = this.heightLimit;
                this.finalPosition.z = this.camera.position.z + dz;
                this.speedDistanceX = Math.abs(dx / 500);
                this.speedDistanceY = Math.abs(dy / 500);
                this.speedDistanceZ = Math.abs(dz / 500);
                this.spinPoint.x = this.spinPoint.x + dx;
                this.spinPoint.y = 10;
                this.spinPoint.z = this.spinPoint.z + dz;
            //}
        }
    }

    closeToDesk(deskObj: any): void {
        if (this.isMoving === false) {
            this.selectedDesk = deskObj;
            this.startPosition = this.camera.position.clone();
            this.isMoving = true;
            //if (this.camera.position.y <= this.heightLimit) {
            if (this.container3D.classList.contains('hedgehop')) {
                this.moveType = 'hedgehop';
                let dx = deskObj.ding.position.x - this.spinPoint.x;
                let dy = 0;    // no meaning. because 'hedgehop' will keep y position.
                let dz = deskObj.ding.position.z - this.spinPoint.z;
                this.finalPosition = new THREE.Vector3();
                this.finalPosition.x = this.camera.position.x + dx;
                this.finalPosition.y = this.heightLimit;
                this.finalPosition.z = this.camera.position.z + dz;
                this.speedDistanceX = Math.abs(dx / 500);
                this.speedDistanceY = Math.abs(dy / 500);
                this.speedDistanceZ = Math.abs(dz / 500);
                this.spinPoint.x = this.spinPoint.x + dx;
                this.spinPoint.y = 10;
                this.spinPoint.z = this.spinPoint.z + dz;
            } else {
                this.moveType = 'closetodesk';
                let tmpCameraClone = new THREE.Object3D();
                //tmpCameraClone.applyMatrix(this.camera.matrix);
                tmpCameraClone.rotation.copy(this.camera.rotation);
                tmpCameraClone.position.set(deskObj.ding.position.x, deskObj.ding.position.y, deskObj.ding.position.z);
                tmpCameraClone.translateZ(500);
                this.finalPosition = new THREE.Vector3();
                this.finalPosition.x = tmpCameraClone.position.x;
                this.finalPosition.y = tmpCameraClone.position.y;
                this.finalPosition.z = tmpCameraClone.position.z;
                let dx = this.startPosition.x - this.finalPosition.x;
                let dy = this.startPosition.y - this.finalPosition.y;
                let dz = this.startPosition.z - this.finalPosition.z;
                //this.totalDistance = Math.sqrt(dx * dx + dy * dy + dz * dz);
                this.speedDistanceX = Math.abs(dx / 1000);
                this.speedDistanceY = Math.abs(dy / 1000);
                this.speedDistanceZ = Math.abs(dz / 1000);
                this.spinPoint.x = deskObj.ding.position.x;
                this.spinPoint.y = 10;
                this.spinPoint.z = deskObj.ding.position.z;
            }
        }
    }

    forwardToPoint(px: number, py: number, pz: number): void {
        if (this.isMoving === false) {
            this.moveType = 'forwardtopoint';
            this.startPosition = this.camera.position.clone();
            this.isMoving = true;
            this.finalPosition = new THREE.Vector3();
            this.finalPosition.x = px;
            this.finalPosition.y = py;
            this.finalPosition.z = pz;
            let dx = this.startPosition.x - this.finalPosition.x;
            let dy = this.startPosition.y - this.finalPosition.y;
            let dz = this.startPosition.z - this.finalPosition.z;
            this.speedDistanceX = Math.abs(dx / 1000);
            this.speedDistanceY = Math.abs(dy / 1000);
            this.speedDistanceZ = Math.abs(dz / 1000);
            this.spinPoint.x = this.spinPoint.x + dx;
            this.spinPoint.y = 10;
            this.spinPoint.z = this.spinPoint.x + dz;
        }
    }

    backToPoint(px: number, py: number, pz: number): void {
        if (this.isMoving === false) {
            this.moveType = 'backwardtopoint';
            this.startPosition = this.camera.position.clone();
            this.isMoving = true;
            this.finalPosition = new THREE.Vector3();
            this.finalPosition.x = px;
            this.finalPosition.y = py;
            this.finalPosition.z = pz;
            let dx = this.startPosition.x - this.finalPosition.x;
            let dy = this.startPosition.y - this.finalPosition.y;
            let dz = this.startPosition.z - this.finalPosition.z;
            this.speedDistanceX = Math.abs(dx / 1000);
            this.speedDistanceY = Math.abs(dy / 1000);
            this.speedDistanceZ = Math.abs(dz / 1000);
            this.spinPoint.x = 0;
            this.spinPoint.y = 0;
            this.spinPoint.z = 0;
        }
    }

    backToOriginPoint(): void {
        this.backToPoint(this.originPosition.x, this.originPosition.y, this.originPosition.z);
    }

    animate(delta: number): void {
        let distanceFromMap = Math.sqrt(this.camera.position.x * this.camera.position.x + this.camera.position.y * this.camera.position.y + this.camera.position.z * this.camera.position.z);
        let distanceAtOnce, angleAtOnce, tmpPosition;
        
        if (this.totalDistance && this.finalPosition === null) {
            let dx = this.camera.position.x - this.startPosition.x;
            let dy = this.camera.position.y - this.startPosition.y;
            let dz = this.camera.position.z - this.startPosition.z;
            let distanceUntilNow = Math.sqrt(dx * dx + dy * dy + dz * dz);
            distanceAtOnce = this.speedDistance * delta;
            if (distanceUntilNow + distanceAtOnce >= this.totalDistance) {
                distanceAtOnce = this.totalDistance - distanceUntilNow;
                this.totalDistance = null;
                this.isMoving = false;
            }
        }

        if (this.totalAngle) {
            let vs = this.startPosition.clone();
            let vc = this.camera.position.clone();
            // angle is caculated on plane (y = 0)
            vs.y = 0;
            vc.y = 0;
            let dot = vs.dot(vc);
            //let angleUntilNow = Math.acos(dot / (vs.length() * vc.length()));
            angleAtOnce = this.speedAngle * delta;
            this.angleUntilNow += angleAtOnce;
            //if (angleUntilNow + angleAtOnce >= this.totalAngle) {
            if (this.angleUntilNow >= this.totalAngle) {
                angleAtOnce = this.totalAngle - this.angleUntilNow;
                this.totalAngle = null;
                this.isMoving = false;
            }
        }
        
        if (this.finalPosition) {
            tmpPosition = new THREE.Vector3();
            tmpPosition.set(this.camera.position.x, this.camera.position.y, this.camera.position.z);
            tmpPosition.x = (tmpPosition.x > this.finalPosition.x) ? tmpPosition.x - this.speedDistanceX * delta : tmpPosition.x + this.speedDistanceX * delta;
            tmpPosition.y = (tmpPosition.y > this.finalPosition.y) ? tmpPosition.y - this.speedDistanceY * delta : tmpPosition.y + this.speedDistanceY * delta;
            tmpPosition.z = (tmpPosition.z > this.finalPosition.z) ? tmpPosition.z - this.speedDistanceZ * delta : tmpPosition.z + this.speedDistanceZ * delta;
            if (tmpPosition.y < this.heightLimit) {
                if (this.moveType === 'closetodesk') {
                    let correctDistanceY = (tmpPosition.y - this.heightLimit) / delta;
                    let correctDistanceX = correctDistanceY * this.speedDistanceX / this.speedDistanceY;
                    let correctDistanceZ = correctDistanceY * this.speedDistanceZ / this.speedDistanceY;
                    tmpPosition.set(this.camera.position.x, this.camera.position.y, this.camera.position.z);
                    tmpPosition.x = (tmpPosition.x > this.finalPosition.x) ? tmpPosition.x - correctDistanceX * delta : tmpPosition.x + this.speedDistanceX * delta;
                    tmpPosition.y = (tmpPosition.y > this.finalPosition.y) ? tmpPosition.y - correctDistanceY * delta : tmpPosition.y + this.speedDistanceY * delta;
                    //tmpPosition.y = this.heightLimit;
                    tmpPosition.z = (tmpPosition.z > this.finalPosition.z) ? tmpPosition.z - correctDistanceZ * delta : tmpPosition.z + this.speedDistanceZ * delta;
                    this.isMoving = false;
                } else {
                    tmpPosition.y = this.heightLimit;
                }
            }
            let dx = Math.abs(tmpPosition.x - this.finalPosition.x);
            let dy = Math.abs(tmpPosition.y - this.finalPosition.y);
            let dz = Math.abs(tmpPosition.z - this.finalPosition.z);
            let distanceUntilNow = Math.sqrt(dx * dx + dy * dy + dz * dz);
            
            //if (distanceUntilNow <= this.heightLimit || camera.position.y <= this.heightLimit) {
            //if (this.moveType === 'closetodesk' && this.camera.position.y <= this.heightLimit) {
            if (this.moveType === 'closetodesk' && this.isMoving === false) {
                //tmpPosition.set(camera.position.x, camera.position.y, camera.position.z);
                this.container3D.classList.add('hedgehop');
                this.planeNav.show();
                this.isMoving = false;
            } else if (this.moveType === 'hedgehop' && dx <= this.speedDistanceX * delta && dz <= this.speedDistanceZ * delta) {
                tmpPosition.x = this.finalPosition.x;
                tmpPosition.y = this.finalPosition.y;
                tmpPosition.z = this.finalPosition.z;
                this.container3D.classList.add('hedgehop');
                this.planeNav.show();
                this.isMoving = false;
            } else if (this.moveType === 'backwardtopoint' && ((dx <= this.speedDistanceX * delta && dz <= this.speedDistanceZ * delta) || distanceFromMap >= this.heightMax)) {
                this.isMoving = false;
            } else if (this.moveType === 'forwardtopoint' && ((dx <= this.speedDistanceX * delta && dz <= this.speedDistanceZ * delta) || this.camera.position.y <= this.heightLimit)) {
                this.isMoving = false;
            }
        }

        switch (this.moveType) {
            case 'zoomin':
                this.camera.translateZ(-distanceAtOnce);
                break;
            case 'zoomout':
                this.camera.translateZ(distanceAtOnce);
                break;
            case 'pedestalleft':
                this.camera.translateX(-distanceAtOnce);
                break;
            case 'pedestalright':
                this.camera.translateX(distanceAtOnce);
                break;
            case 'pedestalup':
                this.camera.translateY(distanceAtOnce);
                break;
            case 'pedestaldown':
                this.camera.translateY(-distanceAtOnce);
                break;
            case 'rotateleft': // see left, move right
                let positionNow = this.camera.position.clone();
                let tx = positionNow.x - this.spinPoint.x;
                let tz = positionNow.z - this.spinPoint.z;
                positionNow.x = (tx * Math.cos(angleAtOnce)) - (tz * Math.sin(angleAtOnce));
                positionNow.z = (tz * Math.cos(angleAtOnce)) + (tx * Math.sin(angleAtOnce));
                positionNow.x += this.spinPoint.x;
                positionNow.z += this.spinPoint.z;
                this.setPosition(positionNow.x, positionNow.y, positionNow.z);
                this.lookAt(this.spinPoint);
                break;
            case 'rotateright':  // see right, move left
                let positionNow2 = this.camera.position.clone();
                let tx2 = positionNow2.x - this.spinPoint.x;
                let tz2 = positionNow2.z - this.spinPoint.z;
                positionNow2.x = (tx2 * Math.cos(-angleAtOnce)) - (tz2 * Math.sin(-angleAtOnce));
                positionNow2.z = (tz2 * Math.cos(-angleAtOnce)) + (tx2 * Math.sin(-angleAtOnce));
                positionNow2.x += this.spinPoint.x;
                positionNow2.z += this.spinPoint.z;
                this.setPosition(positionNow2.x, positionNow2.y, positionNow2.z);
                this.lookAt(this.spinPoint);
                break;
            case 'closetodesk':
                this.setPosition(tmpPosition.x, tmpPosition.y, tmpPosition.z);
                break;
            case 'hedgehop':
                this.setPosition(tmpPosition.x, tmpPosition.y, tmpPosition.z);
                break;
            case 'forwardtopoint':
            case 'backwardtopoint':
                this.setPosition(tmpPosition.x, tmpPosition.y, tmpPosition.z);
                this.lookAt(this.spinPoint);
                break;
        }
        
        if (this.isMoving === false) {
            if (this.moveType === 'pedestalleft' || this.moveType === 'pedestalright' || this.moveType === 'pedestalup' || this.moveType === 'pedestaldown') {
                var dx = this.camera.position.x - this.startPosition.x;
                var dy = this.camera.position.y - this.startPosition.y;
                var dz = this.camera.position.z - this.startPosition.z;
                this.spinPoint.x += dx;
                this.spinPoint.y += dy;
                this.spinPoint.z += dz;
            } else if (this.moveType === 'closetodesk' || this.moveType === 'hedgehop') {
                if (this.selectedDesk) {
                    this.callbackAfterMove(this.selectedDesk);
                }
            } else if (this.moveType === 'forwardtopoint' || this.moveType === 'backwardtopoint') {
                //camera.lookAt(this.spinPoint);
                //this.finalPosition = null;
            }
            this.finalPosition = null;
            
            if (this.camera.position.y > this.heightLimit) {
                this.container3D.classList.remove('hedgehop');
            } else {
                this.container3D.classList.add('hedgehop');
                this.planeNav.show();
            }

            if (this.moveType === 'closetodesk') {
                this.container3D.classList.add('hedgehop');
                this.planeNav.show();
            }
            
            if (distanceFromMap < this.heightMax) {
                this.container3D.classList.remove('stratosphere');
            } else {
                this.container3D.classList.add('stratosphere');
                this.planeNav.hide();
            }
        }
    }

    setSpinPoint(x: number, y: number, z: number): void {
        if (typeof this.spinPoint === 'undefined') {
            this.spinPoint = new THREE.Vector3(x, y, z);
        } else {
            this.spinPoint.x = x;
            this.spinPoint.y = y;
            this.spinPoint.z = z;
        }
        //camera.lookAt(this.spinPoint);
        this.lookAt(this.spinPoint);
        this.camera.updateProjectionMatrix();
    }

    setPosition(x: number, y: number, z: number): void {
        this.camera.position.set(x, y, z);
        this.planeNav.moveAtTheFrontOf(this.camera, this.window);
    }

    setOriginPosition(x: number, y: number, z: number): void {
        this.originPosition.x = x;
        this.originPosition.y = y;
        this.originPosition.z = z;
    }
    
    lookAt(obj: any): void {
        this.camera.lookAt(obj);
        this.planeNav.moveAtTheFrontOf(this.camera, this.window);
    }

    getCrossingPointOnPlane(): any {
        let centerPosition = new THREE.Vector2();
        centerPosition.set(0, 0);
        this.raycaster.setFromCamera(centerPosition, this.camera);
        var intersects = this.raycaster.intersectObjects(this.scene.children, true),
            point;
        if (intersects.length > 0) {
            for (var i = 0; i < intersects.length; i++) {
                if (intersects[i].object.pattern) {
                    if (intersects[i].object.pattern === 'floor') {
                        point = intersects[i].point;
                        return point;
                    }
                }
            }
        }
    }
}
