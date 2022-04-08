import { StyleSheet } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: 200
    },
    form:{
        padding: 10,
        borderRadius: 10,
        backgroundColor:"#8DAAE0",
        marginTop: 20,
        width: "100%",
        height:"100%"    
    },
    titulo: {
        marginTop: 20,
       fontSize: 23,
       textAlign: "center",
       color: "green"
  
    },
    input:{
        backgroundColor: "#999",
        borderRadius: 9,
        height: 40,
        marginBottom:"10%",
        marginLeft:"4%",
        marginRight:"4%"
        
    },
    label:{
        fontSize: 25,
        lineHeight: 50,
        marginLeft:"4%",
        marginRight:"4%"
     
        
    },
    botao:{
        marginTop: 10,
        backgroundColor: "black",
        borderRadius: 9,
        height: 40,
        marginLeft:"10%",
        marginRight:"10%"
    },
    botaoTexto:{
      marginTop:6,
      marginLeft:"35%",
      fontSize: 20

    },
 

 
})