export function Tempo(tempo:string){
    const[horas='0',minutos='0',segundos='0']=tempo.split(':')

    const horasemseg = Number(horas)*3600;
    const minutosemseg = Number(minutos)*60;
    return horasemseg + minutosemseg + Number(segundos);
}