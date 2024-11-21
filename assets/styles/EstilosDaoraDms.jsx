import { StyleSheet } from "react-native";

/*Estiliza todas as paginas, a paleta de cor utilizada é chamada de "Hollow"*/

export default StyleSheet.create({
  SafeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#565a75",
  },

  Display: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f0f1b",
    margin: 30,
    padding: 30,
    borderRadius: 10,
    textAlign: "center",
  },

  Inputos: {
    width: 200,
    height: 50, 
    borderRadius: 10, 
    marginTop: 10, 
    paddingLeft: 10, 
    backgroundColor: "#ffff" 
  },

  BotaosInicio: {
    backgroundColor: "#0f0f1b",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    color: "white",
    textAlign: "center",
  },

  NavBar: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#c6b7be",
    alignItems: "center",
    position: 'absolute',
    bottom: 0,
    left: 0, 
    right: 0,
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  
  Icones: {
    width: 30, 
    height: 30, 
    marginLeft: 5, 
    marginBottom: 0, 
    position: 'relative',
  },
  

  Aluno: {
    width: 100,
    height: 100,
    marginTop: -100,
    borderRadius: 15,
  },

  Icones: {
    display: "flex",
    alignContent: "space-between",
    width: 50,
    height: 50,
  },

  Informacoes: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    backgroundColor: "#fafbf6",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    fontWeight: "bolder",
    borderWidth: 1,
    borderColor: "#000",
    borderRightWidth: 5,
    borderBottomWidth: 5,
  },

  Calendario: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    backgroundColor: "#fafbf6",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    fontWeight: "bolder",
    borderWidth: 1,
    borderColor: "#000",
    borderRightWidth: 5,
    borderBottomWidth: 5,
  },

  IconeGrande: {
    width: 150,
    height: 150,
    alignItems: "center",
    marginTop: -100,
  },

  NoticiaInfo: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#fafbf6",
    margin: 10,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRightWidth: 5,
    borderBottomWidth: 5,
  },

  ContatoInfo: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    backgroundColor: "#fafbf6",
    margin: 10,
    padding: 20,
    borderRadius: 10,
    textAlign: "center",
    width: 290,
    borderWidth: 1,
    borderColor: "#000",
    borderRightWidth: 5,
    borderBottomWidth: 5,
  },

  DisplayNotas: {
    flexDirection: 'column',
    padding: 10,
  },

  ContainerNotas: {
    padding: 15,
    paddingRight: 70,
    margin: 10,
    backgroundColor: '#fafbf6',
    borderWidth: 1,
    borderColor: '#000',
    borderRightWidth: 5,
    borderBottomWidth: 5,
  },

  InfoNotas: {
    fontSize: 14,
    lineHeight: 21,
  },

  TituloDisciplina: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  ContainerEventos: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    backgroundColor: "#fafbf6",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRightWidth: 5,
    borderBottomWidth: 5,
  },

  TituloEventos: {
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 10,
  },

  NomeEvento: {
    fontWeight: 'bolder',
    lineHeight: 25,
  },
});
