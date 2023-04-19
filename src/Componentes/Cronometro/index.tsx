import Botao from "../botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { Itarefa } from "../../types/Itarefas";
import { useEffect, useState } from "react";
import { Tempo } from "../common/utils/time";

interface props{
    seleciona:Itarefa | undefined
    finalizar:()=>void

}

export default function Cronometro({seleciona,finalizar}:props){
    const [tempo,settempo]=useState<number>()
    useEffect(() => {
        if(seleciona?.tempo){
            settempo(Tempo(seleciona.tempo))
        }

    },[seleciona])
function regressiva(contagem:number=0){
    setTimeout(()=>{
        if(contagem>0){
            const total = contagem -1
            settempo(total)
            return regressiva(total)
        }
        finalizar();

    },1000)
    

}

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}></Relogio>

            </div>
            <Botao onClick={()=>regressiva(tempo)} texto="Começar"></Botao>
        </div>
    )
}