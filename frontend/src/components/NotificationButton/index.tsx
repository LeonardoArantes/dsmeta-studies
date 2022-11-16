import NotificationIcon from '../../assets/img/Vector.svg'
import './styles.css'

function NotificationButton() {
    return (
        <div className="dsmeta-notify-button">
            <img src={NotificationIcon} alt="Notify" />
        </div>
    )
}

export default NotificationButton