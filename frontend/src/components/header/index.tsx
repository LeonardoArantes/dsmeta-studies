import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {

    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>GitHub:
                    <a href="https://github.com/LeonardoArantes/LeonardoArantes">LeonardoArantes</a>
                </p>
            </div>
        </header>
    )
}

export default Header;
