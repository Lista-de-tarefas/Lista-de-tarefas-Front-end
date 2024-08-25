import style from './index.module.css';

interface props {
    icon: React.ReactNode;
    action?: () => void;
}

export function Button({ icon, action }: props) {
    return (
        <div className={style.btn} onClick={action}>
            {icon}
        </div>
    )
}