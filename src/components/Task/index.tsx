import style from './index.module.css';

//Hooks
import { useState, useContext } from 'react';

//Context
import { Context } from '../../context/context';

//Icons
import { AlignLeft, Trash } from 'lucide-react';

//Components
import { Button } from './_components/Button';

//interfaces
import { interfaceTask } from '../../types/task';

interface props {
    task: interfaceTask;
}

export function Task({ task }: props) {
    const context = useContext(Context);
    if (!context) {
        return "Erro no context src/components/Task linha 25."
    }
    const { count, setCount, setDeleteTaskValidation } = context;

    const [checkboxValue, setCheckboxValue] = useState<any>(undefined);
    const getCheckboxValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue(event.target.checked);
    }
    const pmAm = task.hour.slice(0, 2) as unknown as number;
    const hour = task.hour.slice(0, 5) as unknown as number;

    async function deleteTask() {
        try {
            const response = await fetch(`http://localhost:8080/delete/${task.id}`, {
                method: 'DELETE'
            });
            setCount(count + 1);
            setDeleteTaskValidation(true);
            setTimeout(() => {
                setDeleteTaskValidation(false);
            }, 3000)
        } catch (error) {
            console.log("Erro ao apagar a tarefa!" + error)
        }
    }

    return (
        <main className={style.main}>
            <div className={style.div_color} style={{ backgroundColor: `${task.color}` }}></div>
            <div className={style.div_task}>
                <div className={style.task}>
                    {task.task}
                </div>
                <div className={style.div_checkbox}>
                    <input
                        className={style.checkbox}
                        type='checkbox'
                        onChange={getCheckboxValue}
                    />
                </div>
            </div>
            <div className={style.div_date}>
                <div className={style.container_date}>
                    <AlignLeft color='white' />
                    <span className={style.date}>{task.year} - <span>{hour}<span>{pmAm > 11 ? " " + "pm" : " " + "am"}</span></span></span>
                </div>
                <Button action={deleteTask} icon={<Trash className={style.trash_icon} />} />
            </div>
        </main>
    )
}