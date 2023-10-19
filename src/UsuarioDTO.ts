export class UsuarioDTO {
    private nombre: string;
    private apellido: string;
    private email: string;

    constructor(nombre: string, apellido: string, email: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }

    obtenerNombreCompleto(): string {
        return `${this.nombre} ${this.apellido}`;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }
}

