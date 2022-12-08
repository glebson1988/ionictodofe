import MessageListItem from '../components/MessageListItem';
import {useState} from 'react';
import {Message, getMessages} from '../data/messages';
import {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import {Todo, findAllTodos, findTodoById, createTodo, updateTodo, deleteTodo} from "../data/todos";
import ToDoListItem from "../components/ToDoListItem";

const Home: React.FC = () => {

    const [messages, setMessages] = useState<Message[]>([]);
    const [todos, setTodos] = useState<Todo[]>([]);

    useIonViewWillEnter(() => {
        const msgs = getMessages();
        setMessages(msgs);

        loadTodos();
    });

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    const loadTodos = () => {
        findAllTodos().then(res => {
            setTodos(res.data);
        });
    };

    const handleTodoCreate = (todo: Todo) => {
        createTodo(todo).then(() => {
            loadTodos();
        });
    };

    const handleToggleTodoStatus = (todo: Todo) => {
        todo.completed = !todo.completed
        updateTodo(todo).then(() => {
            loadTodos();
        })
    };

    const handleTodoDelete = (todo: Todo) => {
        deleteTodo(todo.id!).then(() => {
            loadTodos();
        });
    };

    return (
        <IonPage id="home-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Ionic Todo</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">
                            Ionic Todo
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonList>
                    {todos.map((t) => (
                        <ToDoListItem key={t.id} todo={t} onToggleTodo={handleToggleTodoStatus} onDeleteTodo={handleTodoDelete}/>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Home;
