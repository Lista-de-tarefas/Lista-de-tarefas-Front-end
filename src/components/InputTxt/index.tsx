import style from './index.module.css';
import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react';
import { getDate } from '../../utils/getDate';

export function InputTxt() {
    const [inputValue, setInputValue] = useState<string | undefined>();

    const getInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const newTask = async () => {
        try {
            const response = await fetch('http://localhost:8080/tarefas/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        task: inputValue,
                        completed: false,
                        cor: "#FFF",
                        hour: getDate().hour,
                        year: getDate().year
                    }
                )
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(`Erro na requisição: ${error}`)
        }
    }

    return (
        <main className={style.main}>
            <div className={style.div_input_text}>
                <input
                    className={style.input_text}
                    onChange={getInputValue}
                    type="text"
                    placeholder='Adicione uma novas tarefas...'
                />
                <button className={style.btn_add} onClick={newTask}>Adicionar</button>
            </div>
        </main>
    )
}