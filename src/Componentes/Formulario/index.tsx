import { time } from "console"
import React from "react";
import { Itarefa } from "../../types/Itarefas";
import Botao from "../botao";
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

class Formulario extends React.Component<{ settarefas: React.Dispatch<React.SetStateAction<Itarefa[]>> }>{
    state = {
        tarefa: "",
        tempo: "00:00"

    }
    adcionar(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.settarefas(tarefasantigas => 
            [
                ...tarefasantigas, 
                { 
                    ...this.state,
                    selecionado:false,
                    terminado:false,
                    id:uuidv4()
                }
            ]
        );
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })

    }
    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.adcionar.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input
                        type="text"
                        name="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })}
                        id="tarefa"
                        placeholder="O que voce deseja estudar ?"
                        required
                    />

                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        value={this.state.tempo}
                        onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
                        id="tempo"
                        min="00:00:00"
                        max="10:30:00"
                        required

                    />

                </div>
                <Botao
                    type="submit"
                    texto="Adicionar"
                />
            </form>
        )
    }



}
export default Formulario