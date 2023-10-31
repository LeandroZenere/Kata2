import { UsuarioDTO } from './UsuarioDTO';

export class Usuario {
    private nombre: string;
    private apellido: string;
    private email: string;
    private password: string;

    private constructor(nombre: string, apellido: string, email: string, password: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
    }

    public static CrearUsuario(usuarioDTO: UsuarioDTO): Usuario {
        if (Usuario.validarContraseña(usuarioDTO.password, usuarioDTO.confirmpassword)) {
            return new Usuario(usuarioDTO.nombre, usuarioDTO.apellido, usuarioDTO.email, usuarioDTO.password);
        } else {
            throw new Error("Las contraseñas no son iguales");
        }
    }

    private static validarContraseña(password: string, confirmpassword: string): boolean {
        return password === confirmpassword;
    }

    // Métodos para acceder a las propiedades privadas
    public getNombre(): string {
        return this.nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public getEmail(): string {
        return this.email;
    }
}