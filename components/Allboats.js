import React from 'react';
import {ScrollView,Text, StyleSheet} from 'react-native';
import Boats from './Boats';


const AllBoats = () => {
    return (
        <ScrollView>


            <Boats
                name="SEA RAY 500 SUNDANCER"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                icon_name="sailboat"
                poster={require("../img/sea_ray.jpg")}/>

          <Boats
            name="Four Winns Horizon 180"
            description="A sporty look and refined details truly set the Horizon 180 above all others."
            icon_name="sailboat"
            poster={require("../img/four_winns.jpg")}/>

          <Boats
            name="Princess V48"
            description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
            icon_name="sailboat"
            poster={require("../img/princess.jpg")}/>

          <Boats
            name="Bayliner 175 Bowrider"
            description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
            icon_name="sailboat"
            poster={require("../img/bayliner.jpg")}/>

          <Boats
            name="Fairline Targa 47"
            description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
            icon_name="sailboat"
            poster={require("../img/fairline.jpg")}/>

        </ScrollView>
    );
};

// <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
//     <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black', marginRight: 10 }}>MOVIE QUIZ</Text>
//     <Icon name='arrows-to-dot' size={30} color="#909090" />
// </View>


export default AllBoats;
