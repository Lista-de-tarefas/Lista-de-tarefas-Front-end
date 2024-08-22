import style from './index.module.css';
import { TriangleAlert } from 'lucide-react';

export function ErrorComponent() {
    return (
        <main className={style.main}>
            <span className={style.alert}><TriangleAlert size={17}/>Alerta</span>
            <span>O campo de tarefa está vazio, por favor defina alguma tarefa.</span>
        </main>
    )
}