import { Action } from '././ngrx-fake/ngrx';
import { decrementarAction, dividirAction, incrementAction, multiplicarAction, resetAction } from './contador/contador.actions';

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

        case 'RESET':
            return state = 0;    
    
        default:
            return state;
            
    }
    
}

console.log(reducer(incrementAction, 50));
console.log(reducer(decrementarAction, 50));
console.log(reducer(dividirAction, 50));
console.log(reducer(multiplicarAction, 50));
console.log(reducer(resetAction, 50));