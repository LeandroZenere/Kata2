import { UsuarioDTO } from './UsuarioDTO';
import API, { Consola } from './CrearUsuario';

const crearUsuarioApi = new API();
const crearUsuarioConsola = new Consola();

const usuarioDto1 = new UsuarioDTO("Juan", "Perez", "juanperez@email.com", "123456", "123456");
const mensajeCreadoApi = crearUsuarioApi.createUser(usuarioDto1);
console.log(mensajeCreadoApi);

const usuarioDto2 = new UsuarioDTO("Maria", "Lopez", "marialopez@email.com", "password123", "password123");
const mensajeCreadoConsola = crearUsuarioConsola.createUser(usuarioDto2);
console.log(mensajeCreadoConsola);