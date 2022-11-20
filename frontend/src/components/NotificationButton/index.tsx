import NotificationIcon from '../../assets/img/Vector.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';
import axios from 'axios';

type Props={
    saleId: number;
}

function HandleClick(id: number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        console.log("Notification message sent");
    })
}

function NotificationButton({saleId} : Props) {
    return (
        <div className="dsmeta-notify-button" onClick={() => HandleClick(saleId)}>
            <img src={NotificationIcon} alt="Notify" />
        </div>
    )
}

export default NotificationButton;