const runasReducer = (state, action) => {

    const {type, payload} = action;

    switch (type) {
        case 'GET_RUNAS':
            return {
                ...state,
                products: payload,
                product:[{
                    id:'',
                    nombre:'',
                    categoria:"",
                    descripcion:"",
                    precio:0,
                    codigo:"",
                    alto:0,
                    ancho:0,
                    diametro:0,
                    peso:0,
                    color:"",
                    stock:0,
                    img:"",

                }]
            }
            
            case 'GET_RUNA':
                return {
                    ...state,
                    product:[payload]
                }
    
        default:
            return state
    }
};

export default runasReducer;