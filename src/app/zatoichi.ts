import * as THREE from 'three';     // must 'npm install @types/three'!!!

export class Zatoichi {

    root: any;
    ding: any;
    namePanel: any;

    constructor(robot: any) {
        this.root = new THREE.Object3D();
        this.root.name = 'robotroot';
        let robotShape = new THREE.Shape();
        robotShape.moveTo(0, 20);
        robotShape.lineTo(-10, -20);
        robotShape.lineTo(10, -20);
        robotShape.lineTo(0, 20);
        let extrudeSettings = { amount: 8, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 };
        let robotGeo = new THREE.ExtrudeGeometry(robotShape, extrudeSettings);
        robotGeo.rotateX(Math.PI / 2);
        let mesh;
        if (robot.isHost) {
            mesh = new THREE.Mesh(robotGeo, new THREE.MeshLambertMaterial({color:0x3b7fc4}));
        } else {
            mesh = new THREE.Mesh(robotGeo, new THREE.MeshLambertMaterial({color:0x9d9d9d}));
        }
        this.ding = mesh;
        this.ding.name = 'zatoichi';
        this.root.ding = this.ding;
        this.namePanel = null;
        let lineMaterial = new THREE.LineBasicMaterial({
                color: 0x777777,
                linewidth: 1,
                opacity: 0.7,
                transparent: true
            });
        let gridGeo = new THREE.Geometry();
        gridGeo.vertices.push(new THREE.Vector3(0, 0, 0));
        gridGeo.vertices.push(new THREE.Vector3(0, 105, 0));
        let grid = new THREE.Line(gridGeo, lineMaterial);
        this.ding.add(grid);
        //this.ding.overdraw = true;
        this.root.add(this.ding);
    }

    update(): void {
        switch (this.ding._d) {
            case 'x+':
                this.ding.rotateY(Math.PI / 2);
                break;
            case 'x-':
                this.ding.rotateY(- Math.PI / 2);
                break;
            case 'y+':
                this.ding.rotateY(0);
                break;
            case 'y-':
                this.ding.rotateY(Math.PI);
                break;
        }
        this.ding.matrixAutoUpdate = false;
        this.ding.updateMatrix();
    }

    setPosition(x: number, y: number, z: number): void {
        this.ding.position.set(x, y, z);
    }

    setDirection(direction: string): void {
        this.ding._d = direction;
    }

    setName(rId: string, rname: string): void {
        this.ding._robotID = rId;
        if (rname) {
            this.setNamePanel(rname);
        }
    }

    setNamePanel(uname: string): void {
        if (this.namePanel) {
            this.clearNamePanel();
        }
        let canvas = this.buildNameCanvas(uname);
        let texture = new THREE.Texture(canvas);
        texture.needsUpdate	= true;
        let material = new THREE.SpriteMaterial({map: texture});
        let sprite = new THREE.Sprite(material);
        sprite.position.set(this.ding.position.x, this.ding.position.y + 110, this.ding.position.z);
        sprite.scale.set(150, 150, 150);
        //sprite.position.normalize();
        this.namePanel = sprite;
        this.root.add(this.namePanel);
    }

    clearNamePanel(): void {
        if (this.namePanel === null) {
            return;
        }
        this.root.remove(this.namePanel);
        this.namePanel = null;
    }

    buildNameCanvas(txt: string): any {
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        let fontSize = 20;
        let lineHeight = 25;
        let fontFamily = 'Arial';
        let bgColor = 'rgba(0,255,0,0.4)';
        let fontColor = 'rgba(0,0,0,0.7)';
        let scale = 1.3;
        let fontH = lineHeight;
        let tmpWidth;
        let line = '';
        let words = txt.split(' ');
        let maxWidth = 300;
        let y = 1;

        canvas.width = 300;
        canvas.height = 300;
        context.translate(canvas.width / 2, canvas.height / 2);
        context.font = '600 ' + fontSize + 'px "' + fontFamily + '"';
        context.fillStyle = fontColor;
        //fontW = context.measureText(txt).width;
        for (let n = 0; n < words.length; n++) {
            let testLine = line + words[n] + ' ';
            let matrix = context.measureText(testLine);
            let testWidth = matrix.width;
            if (testWidth > maxWidth && n > 0) {
                tmpWidth = context.measureText(line).width;
                context.fillText(line, -tmpWidth/2, lineHeight * (y - 1));
                line = words[n] + ' ';
                y += 1;
            } else {
                line = testLine;
            }
        }
        tmpWidth = context.measureText(line).width;
        context.fillText(line, -tmpWidth/2, lineHeight * (y - 1));
        context.fillStyle = bgColor;
        context.fillRect(-maxWidth*scale/2, -lineHeight, maxWidth*scale, fontH*y+10);
        //context.fillRect(-fontW*scale/2,-fontH*scale/1.3,fontW*scale,fontH*scale);
        //context.fillText(txt, -fontW/2, 0);
        
        return canvas;
    }
}
