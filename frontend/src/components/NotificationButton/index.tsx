import NotificationIcon from '../../assets/img/Vector.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';
import axios from 'axios';
import { toast } from 'react-toastify';

type Props={
    saleId: number;
}

function HandleClick(id: number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        toast.info("Notification message sent");
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