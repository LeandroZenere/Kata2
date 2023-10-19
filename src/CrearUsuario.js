"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrearUsuario = void 0;
var CrearUsuario = /** @class */ (function () {
    function CrearUsuario() {
    }
    CrearUsuario.prototype.crearUsuario = function (usuarioDTO, esAdmin) {
        if (esAdmin) {
            return this.crearUsuarioAdmin(usuarioDTO);
        }
        else {
            return this.crearUsuarioComun(usuarioDTO);
        }
    };
    CrearUsuario.prototype.crearUsuarioComun = function (usuarioDTO) {
        return "".concat(usuarioDTO.obtenerNombreCompleto(), ", el usuario con email ").concat(usuarioDTO.getEmail(), " fue creado.");
    };
    CrearUsuario.prototype.crearUsuarioAdmin = function (usuarioDTO) {
        return "El usuario ".concat(usuarioDTO.obtenerNombreCompleto(), ", email ").concat(usuarioDTO.getEmail(), " fue creado por Admin.");
    };
    return CrearUsuario;
}());
exports.CrearUsuario = CrearUsuario;
