import './login.css'
import Logo from '../../assets/logo.png'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import axios from 'axios'

export default function Login() {

    const user = useRef(null)
    const password = useRef(null)
    const navigate = useNavigate();

    async function login(e) {
        e.preventDefault();

        if (user.current?.value === '' || password.current?.value === '') {
            toast.warning('E-mail ou Senha Vazios!');
            return;
        }

        try {
            const response = await axios.post("https://reqres.in/api/login", {
                email: user.current?.value,
                password: password.current?.value,
            });

            const user = {
                email: user.current?.value,
                password: password.current?.value,
                token: response.data.token
            }

            localStorage.setItem('login', user);

            toast.success('Bem vindo !')

            navigate("/listPage")

        } catch (error) {
            toast.error('E-mail ou Senha incorretos!', error);
        }
    }

    return (
        <div className='container-login'>
            <div className="login-painel">
                <div className="box-title-login">
                    <div className="box-title">
                        <h1>Simplificamos <br /> juntos</h1>
                    </div>
                    <div className="box-description">
                        <span>Supply Chain | Industrial | Systems</span>
                    </div>
                </div>
                <div className="box-form-login"> {/* cinza claro */}
                    <div className='form-painel'> {/* branco */}
                        <div className='form-box'> {/* cinza claro */}
                            <form onSubmit={login}>
                                <div className='logo-painel'>
                                    <img src={Logo} />
                                </div>
                                <label>LOGIN</label>
                                <input
                                    className='input-form'
                                    placeholder='USUÁRIO'
                                    ref={user}

                                />

                                <input
                                    className='input-form'
                                    placeholder='SENHA'
                                    ref={password}
                                />

                                <button type='submit'>LOGAR</button>

                                <div className='actions-login'>
                                    <a href='#'>ESQUECI MINHA SENHA</a>
                                    <a href='#'>CADASTRE-SE</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}