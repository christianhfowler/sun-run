import React from 'react';
<<<<<<< HEAD
// import Sunrise from './Sunrise.js';f
import moment from 'moment';
=======
>>>>>>> a946f0593a18aefe8cf668fae2416e42047cc85c
import axios from 'axios';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow, DirectionsRenderer } from 'react-google-maps';
import { compose, withProps, lifecycle, withState } from 'recompose';
import moment from 'moment';


const MapWithADirectionsRenderer = compose(

    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    withState('directions', 'setDirections', null),
    lifecycle({

        componentWillReceiveProps(nextProps) {
            if (this.props.destination !== nextProps.destination) {
                const DirectionsService = new google.maps.DirectionsService();
                DirectionsService.route({
                    origin: new google.maps.LatLng(this.props.lat, this.props.lng),
                    destination: nextProps.destination,
                    travelMode: google.maps.TravelMode.WALKING,
                }, (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        this.props.setDirections(result)
                    } else {
                        console.error(`error fetching directions`, result);
                    }
                });
                // console.log(props.directions && props.directions.routes[0].legs[0].duration.text)
                // let durationOne = props.directions && props.directions.routes[0].legs[0].duration.text
                // let durationTwo = durationOne.split(" mins")
                // let durationThree = durationTwo[0]
                // console.log(durationThree)
            }
            // put time wizardry here
        },
        componentDidMount() {
            const DirectionsService = new google.maps.DirectionsService();

            DirectionsService.route({
                origin: new google.maps.LatLng(this.props.lat, this.props.lng),
                destination: this.props.destination,
                travelMode: google.maps.TravelMode.WALKING,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.props.setDirections(result)
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });
        }
    })
)(props => {
    console.log(props)
    // console.log(props.sunriseTime)
    // let time = props.sunriseTime.split('AM')
    // console.log(time)
    // let time2 = time[0]
    // console.log(time2)
    // getTimeInterval() {
    //     let end = moment(time2, "HH:mm:ss");
    //     end.subtract(this.state.runDuration, 'minutes');
    //     return end.format("H:mm")
    // }
    // console.log(props.directions && props.directions.routes[0].legs[0].duration.text)
    // let durationOne = props.directions && props.directions.routes[0].legs[0].duration.text
    // let durationTwo = durationOne.split(" mins")
    // let durationThree = durationTwo[0]
    // console.log(durationThree)
    let durationOne
    let durationTwo
    let durationThree

    if(props.directions !== null){
    console.log(props.directions && props.directions.routes[0].legs[0].duration.text)
     durationOne = props.directions && props.directions.routes[0].legs[0].duration.text
     durationTwo = durationOne.split(" mins")
        console.log(durationTwo)
     durationThree = durationTwo[0]
    console.log(durationThree)
    }

    


    return (

        <div>
            {props.sunriseTime}
            {props.directions && props.directions.routes[0].legs[0].distance.text}
            {props.directions && props.directions.routes[0].legs[0].duration.text}
<<<<<<< HEAD

            {props.getTimeInterval(props.sunriseTime, 30)}
=======
            {props.getTimeInterval(props.sunriseTime, durationThree)}


>>>>>>> a946f0593a18aefe8cf668fae2416e42047cc85c

            <GoogleMap
                defaultZoom={7}
                defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
            >
                {props.directions && <DirectionsRenderer directions={props.directions} />}
            </GoogleMap>          
        </div>
    )
}
);

export default MapWithADirectionsRenderer;