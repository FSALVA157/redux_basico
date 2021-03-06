
interface Action {
    type: string;
    payload?: any;
};

const incrementAction: Action = {
    type: "INCREMENTAR"
}

const decrementarAction: Action = {
    type: "DECREMENTAR"
}

const multiplicarAction: Action = {
    type: "MULTIPLICAR",
    payload: 100
}

const dividirAction: Action = {
    type: "DIVIDIR",
    payload: 2
}

function reducer(accion : Action, state = 10){

    switch (accion.type) {
        case 'INCREMENTAR':
            return ++state;            
            
        case 'DECREMENTAR':
            return --state;            
            
        case 'MULTIPLICAR':
            return state *= accion.payload;            

        case 'DIVIDIR':
            return state/accion.payload;    
    
        default:
            return state;
            
    }
    
}

console.log(reducer(dividirAction, 10));







