import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    marginTop: 40,
    backgroundColor: "#4682B4",
    width:320,
    height:180,
    borderRadius:10,
    
  },
  gradient:{
    flex:1
  },
  bander:{
    objectFit:'contain', 
    width:50,
    height:50,
    position:'absolute',
    right:0,
    marginTop:10
  },

  content:{
    marginStart:10,
    marginEnd:10
  },
  number:{
    fontSize:20,
    color:'white',
    marginStart:10,
    
  },
  name:{
    fontSize:16,
    color:'white',
    marginStart:10,
    marginTop:10
  },
  valid:{
    fontSize:16,
    color:'white',
    marginStart:10,
   
  },
  codeBar:{
  width:'100%'  ,
  height:50,
  backgroundColor:'black',
  marginTop:25,
 
  },
  cvc:{
    backgroundColor:'white',
    height:30,
    width:50,
    position:'absolute',
    right:40,
    top:30,
    alignItems:'center',
    justifyContent:'center'
  }
});

export { styles };
