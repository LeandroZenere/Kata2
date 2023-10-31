"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consola = void 0;
var Usuario_1 = require("./Usuario");
var API = /** @class */ (function () {
    function API() {
    }
    API.prototype.createUser = function (usuarioDTO) {
        var usuario = Usuario_1.Usuario.CrearUsuario(usuarioDTO);
        console.log("API", usuario);
        return "".concat(usuario.getNombre(), ", el usuario con email ").concat(usuario.getEmail(), " fue creado.");
    };
    return API;
}());
exports.default = API;
var Consola = /** @class */ (function () {
    function Consola() {
    }
    Consola.prototype.createUser = function (usuarioDTO) {
        var usuario = Usuario_1.Usuario.CrearUsuario(usuarioDTO);
        console.log("CONSOLA", usuario);
        return "".concat(usuario.getNombre(), ", el usuario con email ").concat(usuario.getEmail(), " fue creado.");
    };
    return Consola;
}());
exports.Consola = Consola;
