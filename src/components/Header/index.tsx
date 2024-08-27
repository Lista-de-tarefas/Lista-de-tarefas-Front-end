import style from './index.module.css';
import { useState } from 'react';
import { getDate } from '../../utils/getDate';
import profileImg from '../../assets/img/profile.jpg';

export function Header() {
    const [date, setDate] = useState<{ year: string, hour: string }>(getDate());
    setInterval(() => {
        const date = getDate();
        setDate(date);
    }, 60000)
    const pmAm = date.hour.slice(0, 2) as unknown as number;

    return (
        <main className={style.main}>
            <div className={style.div_date_name}>
                <span className={style.ttl_name}>Hey, Stev</span>
                <span className={style.date}>{date?.year}  <span>{date?.hour} <span>{pmAm > 11 ? " " + "pm" : " " + "am"}</span></span></span>
            </div>
            <div className={style.div_profile}>
                <img className={style.profile} src={profileImg} alt="" />
            </div>
        </main>
    )
}