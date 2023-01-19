import { useEffect, useState } from "react";
import IClient from "../interfaces/IClient";
import ClientCard from "../components/ClientCard";
import { userToken, clientsList, deleteClient, updateClientRequest, createNewClient } from '../services/apiRequests';
import { getUserSession } from "../services/sessionStorage"
import ClientForm from "../components/ClientForm";

export default function Clients() {
  const [clients, setClients] = useState<IClient[] | null>([]);
  const [updateClient, setUpdateClient] = useState({} as IClient)
 
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

      console.log('clients :', clients)

    } catch (error) {
      console.error(error);
    }
  }, [])

  const getClients = () => {
    clientsList().then((data) => {
      setClients(data);
    })
  }

  const handleUpdateBtnCard = async (client: IClient) => { setUpdateClient(client) }
  
  const handleUpdateClient = async (client: IClient) => {
    const { name, email, phone, address, cpf } = client;
    await updateClientRequest(updateClient._id, {
      name, email, phone, address, cpf });
    
    getClients();
  }

  const handleNewClient = async () => {}

  const handleDeleteBtn = (id: string) => { 
    deleteClient(id);
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
