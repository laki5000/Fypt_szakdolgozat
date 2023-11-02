import { Component } from 'react';
import TrainerService from '../services/trainerService';

export default class TrainerApplications extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trainerApplications: []
        }

        this.edzoHitelesitese = this.edzoHitelesitese.bind(this);
    }

    edzoHitelesitese= (id) => {
        TrainerService.getTrainer(id).then(res => {
            let tmpTrainer = res.data;
            tmpTrainer.hiteles = true;
            TrainerService.saveTrainer(tmpTrainer).then(() => {
                this.edzoJelentkezesekBetoltese()
            });
        })
    }

    edzoJelentkezesekBetoltese(){
        TrainerService.loadTrainerApplications('0').then(res => {
            this.setState({trainerApplications: res.data});
        })
    }

    componentDidMount() {
        this.edzoJelentkezesekBetoltese();
    }

    render(){
        return(
            <div>
                <div>Edző Jelentkezések</div>
                <div>
                    {this.state.trainerApplications.map((trainer, index) => (
                        <div key={index}>
                            <p>Kiket Vállal: {trainer.kiketVallal}</p>
                            <p>Végzettség: {trainer.vegzettseg}</p>
                            <p>Specializáció: {trainer.specializacio}</p>
                            <p>Tapasztalat: {trainer.tapasztalat}</p>
                            <p>Telefonszám: {trainer.telefonszam}</p>
                            <p>Bemutatkozás: {trainer.bemutatkozas}</p>
                            <button onClick={()=> {this.edzoHitelesitese(trainer.id)}}>Hitelesítés</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}