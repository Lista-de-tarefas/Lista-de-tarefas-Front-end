import style from './index.module.css';
import { AlignLeft, Trash } from 'lucide-react';
import { Button } from './_components/Button';

export function Task() {
    return (
        <main className={style.main}>
            <div className={style.div_color}></div>
            <div className={style.div_task}>
                <div className={style.task}>
                    <span>
                        Estudar para a prova do ITA, na quinta-feira.
                    </span>
                </div>
                <div className={style.div_checkbox}>
                    <input className={style.checkbox} type='checkbox'></input>
                </div>
            </div>
            <div className={style.div_date}>
                <div className={style.container_date}>
                    <AlignLeft color='white' />
                    <span className={style.date}>15/08/2024-<span>15:10 <span>pm</span></span></span>
                </div>
                <Button icon={<Trash color='white' />} />
            </div>
        </main>
    )
}