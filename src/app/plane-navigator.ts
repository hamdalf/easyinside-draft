import * as THREE from 'three';     // must 'npm install @types/three'!!!

export class PlaneNavigator {

    bgWidth: number = 55;
    bgHeight: number = 35;
    root: any;
    background: any;
    btnUp: any;
    btnDown: any;
    btnLeft: any;
    btnRight: any;
    lineUpDown: any;
    lineLeftRight: any;

    constructor() {
        this.root = new THREE.Object3D();
        this.background = new THREE.Mesh(new THREE.PlaneGeometry(this.bgWidth, this.bgHeight), new THREE.MeshBasicMaterial({
			color: 0x000000,
            transparent: true,
            opacity: 0.2
		}));
        this.background.rotateOnAxis(new THREE.Vector3(1, 0, 0), - Math.PI / 2);
        this.background.translateZ(-0.1);
        this.root.add(this.background);
        let btnShape = new THREE.Shape();
        btnShape.moveTo(0, 0);
        btnShape.lineTo(-8, -5);
        btnShape.lineTo(8, -5);
        btnShape.lineTo(0, 0);
        let btnGeo = new THREE.ShapeGeometry(btnShape);
        this.btnUp = new THREE.Mesh(btnGeo, new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide
        }));
        this.btnUp.name = 'btnUp';
        this.btnUp.rotateOnAxis(new THREE.Vector3(1, 0, 0), - Math.PI / 2);
        this.btnUp.rotateOnAxis(new THREE.Vector3(0, 0, 1), - Math.PI / 2);
        this.btnUp.translateY(25);
        this.root.add(this.btnUp);
        this.btnDown = new THREE.Mesh(btnGeo, new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide
        }));
        this.btnDown.name = 'btnDown';
        this.btnDown.rotateOnAxis(new THREE.Vector3(1, 0, 0), - Math.PI / 2);
        this.btnDown.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2);
        this.btnDown.translateY(25);
        this.root.add(this.btnDown);
        this.btnLeft = new THREE.Mesh(btnGeo, new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide
        }));
        this.btnLeft.name = 'btnLeft';
        this.btnLeft.rotateOnAxis(new THREE.Vector3(1, 0, 0), - Math.PI / 2);
        //this.btnDown.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2);
        this.btnLeft.translateY(15);
        this.root.add(this.btnLeft);
        this.btnRight = new THREE.Mesh(btnGeo, new THREE.MeshBasicMaterial({
            color: 0xffffff,
            side: THREE.DoubleSide
        }));
        this.btnRight.name = 'btnRight';
        this.btnRight.rotateOnAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
        //this.btnDown.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2);
        this.btnRight.translateY(15);
        this.root.add(this.btnRight);
        let lineGeo1 = new THREE.Geometry();
        lineGeo1.vertices.push(
            new THREE.Vector3(-21, 0, 0),
            new THREE.Vector3(21, 0, 0)
        );
        this.lineUpDown = new THREE.Line(lineGeo1, new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.8
        }));
        this.root.add(this.lineUpDown);
        let lineGeo2 = new THREE.Geometry();
        lineGeo2.vertices.push(
            new THREE.Vector3(0, 0, 12),
            new THREE.Vector3(0, 0, -12)
        );
        this.lineLeftRight = new THREE.Line(lineGeo2, new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.8
        }));
        this.root.add(this.lineLeftRight);
    }

    moveAtTheFrontOf(objCamera: any, window: any): void {
        let fov = objCamera.fov;
        let aspect = objCamera.aspect;
        let distanceOfPanel = 500;
        let frustrumHeight = 2.0 * distanceOfPanel * Math.tan(fov * 0.5 * (Math.PI / 180));
        let frustrumWidth = frustrumHeight * aspect;
        let tmpCameraClone = new THREE.Object3D();
        tmpCameraClone.rotation.copy(objCamera.rotation);
        tmpCameraClone.position.set(objCamera.position.x, objCamera.position.y, objCamera.position.z);
        tmpCameraClone.translateZ(-500);
        tmpCameraClone.translateX(Math.floor(frustrumWidth/2) - Math.floor(this.bgWidth/1.5));
        tmpCameraClone.translateY(-(Math.floor(frustrumHeight/2) - Math.floor(this.bgHeight/1.5)));
        this.root.position.copy(tmpCameraClone.position);
        this.root.updateMatrix();
    }
    
    show(): void {
        this.root.visible = true;
    }
    
    hide(): void {
        this.root.visible = false;
    }
}
