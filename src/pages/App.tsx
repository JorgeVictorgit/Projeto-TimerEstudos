import React, {useState}from 'react';
import Cronometro from '../Componentes/Cronometro';

import Formulario from '../Componentes/Formulario';
import Lista from '../Componentes/Lista';
import { Itarefa } from '../types/Itarefas';
import style from './App.module.scss';



function App() {
  const [tarefas, settarefas] = useState<Itarefa[]>([])
  const [selecionado,setselecionado]= useState<Itarefa>()
  
  function selecionartarefa(tarefaselect:Itarefa){
    setselecionado(tarefaselect)
    settarefas(tarefasanteriores=>tarefasanteriores.map(tarefa=>({...tarefa,selecionado:tarefa.id === tarefaselect.id ? true:false})))

  }
  function finalizartarefa(){
    if(selecionado){
      setselecionado(undefined);
      settarefas(tarefasanteriores=>tarefasanteriores.map(tarefa=>{
        if(tarefa.id===selecionado.id){
          return{...tarefa,selecionado:false,terminado:true}
        }
        return tarefa;
      }))
    }
  }
  
  return (
    <div className={style.AppStyle}>
      <Formulario settarefas={settarefas}/>
      <Lista tarefas ={tarefas} seleciona={selecionartarefa}/>
      <Cronometro 
        seleciona={selecionado}
        finalizar={finalizartarefa}
      />

    </div>
  );
}

export default App;
