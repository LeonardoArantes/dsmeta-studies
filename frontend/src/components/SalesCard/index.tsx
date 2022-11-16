import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Sales</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Date</th>
                            <th>Salesman</th>
                            <th className="show992">Visits</th>
                            <th className="show992">sales</th>
                            <th>Total</th>
                            <th>Notify</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">01</td>
                            <td className="show576">2022-10-25</td>
                            <td>Anakin</td>
                            <td className="show992">2</td>
                            <td className="show992">2</td>
                            <td>BRL 10.00</td>
                            <td>
                                <div className="dsmeta-notify-button-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">01</td>
                            <td className="show576">2022-10-25</td>
                            <td>Anakin</td>
                            <td className="show992">2</td>
                            <td className="show992">2</td>
                            <td>BRL 10.00</td>
                            <td>
                                <div className="dsmeta-notify-button-container">
                                    <div className="dsmeta-notify-button">
                                        <NotificationButton />
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">01</td>
                            <td className="show576">2022-10-25</td>
                            <td>Anakin</td>
                            <td className="show992">2</td>
                            <td className="show992">2</td>
                            <td>BRL 10.00</td>
                            <td>
                                <div className="dsmeta-notify-button-container">
                                    <div className="dsmeta-notify-button">
                                        <NotificationButton />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesCard
