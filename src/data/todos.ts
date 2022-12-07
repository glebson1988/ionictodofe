import {Http, HttpResponse} from "@capacitor-community/http";

export interface Todo {
    id?: number | string;
    title: string;
    completed: boolean;
}

const resourceUrl = 'http://localhost:3000/todos';

export const findAllTodos = () => {
    const options = {
        url: `${resourceUrl}`,
        headers: {"Content-Type": "application/json"}
    };
    return Http.get(options);
}

export const findTodoById = (id: number | string) => {
    const options = {
        url: `${resourceUrl}/${id}`,
        headers: {"Content-Type": "application/json"}
    };
    return Http.get(options);
}

export const createTodo = (todo: Todo) => {
    const options = {
        url: `${resourceUrl}`,
        headers: {"Content-Type": "application/json"},
        data: todo
    };
    return Http.post(options);
}

export const updateTodo = (todo: Todo) => {
    const options = {
        url: `${resourceUrl}/${todo.id}`,
        headers: {"Content-Type": "application/json"},
        data: todo
    };
    return Http.put(options);
}

export const deleteTodo = (id: number | string) => {
    const options = {
        url: `${resourceUrl}/${id}`,
        headers: {"Content-Type": "application/json"}
    };
    return Http.del(options);
}
