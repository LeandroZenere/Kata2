"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioDTO = void 0;
var UsuarioDTO = /** @class */ (function () {
    function UsuarioDTO(nombre, apellido, email, password, confirmpassword) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.confirmpassword = confirmpassword;
    }
    UsuarioDTO.prototype.obtenerNombreCompleto = function () {
        return "".concat(this.nombre, " ").concat(this.apellido);
    };
    return UsuarioDTO;
}());
exports.UsuarioDTO = UsuarioDTO;
