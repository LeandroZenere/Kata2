export class UsuarioDTO {
    readonly nombre: string;
    readonly apellido: string;
    readonly email: string;
    readonly password: string;
    readonly confirmpassword: string;

    constructor(nombre: string, apellido: string, email: string, password: string, confirmpassword: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.confirmpassword = confirmpassword;
    }

    obtenerNombreCompleto(): string {
        return `${this.nombre} ${this.apellido}`;
    }
}

