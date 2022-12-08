import {IonButton, IonItem, IonLabel, IonToggle} from "@ionic/react";
import {Todo} from "../data/todos";
import './ToDoListItem.css';
import React from "react";

interface ToDoListItemProps {
    todo: Todo;
    onToggleTodo: (todo: Todo) => void;
    onDeleteTodo: (todo: Todo) => void;
}

const ToDoListItem: React.FC<ToDoListItemProps> = ({todo, onToggleTodo, onDeleteTodo}) => {
    return (
        <IonItem>
            <div slot='start' className={!todo.completed ? 'dot dot-unread' : 'dot'}></div>
            <IonLabel>
                <h2 className={todo.completed ? 'uncompleted' : 'completed'}>
                    {todo.title}
                </h2>
            </IonLabel>
            <IonToggle checked={todo.completed} onIonChange={() => onToggleTodo(todo)} color='primary'/>
            <IonButton onClick={() => onDeleteTodo(todo)} color='danger'></IonButton>
        </IonItem>
    );
};

export default ToDoListItem;
