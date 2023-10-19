"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioConsola = void 0;
var UsuarioConsola = /** @class */ (function () {
    function UsuarioConsola(nombre, apellido, email, password, confirmpassword) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        if (this.validarContraseña(password, confirmpassword)) {
            this.password = password;
            this.confirmpassword = confirmpassword;
        }
        else {
            throw new Error("Las contraseñas no coinciden");
        }
    }
    UsuarioConsola.CrearUsuario = function (nombre, apellido, email, password, confirmpassword) {
        var usuarioConsola = new UsuarioConsola(nombre, apellido, email, password, confirmpassword);
        return usuarioConsola;
    };
    UsuarioConsola.prototype.validarContraseña = function (password, confirmpassword) {
        return password === confirmpassword;
    };
    // Métodos para acceder a las propiedades privadas
    UsuarioConsola.prototype.getNombre = function () {
        return this.nombre;
    };
    UsuarioConsola.prototype.getApellido = function () {
        return this.apellido;
    };
    UsuarioConsola.prototype.getEmail = function () {
        return this.email;
    };
    return UsuarioConsola;
}());
exports.UsuarioConsola = UsuarioConsola;
