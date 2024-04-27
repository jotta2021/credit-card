import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginLeft: 20,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  titleHeader: {
    fontSize: 16,
    fontWeight: "500",
  },

  content: {
    flex: 2,
    marginTop: 20,
    backgroundColor: "white",
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
  },
  button: {
    width: 350,
    height: 50,
    backgroundColor: "#2c2c2c",
    justifyContent: "center",
    borderRadius: 6,
    marginBottom: 20,

    
  },
  contentInputs: {
    marginTop: 25,
    marginLeft: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2c2c2c",
    marginTop:10
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#e6e6e6",
    fontSize: 17,
    width: 350,
    height:40
  },
  inputAtive: {
    borderWidth: 1,
    borderColor: "#2c2c2c",
    marginTop: 10,
    height: 40,
    fontSize: 16,
    width: 350,
  },
  miniInput: {
    borderBottomWidth: 1,
    borderColor: "#e6e6e6",
    marginTop: 10,
    height: 40,
    fontSize: 17,
    width: 150,
  },
  miniInputAtive: {
    borderWidth: 1,
    borderColor: "#2c2c2c",
    marginTop: 10,
    height: 40,
    fontSize: 16,
    width: 150,
  },
});

export { styles };
