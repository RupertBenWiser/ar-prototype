var Glade =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var _this = this;
exports.__esModule = true;
var DefaultVertexShader_1 = __webpack_require__(1);
var DefaultFragmentShader_1 = __webpack_require__(2);
var Texture_1 = __webpack_require__(3);
var Model_1 = __webpack_require__(4);
var Shader_1 = __webpack_require__(5);
var LoadObj_1 = __webpack_require__(6);
/**
 * This function will append a canvas tag to an element and provide a renderer to perform 3d rendering.
 *
 * @param {String} ele The css query for the element you'd like to render to
 * @param {Number} height The height of the canvas
 * @param {Number} width The width of the canvas
 * @param {Number[]} clearColor The colours to clear the canvas with. Eg: [0, 1, 0] This would result in green
 * @param {Number} fov The field of view in degrees
 * @param {Number} zNear The nearest point a model will be rendered from in the z axis
 * @param {Number} zFar The furthest point a model will be rendered from in the z axis
 */
var Glade = function (ele, width, height, clearColor, fov, zNear, zFar) { return (function (ele, width, height, clearColor, fov, zNear, zFar) {
    if (typeof mat4 === "undefined") {
        console.error("gl-matrix required: http://glmatrix.net");
        return {};
    }
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var gl = canvas.getContext("webgl");
    if (!gl) {
        gl = canvas.getContext("experimental-webgl");
    }
    if (!gl) {
        console.error("Webgl does not work in this browser");
        return;
    }
    var contentElement = document.querySelector(ele);
    contentElement.innerHTML = "";
    contentElement.appendChild(canvas);
    gl.clearColor(clearColor[0], clearColor[1], clearColor[2], clearColor[3]);
    gl.enable(gl.DEPTH_TEST);
    var PROJECTION_MATRIX = new Float32Array(16);
    var VIEW_MATRIX = new Float32Array(16);
    mat4.identity(PROJECTION_MATRIX);
    mat4.identity(VIEW_MATRIX);
    mat4.perspective(PROJECTION_MATRIX, glMatrix.toRadian(fov), width / height, zNear, zFar);
    mat4.lookAt(VIEW_MATRIX, [0, 0, 50], [0, 0, 20], [0, 1, 0]);
    var Texture = Texture_1["default"](gl);
    var Shader = Shader_1["default"](gl);
    var Model = Model_1["default"](gl, PROJECTION_MATRIX, VIEW_MATRIX);
    var DefaultShader = new Shader(DefaultVertexShader_1["default"], DefaultFragmentShader_1["default"]);
    var LoadObj = LoadObj_1["default"](gl, Model, DefaultShader);
    var LoadObjFromUrl = function (url) { return __awaiter(_this, void 0, void 0, function () {
        var data, text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    data = _a.sent();
                    return [4 /*yield*/, data.text()];
                case 2:
                    text = _a.sent();
                    return [2 /*return*/, LoadObj(text)];
            }
        });
    }); };
    /**
     * This function is the main loop which will continue rendering your models.
     * This loop gets passed the webgl context as a parameter.
     *
     * @param {Function(gl)} render
     */
    var renderLoop = function (render) {
        gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
        render(gl);
        requestAnimationFrame(function () { return renderLoop(render); });
    };
    return {
        renderLoop: renderLoop,
        Texture: Texture,
        Shader: Shader,
        Model: Model,
        DefaultShader: DefaultShader,
        LoadObj: LoadObj,
        LoadObjFromUrl: LoadObjFromUrl,
        VIEW_MATRIX: VIEW_MATRIX
    };
})(ele, width, height, clearColor, fov, zNear, zFar); };
exports["default"] = Glade;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var defaultVertexShader = "\nprecision mediump float;\n\nattribute vec2 uvCoords;\nattribute vec3 vertPosition;\n\nuniform mat4 WORLD_MATRIX;\nuniform mat4 VIEW_MATRIX;\nuniform mat4 PROJECTION_MATRIX;\n\nvarying vec2 out_uvCoords;\n\nvoid main() {\n  gl_Position = PROJECTION_MATRIX * VIEW_MATRIX * WORLD_MATRIX * vec4(vertPosition, 1.0);\n  out_uvCoords = uvCoords;\n}\n";
exports["default"] = defaultVertexShader;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var defaultFragmentShader = "\nprecision mediump float;\n\nvarying vec2 out_uvCoords;\n\nuniform sampler2D mainTexture;\n\nvoid main() {\n  gl_FragColor = texture2D(mainTexture, out_uvCoords);\n}\n";
exports["default"] = defaultFragmentShader;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _Texture = function (gl) { return (function (gl) {
    var T = (function () {
        /**
         *
         * @param {String} url The url for the texture
         */
        function T(url) {
            var _this = this;
            this.texture = gl.createTexture();
            this.loaded = false;
            var image = new Image();
            image.onload = function () {
                gl.bindTexture(gl.TEXTURE_2D, _this.texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
                gl.generateMipmap(gl.TEXTURE_2D);
                _this.loaded = true;
            };
            image.src = url;
        }
        T.prototype.isLoaded = function () {
            return this.loaded;
        };
        T.prototype.bind = function () {
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
        };
        return T;
    }());
    return T;
})(gl); };
exports["default"] = _Texture;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _Model = function (gl, PROJECTION_MATRIX, VIEW_MATRIX) { return (function (gl, PROJECTION_MATRIX, VIEW_MATRIX) {
    var M = (function () {
        /**
         *
         * @param {Number[]} vertices The vertices of the model
         * @param {Number[]} textureCoords The texture coordinates for each vertex
         * @param {ShaderProgram} shader The shader program for the model to render through
         */
        function M(vertices, textureCoords, shader) {
            this.vertices = vertices;
            this.textureCoords = textureCoords;
            this.shader = shader;
            this.WORLD_MATRIX = new Float32Array(16);
            mat4.identity(this.WORLD_MATRIX);
            this.vertexBuffer = this.setAttribute(vertices);
            this.textureBuffer = this.setAttribute(textureCoords);
            this.setMatrixUniform("PROJECTION_MATRIX", PROJECTION_MATRIX);
            this.setMatrixUniform("VIEW_MATRIX", VIEW_MATRIX);
            this.setMatrixUniform("WORLD_MATRIX", this.WORLD_MATRIX);
            this.texture = null;
            this.setTexture = this.setTexture.bind(this);
        }
        M.prototype.setMatrixUniform = function (name, data) {
            this.shader.bind();
            var projectionMatrixLocation = gl.getUniformLocation(this.shader.getProgram(), name);
            gl.uniformMatrix4fv(projectionMatrixLocation, gl.FALSE, data);
        };
        M.prototype.rotate = function (angle, axis) {
            mat4.rotate(this.WORLD_MATRIX, this.WORLD_MATRIX, angle, axis);
        };
        M.prototype.translate = function (translation) {
            mat4.translate(this.WORLD_MATRIX, this.WORLD_MATRIX, translation);
        };
        M.prototype.scale = function (scale) {
            mat4.scale(this.WORLD_MATRIX, this.WORLD_MATRIX, scale);
        };
        M.prototype.setAttribute = function (data) {
            var bufferID = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, bufferID);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
            return bufferID;
        };
        M.prototype.bindAttribute = function (bufferID, size, name) {
            gl.bindBuffer(gl.ARRAY_BUFFER, bufferID);
            var vertexAttribPosition = gl.getAttribLocation(this.shader.getProgram(), name);
            gl.vertexAttribPointer(vertexAttribPosition, size, gl.FLOAT, gl.FALSE, size * Float32Array.BYTES_PER_ELEMENT, 0);
        };
        M.prototype.setTexture = function (texture) {
            this.texture = texture;
        };
        M.prototype.render = function () {
            if (this.texture && !this.texture.isLoaded()) {
                return;
            }
            this.shader.bind();
            this.setMatrixUniform("PROJECTION_MATRIX", PROJECTION_MATRIX);
            this.setMatrixUniform("VIEW_MATRIX", VIEW_MATRIX);
            this.setMatrixUniform("WORLD_MATRIX", this.WORLD_MATRIX);
            this.bindAttribute(this.vertexBuffer, 3, "vertPosition");
            this.bindAttribute(this.textureBuffer, 2, "uvCoords");
            if (this.texture) {
                this.texture.bind();
            }
            gl.enableVertexAttribArray(0);
            gl.enableVertexAttribArray(1);
            gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length / 3);
            gl.disableVertexAttribArray(1);
            gl.disableVertexAttribArray(0);
        };
        return M;
    }());
    return M;
})(gl, PROJECTION_MATRIX, VIEW_MATRIX); };
exports["default"] = _Model;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _Shader = function (gl) { return (function (gl) {
    var S = (function () {
        /**
         *
         * @param {String} vertexShaderSource The vertex shader program string in glsl
         * @param {String} fragmentShaderSource The fragment shader program string in glsl
         */
        function S(vertexShaderSource, fragmentShaderSource) {
            var vertexShader = gl.createShader(gl.VERTEX_SHADER);
            var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(vertexShader, vertexShaderSource);
            gl.shaderSource(fragmentShader, fragmentShaderSource);
            gl.compileShader(vertexShader);
            gl.compileShader(fragmentShader);
            if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
                console.error("Error compiling shader:", gl.getShaderInfoLog(vertexShader));
            }
            if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
                console.error("Error compiling shader:", gl.getShaderInfoLog(fragmentShader));
            }
            this.shaderProgram = gl.createProgram();
            gl.attachShader(this.shaderProgram, vertexShader);
            gl.attachShader(this.shaderProgram, fragmentShader);
            gl.linkProgram(this.shaderProgram);
        }
        S.prototype.bind = function () {
            gl.useProgram(this.shaderProgram);
        };
        S.prototype.getProgram = function () {
            return this.shaderProgram;
        };
        return S;
    }());
    return S;
})(gl); };
exports["default"] = _Shader;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _LoadObj = function (gl, _Model, shader) { return (function (gl, _Model, shader) {
    return function (objData) {
        var lines = objData.split("\n");
        var vertexes = [];
        var texCoords = [];
        var faces = [];
        for (var i in lines) {
            var line = lines[i];
            var lineData = line.split(" ");
            switch (lineData[0]) {
                case "v":
                    vertexes.push([Number(lineData[1]), Number(lineData[2]), Number(lineData[3])]);
                    break;
                case "vt":
                    texCoords.push([Number(lineData[1]), 1 - Number(lineData[2])]);
                    break;
                case "f":
                    faces.push([lineData[1], lineData[2], lineData[3]]);
                    break;
            }
        }
        var orderedVertexes = [];
        var orderedTexCoords = [];
        for (var i in faces) {
            var face = faces[i];
            var pointOne = face[0].split("/").map(function (num) { return Number(num); });
            var pointTwo = face[1].split("/").map(function (num) { return Number(num); });
            var pointThree = face[2].split("/").map(function (num) { return Number(num); });
            orderedVertexes.push.apply(orderedVertexes, vertexes[pointOne[0] - 1].concat(vertexes[pointTwo[0] - 1], vertexes[pointThree[0] - 1]));
            orderedTexCoords.push.apply(orderedTexCoords, texCoords[pointOne[1] - 1].concat(texCoords[pointTwo[1] - 1], texCoords[pointThree[1] - 1]));
        }
        return new _Model(orderedVertexes, orderedTexCoords, shader);
    };
})(gl, _Model, shader); };
exports["default"] = _LoadObj;


/***/ })
/******/ ]);
