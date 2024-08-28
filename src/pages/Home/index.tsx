//CSS
import style from './index.module.css';

//Icons
import { BadgeCheck } from 'lucide-react';
import empty from '../../assets/img/Empty.png';

//Context
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/context';

//Componentes
import { Header } from '../../components/Header';
import { InputTxt } from '../../components/InputTxt';
import { Task } from '../../components/Task';
import { ErrorComponent } from '../../components/Error';
import { Validation } from '../../components/Validation';

//Interfaces
import { interfaceTask } from '../../types/task';

export function Home() {
    const context = useContext(Context);
    if (!context) {
        return "Erro no context 'ErrorContext' src/pages/Home linha 17."
    }
    const { error, validation, count, deleteTaskValidation } = context;

    const [tasks, setTasks] = useState<interfaceTask[] | undefined>(undefined);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:8080/gettask', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                if (data.length > 0) {
                    setTasks(data);
                } else {
                    setTasks(undefined);
                }
            } catch (error) {
                console.log("Erro ao buscar tarefas: " + error);
            }
        }
        fetchData();
    }, [count]);

    return (
        <main className={style.main}>
            <div className={style.div_center}>
                {error && (
                    <ErrorComponent />
                )}
                {validation && (
                    <Validation text='Tarefa adicionada com sucesso!' icon={<BadgeCheck size={17} color='green' />} />
                )}
                {deleteTaskValidation && (
                    <Validation text='Tarefa excluida com sucesso!' icon={<BadgeCheck size={17} color='green' />} />
                )}
                <Header />
                <InputTxt />
                <div className={tasks ? style.container_task : style.container_task_1}>
                    {!tasks && (
                        <img className={style.iconEmpty} src={empty} alt="" />
                    )}
                    {tasks?.map((task, index) => (
                        <Task key={index} task={task} />
                    ))}
                </div>
            </div>
        </main>
    )
}