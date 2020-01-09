import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
        marginTop: 12,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        borderStyle: 'solid',
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

    const getDescriptionPT = (descriptionEN) => {
        switch (descriptionEN) {
            case ('clear sky'): return 'Céu Limpo';
            case ('few clouds'): return 'Poucas Nuvens';
            case ('scattered clouds'): return 'Parcialmente Nublado';
            case ('broken clouds'): return 'Nublado';
            case ('shower rain'): return 'Pancadas de Chuva';
            case ('rain'): return 'Chuva';
            case ('thunderstorm'): return 'Tempestade';
            case ('snow'): return 'Neve';
            case ('mist'): return 'Neblina';
            default: return descriptionEN;
        }
    };

    
    return (
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    {props.weatherData.name}, {props.weatherData.sys.country}
                    <Typography variant="caption" display="block" gutterBottom>
                        {dateString(date)}
                    </Typography>
                </Typography>
                <Avatar alt={weather.description} src={`http://openweathermap.org/img/wn/${weather.icon}.png`} className={classes.large} />

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
                        <br />
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
                    {getDescriptionPT(weather.description)}
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

            </CardContent>
            <CardActions>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={event=>{props.backHandler(event)}}>
                    Voltar
                </Button>
            </CardActions>
        </Card>
    );
}
export default Weather;