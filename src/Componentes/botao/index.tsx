import React from "react";
import style from './botao.module.scss';

class Botao extends React.Component<{ type?:"button" | "submit" | "reset" | undefined ,onClick?: ()=> void,texto:string}>{
    render(){
    const {type = "button", onClick}=this.props;
        return(
            <button onClick={onClick} type={type} className={style.botao}>
                {this.props.texto}
            </button>
        )

    }
        
    
}

export default Botao