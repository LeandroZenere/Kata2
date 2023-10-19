import { UsuarioConsola } from './UsuarioConsola';
import { UsuarioAPI } from './UsuarioAPI';
import { UsuarioDTO } from './UsuarioDTO';
import { CrearUsuario } from './CrearUsuario';

const nuevoUsuarioConsola = UsuarioConsola.CrearUsuario("Juan", "Perez", "juanperez@email.com", "123456", "1456");
const nuevoUsuarioAPI = UsuarioAPI.CrearUsuario("Maria", "Lopez", "marialopez@email.com", "password123", "password123");

// Crear instancias de UsuarioDTO a partir de los usuarios creados arriba
const usuarioDTOConsola = new UsuarioDTO("", "", "");
usuarioDTOConsola.setNombre(nuevoUsuarioConsola.getNombre());
usuarioDTOConsola.setApellido(nuevoUsuarioConsola.getApellido());
usuarioDTOConsola.setEmail(nuevoUsuarioConsola.getEmail());

const usuarioDTOAPI = new UsuarioDTO("", "", "");
usuarioDTOAPI.setNombre(nuevoUsuarioAPI.getNombre());
usuarioDTOAPI.setApellido(nuevoUsuarioAPI.getApellido());
usuarioDTOAPI.setEmail(nuevoUsuarioAPI.getEmail());

const usuarionuevo = new CrearUsuario();

const mensajeUsuarioComun = usuarionuevo.crearUsuario(usuarioDTOConsola, false);
const mensajeUsuarioAdmin = usuarionuevo.crearUsuario(usuarioDTOAPI, true);

console.log("Usuario Común:", mensajeUsuarioComun);
console.log("Usuario Admin:", mensajeUsuarioAdmin);
