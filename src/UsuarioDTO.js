"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioDTO = void 0;
var UsuarioDTO = /** @class */ (function () {
    function UsuarioDTO(nombre, apellido, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
    UsuarioDTO.prototype.obtenerNombreCompleto = function () {
        return "".concat(this.nombre, " ").concat(this.apellido);
    };
    UsuarioDTO.prototype.getNombre = function () {
        return this.nombre;
    };
    UsuarioDTO.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    UsuarioDTO.prototype.getApellido = function () {
        return this.apellido;
    };
    UsuarioDTO.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    UsuarioDTO.prototype.getEmail = function () {
        return this.email;
    };
    UsuarioDTO.prototype.setEmail = function (email) {
        this.email = email;
    };
    return UsuarioDTO;
}());
exports.UsuarioDTO = UsuarioDTO;
