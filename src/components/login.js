import { Component } from 'react';
import '../css/main.css';
import axios from 'axios';
import { Link } from 'react-router-dom'

const endpoint = "http://localhost:8000/api/login";
class Login extends Component {
    state = {
        form: {
            name: '',
            password: ''
        },
        divcontainer: false,
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }
    showAlert(){
        this.setState({ divcontainer: !this.state.divcontainer }); 
    }
    loggin = async () => {
        await axios.get(endpoint, {
            params: {
                email: this.state.form.email,
                /*    password: md5(this.state.form.password)}} */
                password: this.state.form.password
            }
        }
        )
            .then(response => {
                if(response.data.error){
                   this.showAlert()
                    setTimeout( () =>{
                        this.showAlert()
                    }, 3000);
                }

                else{
                    window.location.href = './showUsers'
                }

                
            })
            .catch(error => {
                this.setState({ divcontainer: !this.state.divcontainer });
                console.log(error);
            })
    }
    render() {
        const x = this.state.divcontainer;
        return (
            <div>
                <div className="containerPrincipal">
                    <div className="containerSecundario">
                        <div className='form-group'>
                            <label>Usuario: </label>
                            <br />
                            <input
                                type="text"
                                className='form-control'
                                name='email'
                                onChange={this.handleChange}
                            />
                            <br />
                            <label>Contraseña: </label>
                            <br />
                            <input
                                type="password"
                                className='form-control'
                                name='password'
                                onChange={this.handleChange}
                            />
                            <br />

                            <td className="buttons">
                                <button className='btn btn-primary' onClick={() => this.loggin()}>Sign In</button>
                                <Link to={`/create`} className='btn btn-primary'>Sign Up</Link>
                            </td>

                        </div>
                    </div>
                </div>

                {x &&
                    <div className="alert alert-danger" role="alert">
                       usuario o contraseña incorrectos
                    </div>
                }

            </div>
        );
    }

}

export default Login;