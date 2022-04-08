import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal, Alert } from "react-native";
import {Picker} from "@react-native-picker/picker";
import TakePicture from '../Camera';
import { estilos } from '../Style/index';


export default function Form() {

    const [bairro, setBairro] = useState(null);
    const [rua, setRua] = useState(null);
    const [numero, setNumero] = useState(null);
    const [descricao, setDescricao] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

  
    function validar() {
        if(bairro != null && selectedValue != "default" && rua != null && numero != null && descricao != null) {
            setIsOpen(true)
        } else {
            Alert.alert('Todos os campos devem ser preenchidos!')
        }
    }
    function confirmarEnvio() {
        setIsOpen(false)
        setBairro(null)
        setRua(null)
        setNumero(null)
        setDescricao(null)
        setSelectedValue("default")
    }


    return (
        <View>
            <View style={estilos.form}>
            <Text style={estilos.label}>Informe a Cidade: </Text>
            <Picker
            style={estilos.input}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >   
                    <Picker.Item label="" value="default" />
                    <Picker.Item label="Barra do Piraí" value="BarraPiraí" />
                    <Picker.Item label="Mendes" value="Mendes" />
                    <Picker.Item label="Miguel Pereira" value="MiguelPereira" />
                    <Picker.Item label="Paraíba do Sul" value="ParaíbaSul" />
                    <Picker.Item label="Rio das flores" value="RioFlores" />
                    <Picker.Item label="Valença" value="Valenca" />
                    <Picker.Item label="Vassouras" value="Vassouras," />
                </Picker>
                <Text style={estilos.label} >Informe o Bairro:</Text>
                <TextInput 
                style={estilos.input}
                onChangeText={setBairro} 
                value={bairro} 
                />
                <Text style={estilos.label}>Informe a Rua: </Text>
                <TextInput 
                onChangeText={setRua} 
                value={rua}
                style={estilos.input} />
                <Text style={estilos.label}>Informe o Número: </Text>
                <TextInput 
                onChangeText={setNumero} 
                keyboardType="numeric"
                value={numero}
                style={estilos.input} />
                <Text style={estilos.label}>Informe a Descrição: </Text>
                <TextInput
                onChangeText={setDescricao} 
                value={descricao}
                style={estilos.input2} />
              
                <TouchableOpacity style={estilos.botao} 
                onPress={() => validar()} >
                <Text style={estilos.botaoTexto}>
                    Notificar
                </Text>
                </TouchableOpacity>
                
            </View>
            <Modal transparent={true} visible={isOpen}>
                <TakePicture 
                    bairro={bairro}
                    rua={rua}
                    numero={numero}
                    descricao={descricao}
                    cidade={selectedValue}
                    confirmarEnvio={confirmarEnvio}
                 
                />
                  
            </Modal> 
        

        </View>
    );
}

