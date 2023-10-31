"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido, email, password) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
    }
    Usuario.CrearUsuario = function (usuarioDTO) {
        if (Usuario.validarContraseña(usuarioDTO.password, usuarioDTO.confirmpassword)) {
            return new Usuario(usuarioDTO.nombre, usuarioDTO.apellido, usuarioDTO.email, usuarioDTO.password);
        }
        else {
            throw new Error("Las contraseñas no son iguales");
        }
    };
    Usuario.validarContraseña = function (password, confirmpassword) {
        return password === confirmpassword;
    };
    // Métodos para acceder a las propiedades privadas
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    Usuario.prototype.getApellido = function () {
        return this.apellido;
    };
    Usuario.prototype.getEmail = function () {
        return this.email;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
