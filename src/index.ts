declare var Glade: any;
declare var mat4: any;

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

    const deviceOrientation = {
        // z axis
        alpha: 0,

        // x axis
        beta: 0,

        // y axis
        gamma: 0,
    };
    let initialOrientation;
    window.addEventListener('deviceorientation', (event) => {
        const { alpha, beta, gamma } = event;
        deviceOrientation.alpha = alpha;
        deviceOrientation.beta = beta;
        deviceOrientation.gamma = gamma;

        if (initialOrientation === undefined) {
            initialOrientation = {
                alpha: deviceOrientation.alpha,
                beta: deviceOrientation.beta,
                gamma: deviceOrientation.gamma,
            };
        }
    });

    const renderer = Glade.default("#content", window.innerWidth, window.innerHeight, [0, 0, 0, 0], 45, 0.1, 10000.0);
    document.getElementById("content").appendChild(video);
    const canvas: any = document.querySelector("#content canvas");
    canvas.style.position = "absolute";

    const treeModel = await renderer.LoadObjFromUrl('models/tree.obj');

    treeModel.setTexture(new renderer.Texture('images/tree.png'));

    treeModel.translate([0, 0, -200]);

    mat4.lookAt(renderer.VIEW_MATRIX, [0, 0, 0], [0, 0, 0], [0, 1, 0]);
    mat4.translate(renderer.VIEW_MATRIX, renderer.VIEW_MATRIX, [0, -60, 0]);

    renderer.renderLoop((gl) => {
        if (initialOrientation !== undefined) {
            mat4.identity(renderer.VIEW_MATRIX);

            mat4.lookAt(renderer.VIEW_MATRIX, [0, 0, 0], [0, 0, 0], [0, 1, 0]);
            mat4.translate(renderer.VIEW_MATRIX, renderer.VIEW_MATRIX, [0, -60, 0]);

            // mat4.rotate(renderer.VIEW_MATRIX, renderer.VIEW_MATRIX, -(alphaDiff / 2) * (Math.PI / 180), [0, 0, 1]);
            mat4.rotate(renderer.VIEW_MATRIX, renderer.VIEW_MATRIX, -deviceOrientation.gamma * (Math.PI / 180), [0, 1, 0]);
            mat4.rotate(renderer.VIEW_MATRIX, renderer.VIEW_MATRIX, (90 -deviceOrientation.beta) * (Math.PI / 180), [1, 0, 0]);
        }
        treeModel.render();
    });
}

main();
