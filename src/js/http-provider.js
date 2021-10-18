//centralizar peticiones fetch

const jokeUrl = "https://api.chucknorris.io/jokes/random";
const urlUsuarios = "https://reqres.in/api/users?page=2";

//PRIMER EJEMPLO DE COMO UTILIZAR LAS PROMESAS EN FETCH Y EN GENERAL

// const obtenerChiste = async() => {

// try {
//      const resp = await fetch( jokeUrl );

//    if ( !resp.ok ) throw  'No se pudo realizar la peticion';

//    return await resp.json(); ;

// } catch (err) {

//     throw err;

// }

// }

//FIN PRIMER EJEMPLO!!

// SEGUNDO EJEMPLO CON DESTRUCTURING
const obtenerChiste = async () => {
  try {
    const resp = await fetch(jokeUrl);

    if (!resp.ok) throw "No se pudo realizar la peticion";

    const { icon_url, id, value } = await resp.json();

    return { icon_url, id, value };
  } catch (err) {
    throw err;
  }
};

const obtenerUsuarios = async () =>{

    const resp = await fetch( urlUsuarios );
    // const data = await resp.json();la linea de abajo eemplazaesta ya que haremos destructuring en la api y solo obtentremos los usuarios y crearemos un objeto que contiene los usuarios{data:usuarios}
    const {data: usuarios} = await resp.json();
    //  console.log(usuarios);
     return usuarios;
}

export { obtenerChiste,
        obtenerUsuarios    
    };
