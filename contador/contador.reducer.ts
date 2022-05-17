import { Action } from '../ngrx-fake/ngrx';


export function contadorReducer(accion : Action, state = 10){

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
