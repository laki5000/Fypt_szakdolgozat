import { Component } from 'react';
import TrainerService from '../services/trainerService'
import UserService from '../services/userService'

export default class JoinForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            kiket_vallal: '',
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
        this.setState({kiket_vallal: event.target.value});
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
        let trainer= {kiketVallal: this.state.kiket_vallal, specializacio: this.state.specializacio, vegzettseg: this.state.vegzettseg, tapasztalat: this.state.tapasztalat, telefonszam: this.state.telefonszam, bemutatkozas: this.state.bemutatkozas, userId: this.state.user_id, hiteles: this.state.hiteles}
        TrainerService.saveTrainer(trainer);

        alert('Sikeres regisztrációxd');
      }

    componentDidMount(){
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        if(token && id){
            if(UserService.authUser(token)){
                this.setState({user_id: localStorage.getItem('id')});
            }
        }
    }

    render(){
        return (
            <div>
                <div>EDZŐ REGISZTRÁCIÓ</div>
                    <div>Kiket vállalsz?</div>
                    <div><input type='text' onChange={this.changeKiketVallal}/></div>
                    <div>Specializáció</div>
                    <div><input type='text' onChange={this.changeSpecializacio}/></div>
                    <div>Végzettség</div>
                    <div><input type='text' onChange={this.changeVegzettseg}/></div>
                    <div>Tapasztalat</div>
                    <div><input type='text' onChange={this.changeTapasztalat}/></div>
                    <div>Telefonszám</div>
                    <div><input type='text' onChange={this.changeTelefonszam}/></div>
                    <div>Bemutatkozás</div>
                    <div><textarea onChange={this.changeBemutatkozas}/></div>
                    <div><input type='submit' value='Regisztráció' onClick={this.saveTrainer}/></div>
            </div>
        );
    }
}
  