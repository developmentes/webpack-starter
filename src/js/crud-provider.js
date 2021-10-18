const urlCrud = 'https://reqres.in/api/users/';

const getUsuario = async (id) => {

    const resp = await fetch(`${urlCrud}/${id}`);
    const data = await res.json();

    return data;
}


