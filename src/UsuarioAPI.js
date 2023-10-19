"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioAPI = void 0;
var UsuarioAPI = /** @class */ (function () {
    function UsuarioAPI(nombre, apellido, email, password, confirmpassword) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        if (this.validarContraseña(password, confirmpassword)) {
            this.password = password;
            this.confirmpassword = confirmpassword;
        }
        else {
            throw new Error("Las contraseñas no son iguales");
        }
    }
    UsuarioAPI.CrearUsuario = function (nombre, apellido, email, password, confirmpassword) {
        var usuarioAPI = new UsuarioAPI(nombre, apellido, email, password, confirmpassword);
        return usuarioAPI;
    };
    UsuarioAPI.prototype.validarContraseña = function (password, confirmpassword) {
        return password === confirmpassword;
    };
    // Métodos para acceder a las propiedades privadas
    UsuarioAPI.prototype.getNombre = function () {
        return this.nombre;
    };
    UsuarioAPI.prototype.getApellido = function () {
        return this.apellido;
    };
    UsuarioAPI.prototype.getEmail = function () {
        return this.email;
    };
    return UsuarioAPI;
}());
exports.UsuarioAPI = UsuarioAPI;
