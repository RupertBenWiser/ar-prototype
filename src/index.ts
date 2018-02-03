declare var Glade: any;
declare var mat4: any;

const worldRotations = {
    x: 0,
    y: 0,
    z: 0,
};

async function main() {

    const stream = await navigator.mediaDevices.getUserMedia({
        video: {
            width: window.innerHeight,
            height: window.innerWidth,
            facingMode: "environment"
        }
    });
    const video = document.createElement('video');
    video.src = URL.createObjectURL(stream);
    video.autoplay = true;

    const renderer = Glade.default("#content", window.innerWidth, window.innerHeight, [0, 0, 0, 0], 45, 0.1, 10000.0);
    document.getElementById("content").appendChild(video);
    const canvas: any = document.querySelector("#content canvas");
    canvas.style.position = "absolute";

    const headModel = await renderer.LoadObjFromUrl('models/head.obj');

    headModel.setTexture(new renderer.Texture('images/head.png'));

    headModel.translate([0, 0, -5]);
    headModel.rotate(180 * (Math.PI / 180), [0, 1, 0]);
    headModel.rotate(-10 * (Math.PI / 180), [1, 0, 0]);

    mat4.lookAt(renderer.VIEW_MATRIX, [0, 0, 0], [0, 0, 0], [0, 1, 0]);
    mat4.translate(renderer.VIEW_MATRIX, renderer.VIEW_MATRIX, [0, -60, 0]);

    window.addEventListener('devicemotion', (event) => {
        worldRotations.x -= event.rotationRate.alpha;
        worldRotations.y -= event.rotationRate.beta;
        worldRotations.z -= event.rotationRate.gamma;
    });

    renderer.renderLoop((gl) => {
        mat4.identity(renderer.VIEW_MATRIX);

        mat4.lookAt(renderer.VIEW_MATRIX, [0, 0, 0], [0, 0, 0], [0, 1, 0]);
        mat4.translate(renderer.VIEW_MATRIX, renderer.VIEW_MATRIX, [0, 0, 0]);

        mat4.rotate(renderer.VIEW_MATRIX, renderer.VIEW_MATRIX, (worldRotations.x) * (Math.PI / 180), [1, 0, 0]);
        mat4.rotate(renderer.VIEW_MATRIX, renderer.VIEW_MATRIX, (worldRotations.y) * (Math.PI / 180), [0, 1, 0]);
        mat4.rotate(renderer.VIEW_MATRIX, renderer.VIEW_MATRIX, (worldRotations.z) * (Math.PI / 180), [0, 0, 1]);
        headModel.render();
    });
}

main();
