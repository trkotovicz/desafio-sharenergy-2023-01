import IClient from "../interfaces/IClient"
import { useState, useEffect } from 'react';
import './ClientForm.css';

type ClientFormProps = {
  client: IClient
  handleNewClientBtn: Function
  handleUpdateClientBtn: Function
}

export default function ClientForm({ client, handleNewClientBtn, handleUpdateClientBtn }: ClientFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [cpf, setCpf] = useState('');
  const [newClient, setNewClient] = useState(true);

  useEffect(() => {
    if (client.name) {
      setName(client.name)
      setEmail(client.email)
      setPhone(client.phone)
      setAddress(client.address)
      setCpf(client.cpf)
      setNewClient(false)
    }   
  }, [client])

  return (
    <form className="form-client">
      <label htmlFor='name'>
        {/* Name */}
        <input
          className='name-input'
          type='text'
          placeholder='Name'
          value={ name }
          onChange={ (event) => setName(event.target.value) }
        />
      </label>
      <label htmlFor='email'>
        {/* Email */}
        <input
          className='email-input'
          type='email'
          placeholder='Email'
          value={ email }
          onChange={ (event) => setEmail(event.target.value) }
        />
      </label>
      <label htmlFor='phone'>
        {/* Phone */}
        <input
          className='phone-input'
          type='tel'
          placeholder='Phone'
          value={ phone }
          onChange={ (event) => setPhone(event.target.value) }
        />
      </label>
      <label htmlFor='address'>
        {/* Address */}
        <input
          className='address-input'
          type='text'
          placeholder='Address'
          value={ address }
          onChange={ (event) => setAddress(event.target.value) }
        />
      </label>
      <label htmlFor='cpf'>
        {/* CPF */}
        <input
          className='cpf-input'
          type='text'
          placeholder='CPF'
          value={ cpf }
          onChange={ (event) => setCpf(event.target.value) }
        />
      </label>

      { newClient ? (
        <button
          type='button'
          onClick={ () => handleNewClientBtn({
            name, email, phone, address, cpf
          }) }
        >
          NEW CLIENT
        </button>
      ) : (
        <button
        type='button'
        onClick={ () => handleUpdateClientBtn({
          name, email, phone, address, cpf, _id: client._id
        }) }
      >
        UPDATE
      </button>
      )}
    </form>
  )
}
