import { UsuarioDTO } from "./UsuarioDTO";
import { Usuario } from "./Usuario";

export default class API {
  createUser(usuarioDTO: UsuarioDTO): string {
    const usuario: Usuario = Usuario.CrearUsuario(usuarioDTO);

    console.log("API", usuario);

    return `${usuario.getNombre()}, el usuario con email ${usuario.getEmail()} fue creado.`;
  }
}

export class Consola {
  createUser(usuarioDTO: UsuarioDTO): string {
    const usuario: Usuario = Usuario.CrearUsuario(usuarioDTO);

    console.log("CONSOLA", usuario);

    return `${usuario.getNombre()}, el usuario con email ${usuario.getEmail()} fue creado.`;
}
}