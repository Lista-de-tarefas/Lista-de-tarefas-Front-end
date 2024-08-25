import style from './index.module.css';

interface props {
    icon: React.ReactNode;
    text: string;
}

export function Validation({ text, icon }: props) {
    return (
        <main className={style.main}>
            <span className={style.alert}>
                {icon}
                {text}
            </span>
        </main>
    )
}