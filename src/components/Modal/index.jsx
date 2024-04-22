import './modal.css';
import axios from 'axios'; // Certifique-se de que axios está importado
import { useRef } from 'react';
import { toast } from 'react-toastify';

export default function Modal({ conteudo, close }) {
    const id = conteudo.id;
    const first_name = useRef(null);
    const last_name = useRef(null);
    const email = useRef(null);

    async function editUser() {
        try {
            const response = await axios.put(`https://reqres.in/api/users/${id}`, {
                name: first_name.current?.value, 
                job: last_name.current?.value  
            });

            toast.success('Usuário atualizado com sucesso!');

            close()
        }
        catch (error) {
            toast.error(`Error: ${error.message}`); 
        }
    }

    async function deleteUser() {
        try {
            const response = await axios.delete(`https://reqres.in/api/users/${id}`);
            toast.success('Usuário excluído com sucesso!');
            close(); 
        } catch (error) {
            toast.error('Falha ao excluir usuário.');
        }
    }

    return (
        <div className="modal">
            <div className="modal-container">
                <div className='description'>

                    <h2>Editar Usuário</h2>

                    <div className='row'>
                        <label>ID</label>
                        <input
                            type='text'
                            className='input-box'
                            defaultValue={conteudo.id}
                            disabled
                        />
                    </div>

                    <div className='row'>
                        <label>E-mail</label>
                        <input
                            type='text'
                            className='input-box'
                            defaultValue={conteudo.email}
                            ref={email}
                        />
                    </div>

                    <div className='row'>
                        <label>First Name</label>
                        <input
                            type='text'
                            className='input-box'
                            defaultValue={conteudo.first_name}
                            ref={first_name}
                        />
                    </div>

                    <div className='row'>
                        <label>Last Name</label>
                        <input
                            type='text'
                            className='input-box'
                            defaultValue={conteudo.last_name}
                            ref={last_name}
                        />
                    </div>

                    <div className='modal-actions'>
                        <div className='option-del'>
                            <button onClick={deleteUser}>Excluir</button>
                        </div>
                        <div className='option-edit'>
                            <button onClick={close}>Cancelar</button>
                            <button onClick={editUser}>Salvar</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
