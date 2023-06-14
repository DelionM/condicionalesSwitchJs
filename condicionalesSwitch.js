//ejecuta el códico cuando un valor sea igual a otro
const usuario = {
    nombre: 'Giovanni',
    pais: 'México'
};

switch (usuario.pais){
    case "Colombia":
        console.log('El usuario es colombiano');
        break;
    case 'España':
        console.log('El usuario es español');
        break;
    case 'México':
        console.log('El usuario es mexicano');
        break;
        default:
            console.log('Ni idea de dónde sea');    
}

//este tipo de condicionales sirve para comparar o tener casos especificos
//la setencia if else nos ayuda a poner más comparaciones siendo más versatil 
//el manejo de los operadores