import { Itarefa } from '../../../types/Itarefas';
import style from '../Lista.module.scss';

interface props extends Itarefa{
    
    seleciona:(tarefaselecionada:Itarefa)=>void
}

function Item({tarefa, tempo, selecionado, terminado, id,seleciona }:props) {
    console.log('item atula:',{tarefa, tempo, selecionado, terminado, id})
    return(
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${terminado ? style.itemCompletado : ''}`} onClick={()=> !terminado && seleciona({tarefa,tempo,selecionado,terminado,id})}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {terminado && <span className={style.concluido} aria-Label="Tarefa Completada"></span>}
        </li>
    )

}
export default Item;