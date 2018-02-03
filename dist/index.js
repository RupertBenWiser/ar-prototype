var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var stream, video, deviceOrientation, initialOrientation, renderer, canvas, treeModel;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, navigator.mediaDevices.getUserMedia({
                        video: {
                            width: window.innerHeight,
                            height: window.innerWidth,
                            facingMode: "environment"
                        }
                    })];
                case 1:
                    stream = _a.sent();
                    video = document.createElement('video');
                    video.src = URL.createObjectURL(stream);
                    video.autoplay = true;
                    deviceOrientation = {
                        // z axis
                        alpha: 0,
                        // x axis
                        beta: 0,
                        // y axis
                        gamma: 0
                    };
                    window.addEventListener('deviceorientation', function (event) {
                        var alpha = event.alpha, beta = event.beta, gamma = event.gamma;
                        deviceOrientation.alpha = alpha;
                        deviceOrientation.beta = beta;
                        deviceOrientation.gamma = gamma;
                        if (initialOrientation === undefined) {
                            initialOrientation = {
                                alpha: deviceOrientation.alpha,
                                beta: deviceOrientation.beta,
                                gamma: deviceOrientation.gamma
                            };
                        }
                    });
                    renderer = Glade["default"]("#content", window.innerWidth, window.innerHeight, [0, 0, 0, 0], 45, 0.1, 10000.0);
                    document.getElementById("content").appendChild(video);
                    canvas = document.querySelector("#content canvas");
                    canvas.style.position = "absolute";
                    return [4 /*yield*/, renderer.LoadObjFromUrl('models/tree.obj')];
                case 2:
                    treeModel = _a.sent();
                    treeModel.setTexture(new renderer.Texture('images/tree.png'));
                    treeModel.translate([0, 0, -200]);
                    mat4.lookAt(renderer.VIEW_MATRIX, [0, 0, 0], [0, 0, 0], [0, 1, 0]);
                    mat4.translate(renderer.VIEW_MATRIX, renderer.VIEW_MATRIX, [0, -60, 0]);
                    renderer.renderLoop(function (gl) {
                        if (initialOrientation !== undefined) {
                            mat4.identity(renderer.VIEW_MATRIX);
                            mat4.lookAt(renderer.VIEW_MATRIX, [0, 0, 0], [0, 0, 0], [0, 1, 0]);
                            mat4.translate(renderer.VIEW_MATRIX, renderer.VIEW_MATRIX, [0, -60, 0]);
                            // mat4.rotate(renderer.VIEW_MATRIX, renderer.VIEW_MATRIX, -(alphaDiff / 2) * (Math.PI / 180), [0, 0, 1]);
                            mat4.rotate(renderer.VIEW_MATRIX, renderer.VIEW_MATRIX, -deviceOrientation.gamma * (Math.PI / 180), [0, 1, 0]);
                            mat4.rotate(renderer.VIEW_MATRIX, renderer.VIEW_MATRIX, (90 - deviceOrientation.beta) * (Math.PI / 180), [1, 0, 0]);
                        }
                        treeModel.render();
                    });
                    return [2 /*return*/];
            }
        });
    });
}
main();
