import style from './index.module.css';
import { useState } from 'react';
import { getDate } from '../../utils/getDate';

export function Header() {
    const [date, setDate] = useState<{ year: string, hour: string }>(getDate());
    setInterval(() => {
        const date = getDate();
        setDate(date);
    }, 60000)

    return (
        <main className={style.main}>
            <div className={style.div_date_name}>
                <span className={style.ttl_name}>Hey, Stev</span>
                <span className={style.date}>{date?.year}  <span>{date?.hour} <span>pm</span></span></span>
            </div>
            <div className={style.div_profile}>
                <div className={style.profile}></div>
            </div>
        </main>
    )
}