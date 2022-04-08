import { StyleSheet } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: 200
    },
    form:{
        padding: 10,
    
        backgroundColor:"#000080",
      
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
        backgroundColor: "#20B2AA",
        borderRadius: 4,
        height: 40,
        marginLeft:"10%",
        marginRight:"10%"
    },
    botaoTexto:{
      marginTop:6,
      marginLeft:"35%",
      fontSize: 20

    },
 
    input2:{
        backgroundColor: "#999",
        borderRadius: 9,
        height: 70,
        marginBottom:"10%",
        marginLeft:"4%",
        marginRight:"4%"
        
    },
 
})