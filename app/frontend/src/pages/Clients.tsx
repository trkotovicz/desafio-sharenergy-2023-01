import { useEffect, useState } from "react";
import ClientCard from "../components/ClientCard";
import ClientForm from "../components/ClientForm";
import IClient from "../interfaces/IClient";
import { clientsList, createNewClient, deleteClient, getClientByName, updateClientRequest, userToken } from '../services/apiRequests';
import { getUserSession } from "../services/sessionStorage";

export default function Clients() {
  const [clients, setClients] = useState<IClient[] | null>([]);
  const [updateClient, setUpdateClient] = useState({} as IClient);
  const [createClient, setCreateClient] = useState({} as IClient);
  const [search, setSearch] = useState('');
 
  useEffect(() => {
    try {
      const checkUser = localStorage.getItem("user");
      if (checkUser === null) {
        const session = getUserSession();
        userToken(session.token);
      } else {
        userToken(JSON.parse(checkUser).token);
      }
      getClients();
    } catch (error) {
      console.error(error);
    }
  }, [])

  const getClients = () => {
    clientsList().then((data) => {
      setClients(data);
    });
  }

  const handleSearch = async () => {
    const searchClients = await getClientByName(search);
    if (searchClients.length) return setClients(searchClients);
    return getClients();
  }

  const handleUpdateBtnCard = (client: IClient) => { setUpdateClient(client) }
  
  const handleUpdateClient = async (client: IClient) => {
    await updateClientRequest(client._id, client);
    getClients();
  }

  const handleNewClient = async (client: IClient) => {
    setCreateClient(client);
    await createNewClient(client);
    getClients();
  }

  const handleDeleteBtn = async (id: string) => { 
    await deleteClient(id);
    getClients();
  }

  return (
    <>
      <h3>Clients List</h3>

      <ClientForm
        client={ updateClient }
        handleNewClientBtn={ handleNewClient }
        handleUpdateClientBtn={ handleUpdateClient }
      />

      <div className='clients-search'>
        <label htmlFor='search'>
          Search
          <input
            className='search-input'
            type='text'
            id='search'
            placeholder='Name'
            value={ search }
            onChange={ (event) => setSearch(event.target.value) }
          />
        </label>
        <button
          type='button'
          className='search-btn'
          onClick={ handleSearch }
        >
          SEARCH
        </button>
      </div>

      <div className='clients-list'>
        { clients?.map((client) => (
          <ClientCard
            client={client}
            handleDeleteBtn={ handleDeleteBtn }
            handleUpdateBtn={ handleUpdateBtnCard } 
            key={client._id}
          />
        ))}
      </div>
    </>
  )
}
