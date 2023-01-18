import { useEffect, useState } from "react";
import IClient from "../interfaces/IClient";
import ClientCard from "../components/ClientCard";
import { userToken, clientsList, deleteClient, updateClient } from "../services/apiRequests";
import { getUserSession } from "../services/sessionStorage"

export default function Clients() {
  const [clients, setClients] = useState<IClient[] | null>([]);
 
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

  const handleUpdateBtn = async (client: IClient) => { console.log(client) }
  const handleDeleteBtn = (id: string) => { deleteClient(id) }

  return (
    <>
      <h3>Clients List</h3>
      <div className='clients-list'>
        { clients?.map((client) => (
          <ClientCard
            client={client}
            handleDeleteBtn={ handleDeleteBtn }
            handleUpdateBtn={ handleUpdateBtn } 
            key={client._id}
          />
        ))}
      </div>
    </>
  )
}
