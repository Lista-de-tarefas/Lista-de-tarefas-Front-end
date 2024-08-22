import style from './index.module.css';
import { useState, useContext } from 'react';
import { ErrorContext } from '../../context/error';
import { getDate } from '../../utils/getDate';

export function InputTxt() {
    const errorContext = useContext(ErrorContext);
    if (!errorContext) {
        return "Erro no context 'ErrorContext' src/components/Error linha 9."
    }
    const { setError } = errorContext;

    const [inputValue, setInputValue] = useState<string>("");

    const getInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const newTask = async () => {
        if (inputValue.length < 1) {
            setError(true);
            setInterval(() => {
                setError(false);
            }, 3000);
            return;
        }
        if (inputValue.length > 0) {
            try {
                const response = await fetch('http://localhost:8080/newtask', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(
                        {
                            task: inputValue,
                            isCompleted: false,
                            year: getDate().year,
                            hour: getDate().hour,
                            color: "#FFF"
                        }
                    )
                });
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.log(`Erro na requisição: ${error}`)
            }
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