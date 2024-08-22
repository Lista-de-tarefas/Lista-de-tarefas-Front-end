//CSS
import style from './index.module.css';

//Context
import { useContext } from 'react';
import { ErrorContext } from '../../context/error';

//Componentes
import { Header } from '../../components/Header';
import { InputTxt } from '../../components/InputTxt';
import { Task } from '../../components/Task';
import { ErrorComponent } from '../../components/Error';

export function Home() {
    const errorContext = useContext(ErrorContext);
    if (!errorContext) {
        return "Erro no context 'ErrorContext' src/pages/Home linha 17."
    }
    const { error } = errorContext;

    return (
        <main className={style.main}>
            <div className={style.div_center}>
                {error && (
                    <ErrorComponent />
                )}
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