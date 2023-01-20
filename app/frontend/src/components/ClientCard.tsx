import IClient from '../interfaces/IClient';
import './ClientCard.css';

type ClientCardProps = {
  client: IClient
  handleDeleteBtn: Function
  handleUpdateBtn: Function
}

export default function ClientCard({ client, handleDeleteBtn, handleUpdateBtn }: ClientCardProps) {
  return (
    <div className='client-card'>
      <p>{client.name}</p>
      <p>{client.email}</p>
      <p>Phone: {client.phone}</p>
      <p>Address: {client.address}</p>
      <p>CPF: {client.cpf}</p>
      <button type='button' id='update-btn' onClick={ () => handleUpdateBtn(client) }>
        UPDATE
      </button>
      <button type='button' id='delete-btn' onClick={ () => handleDeleteBtn(client._id) }>
        DELETE
      </button>
    </div>
  )
}
