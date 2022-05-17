import { Action, Reducer } from "./ngrx-fake/ngrx";
import { contadorReducer } from "./contador/contador.reducer";
import { incrementAction } from "./contador/contador.actions";

class Store<T>{

    constructor(
        private state: T,
        private reducer: Reducer<T>
    ){}

    getState(){
        return this.state;
    }

    dispatch(accion: Action){
        this.state = this.reducer(accion, this.state);
    }
}

const store = new Store(10, contadorReducer);

console.log(store.getState());

store.dispatch(incrementAction);
console.log(store.getState());