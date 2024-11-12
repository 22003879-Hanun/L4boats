import React from 'react';
import { Text,View, Image, ScrollView,StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create ({
    parent:{
        borderWidth:10,
        borderColor:'black',
        textAlignVertical:'center',
        marginBottom: 10,



    },
    Child:{
        borderWidth:10,
        borderColor:'red',
    },

    Title:{
        marginTop:40,
        borderWidth:10,
        borderColor: 'blue',
        textAlign:'center',
        textAlignVertical:'center',
        fontWeight:'bold',
        backgroundColor:'lightblue',
    },
    description:{
        paddingLeft:10,
        textAlignVertical:'center',
        justifyContent:'center',
        borderWidth:10,
        borderColor:'grey',
        borderHeight:10,
    }




});
const Boats = ({name ,description,icon_name ,poster })=> {
    return (
         <View>
            <Text style={styles.Title}> GetABoat - For Sale  </Text>


        <ScrollView>

          <Text>{'\n'}</Text>
          <Text style={[styles.parent,{fontWeight: 'bold', fontSize: 30,color:'black'}]}>
              <Icon name={icon_name} size={30} color="#909090" /> {name}
            </Text>
            <Image source = {poster} style={[styles.Child,{width:400,height:400}]} />
            <Text style={styles.description}>
                {description}
            </Text>
          <Text>{'\n'}</Text>


        </ScrollView>
         </View>
    );

};



export default Boats;
