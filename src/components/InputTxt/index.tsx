import style from './index.module.css';
import { useState, useContext } from 'react';
import { Context } from '../../context/context';
import { getDate } from '../../utils/getDate';

export function InputTxt() {
    const errorContext = useContext(Context);
    if (!errorContext) {
        return "Erro no context 'ErrorContext' src/components/Error linha 9."
    }
    const { setError, setValidation, count, setCount } = errorContext;
    const [inputValue, setInputValue] = useState<string>("");

    const getInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const newTask = async () => {
        if (inputValue.length < 1) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }
        if (inputValue.length > 0) {
            try {
                //let color = ["#D56466", "#2AA9C2", "#DEB7E7", "#007605", "#FFF"];
                const colors = [
                    "#FF6F61", // Coral
                    "#1E90FF", // Azul Turquesa
                    "#32CD32", // Verde Limão
                    "#FFD700", // Amarelo Ouro
                    "#FF00FF", // Rosa Fúcsia
                    "#FFA500", // Laranja Vibrante
                    "#8A2BE2", // Roxo Neon
                    "#00FFFF", // Ciano
                    "#4169E1", // Azul Royal
                    "#DFFF00", // Amarelo Limão
                    "#FF4DFF", // Rosa Neon
                    "#40E0D0", // Turquesa Claro
                    "#FF007F", // Rosa Choque
                    "#0033FF", // Azul Elétrico
                    "#FF5E00", // Laranja Neon
                    "#D0021B", // Vermelho Ferrari
                    "#CCFF00", // Amarelo Limão Neon
                    "#BF00FF", // Púrpura Brilhante
                    "#00BFFF", // Azul Céu
                    "#F4A300", // Laranja Amarelo
                    "#FF00FF", // Magenta
                    "#FF6347", // Tomate
                    "#00FF7F", // Verde Mar
                    "#FF1493", // Rosa Profundo
                    "#7FFF00", // Verde Chartreuse
                    "#FF8C00", // Laranja Escuro
                    "#DA70D6", // Orquídea
                    "#ADFF2F", // Verde Amarelo
                    "#FF4500", // Laranja Vermelho
                    "#DC143C", // Vermelho Coral
                    "#8B008B", // Roxo Escuro
                    "#FF69B4", // Rosa Chocante
                    "#00FA9A", // Verde Esmeralda
                    "#FFB6C1", // Rosa Claro
                    "#8A2BE2", // Roxo Escuro
                    "#F08080", // Coral Claro
                    "#32CD32", // Verde Limão
                    "#E9967A", // Salmão Escuro
                    "#8B4513"  // Marrom Saddle
                ];

                const randomColor = (options: string[]) => {
                    const randomIndex = Math.floor(Math.random() * options.length);
                    return options[randomIndex];
                }
                const response = await fetch('https://lista-de-tarefas-back-end-production.up.railway.app/newtask', {
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
                            color: randomColor(colors)
                        }
                    )
                });
                setInputValue("");
                setValidation(true);
                setCount(count + 1);
                setTimeout(() => {
                    setValidation(false);
                }, 3000);
                console.log(response);
            } catch (error) {
                console.log(`Erro na requisição: ${error}`)
            }
        }
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            newTask();
        }
    };

    return (
        <main className={style.main}>
            <div className={style.div_input_text}>
                <input
                    className={style.input_text}
                    value={inputValue}
                    onChange={getInputValue}
                    onKeyPress={handleKeyPress}
                    type="text"
                    placeholder='Adicione uma nova tarefas...'
                />
                <button className={style.btn_add} onClick={newTask}>Adicionar</button>
            </div>
        </main>
    )
}