import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TrainerService from '../services/trainerService'
import UserService from '../services/userService'

class JoinForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            kiket_vallal: 'Férfi',
            specializacio: '',
            vegzettseg: '',
            tapasztalat: '',
            telefonszam: '',
            bemutatkozas: '',
            user_id: '',
            hiteles: false
        }

        this.changeKiketVallal = this.changeKiketVallal.bind(this);
    }

    changeKiketVallal= (event) => {
        if(event.target.value === 'ferfi')
      {
        this.setState({kiket_vallal: 'Férfi'});
      }
      else if(event.target.value === 'no')
      {
        this.setState({kiket_vallal: 'Nő'});
      }
      else
      {
        this.setState({kiket_vallal: 'Mindkettő'});
      }
    }

    changeSpecializacio= (event) => {
        this.setState({specializacio: event.target.value});
    }

    changeVegzettseg= (event) => {
        this.setState({vegzettseg: event.target.value});
    }

    changeTapasztalat= (event) => {
        this.setState({tapasztalat: event.target.value});
    }

    changeTelefonszam= (event) => {
        this.setState({telefonszam: event.target.value});
    }

    changeBemutatkozas= (event) => {
        this.setState({bemutatkozas: event.target.value});
    }

    saveTrainer= (e) => {
        e.preventDefault();
        if(this.state.specializacio === '' || this.state.vegzettseg === '' || this.state.tapasztalat === '' || this.state.telefonszam === '' || this.state.bemutatkozas === '')
        {
            alert('Minden mező kitöltése kötelező!');
        }
        else
        {
            let trainer= {kiketVallal: this.state.kiket_vallal, specializacio: this.state.specializacio, vegzettseg: this.state.vegzettseg, tapasztalat: this.state.tapasztalat, telefonszam: this.state.telefonszam, bemutatkozas: this.state.bemutatkozas, userId: this.state.user_id, hiteles: this.state.hiteles}
            TrainerService.saveTrainer(trainer).then((res => {
                this.props.history.push('/homePage');
                alert('Sikeres regisztrációxd');
            }))
        }
      }

    componentDidMount(){
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        if(token && id)
        {
            UserService.authUser(token).then((res => {
                if(res)
                {
                    TrainerService.getTrainerByUserId(id).then((res => {
                        if(res.data)
                        {
                            this.props.history.push('/homePage')
                        }
                    }))
                }
            }))
        }
        else
        {
            this.props.history.push('/loginPage')
        }
        this.setState({user_id: id});
    }

    render(){
        return (
            <form>
                <div className='div_col padding_left_right_1 padding_top_1 div_join_register'>
                    <div className='div_row'>
                        <div className='div_form_data'>
                            <div className='div_form_data_titles2'>
                                Kiket vállalsz?
                            </div>
                            <div className='div_form_data_inputs2'>
                                <select className='inputs01' name="nem" onChange={this.changeKiketVallal}>
                                    <option value="ferfi">Férfiak</option>
                                    <option value="no">Nők</option>
                                    <option value="mindketto">Mindkettő</option>
                                </select>                            
                            </div>
                            <div className='div_form_data_titles2'>
                                Specializáció
                            </div>
                            <div className='div_form_data_inputs2'>
                                <input name='specializacio' className='inputs01' onChange={this.changeSpecializacio}/>
                            </div>
                            <div className='div_form_data_titles2'>
                                Végzettség</div>
                            <div className='div_form_data_inputs2'>
                                <input name='vegzettseg' className='inputs01' onChange={this.changeVegzettseg}/>
                            </div>
                            <div className='div_form_data_titles2'>
                                Tapasztalat</div>
                            <div className='div_form_data_inputs2'>
                                <input name='tapasztalat' className='inputs01' onChange={this.changeTapasztalat}/>
                            </div>
                        </div>
                        <div className='div_form_data'>
                            <div className='div_form_data_titles2'>
                                Telefonszám</div>
                            <div className='div_form_data_inputs2'>
                                <input type='number' className='inputs01' name='telefonszam' onChange={this.changeTelefonszam}/>
                            </div>
                            <div className='div_form_data_titles2'>
                                Bemutatkozás
                            </div>
                            <div className='div_form_data_inputs2'>
                                <textarea className='textarea01' onChange={this.changeBemutatkozas}/>
                            </div>
                            <div className='div_left'>
                                Minden mező kitöltése kötelező!
                            </div>
                        </div>
                    </div>
                    <div className='div_reg_button_parent'>
                        <div className='div_right div_submit'>
                            <input type='submit' value='Regisztráció' className='bgcolor_1 submit_button' onClick={this.saveTrainer}/>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default withRouter(JoinForm);