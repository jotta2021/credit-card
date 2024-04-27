import {
  View,
  Text,
  SafeAreaView,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
//importação do modelo de cartão de crédito
import CreditCard from "../components/creditCard";
import { TextInputMask } from "react-native-masked-text";
import { Keyboard } from "react-native";

//icon arrow
import ArrowIcon from "react-native-vector-icons/MaterialIcons";
import Question from 'react-native-vector-icons/AntDesign'

export default function Home() {
  //controla se será mostrado a parte de trás ou frente do cartão
  const [back, setBack] = useState(false);
  const [card, setCard] = useState("");
  const [expired, setExpired] = useState("");
  const [name, setName] = useState("");
  const [cvc, setCvc] = useState("");
  const [inputAtive, setInputAtive] = useState("");

  const [onFlip, setOnFlip] = useState(false);
 


  // no momento de digitar o cvv , passa por essa função
  //para o ususario poder digitar apenas 3 numeros
  const handleChange = (text) => {
    ActiveInput('cvc')
    if (text.length <= 3) {
      
      setCvc(text);
    }

  };

  function ActiveInput(value){
    
if(value==='cvc'){
  setBack(false)
  setOnFlip(!onFlip)
}else{
  setBack(true)
  setOnFlip(!onFlip)
}
console.log(back)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ArrowIcon name="arrow-back-ios" size={24} color={"black"} />
        <Text style={styles.titleHeader}>PAYMENT DETAILS</Text>
      </View>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
            setInputAtive("");
          }}
        >
          <ScrollView>
            <View style={{ alignItems: "center" }}>
              <CreditCard
                back={back}
                setBack={setBack}
                onFlip={onFlip}
                name={name}
                credit={card}
                cvc={cvc}
                expired={expired}
              />
            </View>

            <View style={styles.contentInputs}>
              <Text style={styles.label}>Card number</Text>
              <TextInputMask
                style={styles.input}
                type="credit-card"
                options={{
                  obfuscated: false,
                  issuer: 'visa-or-mastercard',
                }}
                value={card}
                onChangeText={(text) => {setCard(text)
                ActiveInput('card')
                }}
              />
              <Text style={styles.label}>Name on card</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text) => {setName(text)
                ActiveInput('name')
                }}
                autoCapitalize='characters'
              />
            </View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginStart:30,marginEnd:30}}>
              <View>
                 <Text style={styles.label}>Expired date</Text>
              <TextInputMask
              style={styles.miniInput}
                type={"datetime"}
                options={{
                  format: "MM/YY",
                }}
                value={expired}
                onChangeText={(text) => {
                  ActiveInput('date')
                 setExpired(text)
                }}
              />
              </View>
              <View>

                <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
                    <Text style={styles.label}>Secutiry code</Text>
                    <TouchableOpacity>
                    <Question name='questioncircleo' color={'grey'} size={12}/>  
                    </TouchableOpacity>
               
                </View>
               
              <TextInput
              style={styles.miniInput}
                value={cvc}
                keyboardType="numeric"
                onChangeText={(text) => {
                 handleChange(text)
                }}
              />
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          right: 0,
          left: 0,
          top: 600,
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Próximo
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
