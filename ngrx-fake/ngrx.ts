export interface Action {
    type: string;
    payload?: any;
};

export interface Reducer<T>{
    (accion: Action, state: T): T; 
}