import { Component } from 'react';
import UserService from '../services/userService';

export default class ProfileForm extends Component{
    constructor(props){
        super(props)
  
        this.state = {
          vezetek_nev: '',
          kereszt_nev: '',
          nem: '',
          szul_hely: '',
          szul_ido: '',
          iranyitoszam: '',
          lakhely_varos: '',
          email: '',
          jelszo: '',
          id: ''
        }

        this.changeVezetekNevHandler = this.changeVezetekNevHandler.bind(this);
        this.changeKeresztNevHandler = this.changeKeresztNevHandler.bind(this);
        this.changeNemHandler = this.changeNemHandler.bind(this);
        this.changeSzulHelyHandler = this.changeSzulHelyHandler.bind(this);
        this.changeSzulidoHandler = this.changeSzulidoHandler.bind(this);
        this.changeIranyitoszamHandler = this.changeIranyitoszamHandler.bind(this);
        this.changeLakhelyVarosHandler = this.changeLakhelyVarosHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeJelszoHandler = this.changeJelszoHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    changeVezetekNevHandler= (event) => {
        this.setState({vezetek_nev: event.target.value});
      }
  
      changeKeresztNevHandler= (event) => {
        this.setState({kereszt_nev: event.target.value});
      }
  
      changeNemHandler= (event) => {
        this.setState({nem: event.target.value});
      }
  
      changeSzulHelyHandler= (event) => {
        this.setState({szul_hely: event.target.value});
      }
  
      changeSzulidoHandler= (event) => {
        this.setState({szul_ido: event.target.value});
      }
  
      changeIranyitoszamHandler= (event) => {
        this.setState({iranyitoszam: event.target.value});
      }
  
      changeLakhelyVarosHandler= (event) => {
        this.setState({lakhely_varos: event.target.value});
      }
  
      changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
      }
  
      changeJelszoHandler= (event) => {
        this.setState({jelszo: event.target.value});
      }

      saveUser= () => {
        let user = {vezetekNev: this.state.vezetek_nev, keresztNev: this.state.kereszt_nev, nem: this.state.nem, szulHely: this.state.szul_hely, szulIdo: this.state.szul_ido, iranyitoSzam: this.state.iranyitoszam, lakhelyVaros: this.state.lakhely_varos, eMail: this.state.email, jelszo: this.state.jelszo, id: this.state.id}
        UserService.saveUser(user);
        alert('Az adataidat sikeresen megváltoztattad!');
      }

      componentDidMount(){
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        if(token && id){
            if(UserService.authUser(token)){
                UserService.getUserdata(id).then(res => {
                    this.setState({vezetek_nev: res.data.vezetekNev})
                    this.setState({kereszt_nev: res.data.keresztNev})
                    this.setState({nem: res.data.nem})
                    this.setState({szul_hely: res.data.szulHely})
                    this.setState({szul_ido: res.data.szulIdo})
                    this.setState({iranyitoszam: res.data.iranyitoSzam})
                    this.setState({lakhely_varos: res.data.lakhelyVaros})
                    this.setState({email: res.data.eMail})
                    this.setState({jelszo: res.data.jelszo})
                    this.setState({id: localStorage.getItem('id')})
                })
            }
        }
    }

    render(){
        return(
        <div>
          <div>PROFIL</div>
          <div>VEZETÉKNÉV</div>
          <div><input name='vezetek_nev' value={this.state.vezetek_nev || ''} onChange={this.changeVezetekNevHandler}/></div>
          <div>módosít</div>
          <div>KERESZTNÉV</div>
          <div><input name='kereszt_nev' value={this.state.kereszt_nev || ''} onChange={this.changeKeresztNevHandler}/></div>
          <div>módosít</div>
          <div>NEM</div>
          <div><input name='nem' value={this.state.nem || ''} onChange={this.changeNemHandler}/></div>
          <div>módosít</div>
          <div>SZÜLETÉSI HELY</div>
          <div><input name='szul_hely' value={this.state.szul_hely || ''} onChange={this.changeSzulHelyHandler}/></div>
          <div>módosít</div>
          <div>SZÜLETÉSI IDŐ</div>
          <div><input name='szul_ido' value={this.state.szul_ido || ''} onChange={this.changeSzulidoHandler}/></div>
          <div>módosít</div>
          <div>IRÁNYÍTÓSZÁM</div>
          <div><input name='iranyitoszam' value={this.state.iranyitoszam || ''} onChange={this.changeIranyitoszamHandler}/></div>
          <div>módosít</div>
          <div>VÁROS</div>
          <div><input name='lakhely_varos' value={this.state.lakhely_varos || ''} onChange={this.changeLakhelyVarosHandler}/></div>
          <div>módosít</div>
          <div>E-MAIL</div>
          <div><input name='email' value={this.state.email || ''} onChange={this.changeEmailHandler}/></div>
          <div>módosít</div>
          <div>JELSZÓ</div>
          <div><input type='password' name='jelszo' value={this.state.jelszo || ''} onChange={this.changeJelszoHandler}/></div>
          <div>módosít</div>
          <div><input type='submit' value='Mentés' onClick={this.saveUser}/></div>
        </div>
        )
    }
}