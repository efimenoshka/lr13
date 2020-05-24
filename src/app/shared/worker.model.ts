export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    id?: number;
    phone: string;
}

export enum MyWorkerType {
    programmer,
    designer,
    copywriter,
    manager,
}

// export let MyWorkersDatabase: MyWorker[] = [
    // {id: 1, name: 'Ivan', surname: 'Ivanov', type: 0, phone: '+7 (938) 123-45-67'},
    // {id: 2, name: 'Petr', surname: 'Petrov', type: 1, phone: '+7 (567) 678-89-89'},
    // {id: 3, name: 'Sidr', surname: 'Sidorov', type: 2, phone: '+7 (789) 123-66-78'},
    // {id: 4, name: 'Vasya', surname: 'Vasilyev', type: 3, phone: '+7 (456) 678-34-23'}
// ];