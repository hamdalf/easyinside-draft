import * as THREE from 'three';     // must 'npm install @types/three'!!!

export class FennecFox {

    root: any;
    ding: any;
    originalColor: any;
    namePanel: any;

    constructor(selectedDing: any) {
        this.root = new THREE.Object3D();
        this.root.name = 'foxroot';
        let mesh = new THREE.Mesh(selectedDing._geometry.geometry.clone(), selectedDing._material.clone());

        switch (selectedDing._id) {
            case '5909ef6f8a0d422b37dc5247':
            mesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-80, -36, -40));
            break;
            case '5909efc18a0d422b37dc5248':
            mesh.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, -70, 0));
            break;
        }

        this.originalColor = selectedDing._material.color.clone();
        this.ding = mesh;
        this.ding.name = 'ding';
        this.ding._p = selectedDing.type;
        this.ding._t = selectedDing._idx;
        this.ding._n = selectedDing.name;
        this.root.ding = this.ding;
        this.namePanel = null;
        this.root.add(this.ding);
    }

    update(): void {
        if (this.ding._r === true) {
            this.ding.rotation.y += Math.PI / 2;
        }
        this.ding.matrixAutoUpdate = false;
        this.ding.updateMatrix();
    }

    setPosition(x: number, y: number, z: number): void {
        this.ding.position.set(x, y, z);
    }

    setRotation(r: boolean): void {
        this.ding._r = r;
    }

    setUser(uid: string, uname: string): void {
        this.ding._userID = uid;
        if (uname) {
            this.setNamePanel(uname);
        }
    }

    clearUser(): void {
        this.ding._userID = void(0);
        this.clearNamePanel();
    }

    setFocus(): void {
        this.ding.material.color.setHex(0xe3983b);
    }

    blur(): void {
        //this.ding.material.color.setRGB(0.98, 0.98, 0.90);
        this.ding.material.color.copy(this.originalColor);
    }

    select(): void {
        this.ding.material.color.setHex(0xdd4477);
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
        sprite.position.set(this.ding.position.x, this.ding.position.y + 50, this.ding.position.z);
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
        let bgColor = 'rgba(0,0,255,0.3)';
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
