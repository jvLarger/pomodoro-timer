import style from './styles.module.css';

function Header() {
    return (
        <header className={style.headerPomodoro}>
            <h2>Pomodoro Timer</h2>
        </header>
    );
}

export default Header;