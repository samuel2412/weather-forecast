import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: 14,
    },
    pos: {
        textTransform: 'capitalize',
        marginBottom: 12,
        marginTop: 12,
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: 'auto'
    },
    tempGroup: {
        display: 'flex',
        flexDirection: 'row',
    },
    temp: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
    },
    infos: {
        margin: 'auto',
        width: '200px',
        textAlign: 'center'
    },

}));
const Weather = props => {
    const classes = useStyles();
    const weather = props.weatherData.weather[0];
    const date = new Date(props.weatherData.dt * 1000);
    const daysOfWeek = [
        'Domingo', 'Segunda-feira', 'Terça-feira',
        'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
    ];

    const months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Novembro', 'Outubro', 'Setembro', 'Dezembro'
    ];


    const dateString = (date) => {
        return ` ${daysOfWeek[date.getDay()]}, ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
    };

    const getHoursMins = (date) => {
        return `${date.getHours()}:${date.getMinutes()}`
    }

    return (
        <>
            <Typography className={classes.title} color="textPrimary" gutterBottom>
                {props.weatherData.name}, {props.weatherData.sys.country}
                <Typography variant="caption" display="block" gutterBottom>
                    {dateString(date)}
                </Typography>
            </Typography>
            <Avatar alt={weather.description} src={`https://openweathermap.org/img/wn/${weather.icon}.png`} className={classes.large} />

            <br />
            <div className={classes.tempGroup}>

                <div className={classes.temp}>
                    <Typography variant="caption">
                        Mínima
                    </Typography>
                    <Typography variant="h6" component="span">
                        {`${Math.round(props.weatherData.main.temp_min)}°C`}
                    </Typography>
                </div>

                <div className={classes.temp}>
                    <Typography variant="caption">
                        Atual
                    </Typography>
                    <Typography variant="h5" component="span" style={{ fontWeight: 'bold' }}>
                        {`${Math.round(props.weatherData.main.temp)}°C`}
                    </Typography>
                </div>
                <div className={classes.temp}>
                    <Typography variant="caption">
                        Máxima
                    </Typography>
                    <Typography variant="h6" component="span">
                        {`${Math.round(props.weatherData.main.temp_max)}°C`}
                    </Typography>
                </div>

            </div>

            <Typography className={classes.pos} color="textSecondary">
                {weather.description}
            </Typography>

            <br />
            <Divider variant="middle" />
            <br />


            <Typography variant="body2" component="p">
                {`Umidade ${props.weatherData.main.humidity}%`}
            </Typography>
            <Typography variant="body2" component="p">
                {`Nascer do Sol ${getHoursMins(new Date(props.weatherData.sys.sunrise * 1000))}`}
            </Typography>
            <Typography variant="body2" component="p">
                {`Pôr do Sol ${getHoursMins(new Date(props.weatherData.sys.sunset * 1000))}`}
            </Typography>

            <br />
            <Divider variant="middle" />


            
                <IconButton
                style={{display:'flex'}}
                    color="primary"
                    onClick={event => { props.backHandler(event) }}>
                    <ArrowBackIcon />
                </IconButton>
            
        </>
    );
}
export default Weather;