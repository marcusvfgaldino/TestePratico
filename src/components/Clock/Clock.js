import React, { useEffect, useState } from "react";

const date = new Date();

const semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
const mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro"];

const Clock = () => {
       
    const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        day: date.getDay(),
        diaSemana: semana[date.getDay()],
        month:  mes[date.getMonth()],
        year: date.getFullYear()
    });
    
    useEffect(() => {
        const timer = setInterval(() => {
          const date = new Date();
          setDateTime({
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
            day: date.getDay(),
            diaSemana: semana[date.getDay()],
            month: mes[date.getMonth()],
            year: date.getFullYear()
          });
        }, 1000);
        return () => clearInterval(timer);
      }, []);

    return (
    
        <div>
           {dateTime.diaSemana}, {dateTime.day < 10 ? 0 : ''}{dateTime.day} de {dateTime.month} de {dateTime.year}. {dateTime.hours < 10 ? 0 : ''}{dateTime.hours}:{dateTime.minutes < 10 ? 0 : ''}{dateTime.minutes}:{dateTime.seconds < 10 ? 0 : ''}{dateTime.seconds}
        </div>

    )
}

export default Clock