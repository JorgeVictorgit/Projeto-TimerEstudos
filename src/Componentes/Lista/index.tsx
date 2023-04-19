import React from "react";
import { Itarefa } from "../../types/Itarefas";
import Item from "./item";
import style from'./Lista.module.scss';

interface props{
    tarefas:Itarefa[],
    seleciona:(tarefaselecionada:Itarefa)=>void
}


function Lista({tarefas, seleciona}:props){
   
    return(
        <aside className={style.listaTarefa}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((intem)=>(
                    <Item
                        seleciona={seleciona}
                        key={intem.id}
                        {...intem}
                    />

                ))}
            </ul>
        </aside>

    )

}
export default Lista;