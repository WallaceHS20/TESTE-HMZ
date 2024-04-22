import axios from 'axios'
import { useEffect, useState } from 'react'
import Title from '../../components/Title'
import Modal from '../../components/Modal'
import { toast } from 'react-toastify';
import SideBar from '../../components/SideBar';
import './list.css'

{/* REACT ICONS */ }
import { GoBell } from "react-icons/go";
import { FaPen } from "react-icons/fa6";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

export default function ListPage() {

  const [usuarios, setUsuarios] = useState([])
  const [usuario, setUsuario] = useState('')

  const [page, setPage] = useState(1)
  const [peer_page, setPeerPage] = useState(10)

  const [showModal, setShowModal] = useState(false);
  const [detail, setDetail] = useState();



  useEffect(() => {

    //CAPTURANDO TODOS OS USUÁRIOS
    async function loadAllUsers() {
      const response = await axios.get("https://reqres.in/api/users", {
        params: {
          page: page,
          per_page: peer_page
        }
      })

        .then((response) => {
          setUsuarios(response.data.data)
        })

        .catch((error) => [
          toast.error('Falha de conexão!', error)
        ])

    }

    //CAPTURANDO USUÁRIO POR ID
    async function loadUserById(id) {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        const user = response.data.data;
        setUsuario(user)

      } catch (error) {
        toast.error('Falha ao buscar detalhes do usuário.');
      }
    }

    loadAllUsers();
    loadUserById(2);

  }, [page, peer_page])

  //EXIBIÇÃO DO MODAL
  function showPostModal(item) {
    setShowModal(!showModal);
    setDetail(item);
  }

  function handleSelectionChange(e) {
    setPeerPage(e.target.value);
  }

  return (
    <div>
      <SideBar/>

      {/* COMPONENTE TITLE */}
      <Title avatar={usuario.avatar}>
        <GoBell size={25} />
      </Title>

      <div className='content'>
        <div className='list-container'>
          <div className='top-tile-list'>
            <span>Usário</span>
            <button>Novo</button>
          </div>
          <div className='table-container'>
            <table>
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Sobrenome</th>
                  <th scope="col">email</th>
                  <th scope="col">Perfil</th>
                </tr>
              </thead>
              <tbody>
                {
                  usuarios.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className='action'>
                          <button onClick={() => showPostModal(item)}>
                            <FaPen size={15} />
                          </button>
                          {item.id}
                        </td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td><img src={item.avatar} /></td>
                      </tr>
                    )
                  }
                  )}
              </tbody>
            </table>
          </div>
          <div className='filter'>

            <div className='peer_page'>
              <label>Linhas por página:</label>
              <select value={peer_page} onChange={handleSelectionChange}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="12">12</option>
              </select>
            </div>

            <div className='page-info'>
              <span>1-{peer_page} de 12</span>
            </div>

            <div className='pagination'>

              {/*VERIFICANDO CONDIÇÕES DE RETORNO DE PÁGINA */}
              {page === 1 ? (
                <button disabled>
                  <MdOutlineArrowBackIos size={17} />
                </button>
              ) : (
                <button onClick={() => setPage(page - 1)}>
                  <MdOutlineArrowBackIos size={17} />
                </button>
              )}

              {/* validando condições de avanço da página */}
              {usuarios.length < peer_page ? (
                <button disabled>
                  <MdOutlineArrowForwardIos size={17} />
                </button>
              ) : (
                <button onClick={() => setPage(page + 1)}>
                  <MdOutlineArrowForwardIos size={17} />
                </button>
              )}

            </div>
        </div>
      </div>

      {/* MODAL FLAG E OBJETO DE DADOS DO USUÁRIO PASSADO POR PROPS */}
      {showModal &&
        <Modal
          conteudo={detail}
          close={() => setShowModal(!showModal)}
        />
      }
    </div>
    </div >
  )
}