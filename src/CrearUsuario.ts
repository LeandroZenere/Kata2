import { UsuarioDTO } from './UsuarioDTO';

export class CrearUsuario {
    crearUsuario(usuarioDTO: UsuarioDTO, esAdmin: boolean): string {
        if (esAdmin) {
            return this.crearUsuarioAdmin(usuarioDTO);
        } else {
            return this.crearUsuarioComun(usuarioDTO);
        }
    }

    private crearUsuarioComun(usuarioDTO: UsuarioDTO): string {
        return `${usuarioDTO.obtenerNombreCompleto()}, el usuario con email ${usuarioDTO.getEmail()} fue creado.`;
    }

    private crearUsuarioAdmin(usuarioDTO: UsuarioDTO): string {
        return `El usuario ${usuarioDTO.obtenerNombreCompleto()}, email ${usuarioDTO.getEmail()} fue creado por Admin.`;
    }
}


