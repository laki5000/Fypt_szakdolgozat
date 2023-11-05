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
                <div className='divcol pddnglr1 pddngt1 tac bgisr mrgnlr1 pddngbt1 divjnregstr'>
                    <div className='divrow'>
                        <div className='mrgna wdth3 divfrmdta'>
                            <div className='mrgna fntsz1 wdth2 divfrmdta_titles'>
                                Kiket vállalsz?
                            </div>
                            <div className='mrgna fntsz1 wdth2 hvr2'>
                                <select className='pddng1 wdth1 fntsz1 brdrrds' name="nem" onChange={this.changeKiketVallal}>
                                    <option value="ferfi">Férfiak</option>
                                    <option value="no">Nők</option>
                                    <option value="mindketto">Mindkettő</option>
                                </select>                            
                            </div>
                            <div className='mrgna fntsz1 wdth2 divfrmdta_titles'>
                                Specializáció
                            </div>
                            <div className='mrgna fntsz1 wdth2 hvr2'>
                                <input name='specializacio' className='pddng1 wdth1 fntsz1 brdrrds' onChange={this.changeSpecializacio}/>
                            </div>
                            <div className='mrgna fntsz1 wdth2 divfrmdta_titles'>
                                Végzettség</div>
                            <div className='mrgna fntsz1 wdth2 hvr2'>
                                <input name='vegzettseg' className='pddng1 wdth1 fntsz1 brdrrds' onChange={this.changeVegzettseg}/>
                            </div>
                            <div className='mrgna fntsz1 wdth2 divfrmdta_titles'>
                                Tapasztalat</div>
                            <div className='mrgna fntsz1 wdth2 hvr2'>
                                <input name='tapasztalat' className='pddng1 wdth1 fntsz1 brdrrds' onChange={this.changeTapasztalat}/>
                            </div>
                        </div>
                        <div className='mrgna wdth3 divfrmdta'>
                            <div className='mrgna fntsz1 wdth2 divfrmdta_titles'>
                                Telefonszám</div>
                            <div className='mrgna fntsz1 wdth2 hvr2'>
                                <input type='number' className='pddng1 wdth1 fntsz1 brdrrds' name='telefonszam' onChange={this.changeTelefonszam}/>
                            </div>
                            <div className='mrgna fntsz1 wdth2 divfrmdta_titles'>
                                Bemutatkozás
                            </div>
                            <div className='mrgna fntsz1 wdth2 hvr2'>
                                <textarea className='pddng1 wdth1 fntsz1 brdrrds textarea1' onChange={this.changeBemutatkozas}/>
                            </div>
                            <div className='divrow divlft'>
                                Minden mező kitöltése kötelező!
                            </div>
                        </div>
                    </div>
                    <div className='divregbtnprnt'>
                        <div className='divrow jcc mrgna wdth2 hvr2 divsubmit'>
                            <input type='submit' value='Regisztráció' className='bgclr1 crsrp fntsz1 brdrrds sbmtbtn' onClick={this.saveTrainer}/>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default withRouter(JoinForm);