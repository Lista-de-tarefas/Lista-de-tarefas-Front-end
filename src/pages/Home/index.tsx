//CSS
import style from './index.module.css';

//Componentes
import { Header } from '../../components/Header';
import { InputTxt } from '../../components/InputTxt';
import { Task } from '../../components/Task';

export function Home() {
    return (
        <main className={style.main}>
            <div className={style.div_center}>
                <Header />
                <InputTxt />
                <div className={style.container_task}>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </div>
            </div>
        </main>
    )
}