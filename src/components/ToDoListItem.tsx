import {IonButton, IonItem, IonLabel, IonNote, IonToggle} from "@ionic/react";
import {Todo} from "../data/todos";
import './ToDoListItem.css';
import React from "react";

interface ToDoListItemProps {
    todo: Todo,
    onToggleTodo: (todo: Todo) => void;
    onDeleteTodo: (todo: Todo) => void;
}

const ToDoListItem: React.FC<ToDoListItemProps> = ({todo, onToggleTodo,}) => {
    return (
        <IonItem>

        </IonItem>
    );
};

export default ToDoListItem;
