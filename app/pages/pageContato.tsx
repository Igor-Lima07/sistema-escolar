import { Text, View, SafeAreaView, Image } from "react-native";
import { Link } from "expo-router";
import Estilos from "../../assets/styles/EstilosDaoraDms";

export default function pagePrincipal() {
  return (
    <SafeAreaView style={Estilos.SafeArea}>
      <Image style={Estilos.IconeGrande} source={require('../../assets/images/contacticon2.png')} />
      <View style={Estilos.ContatoInfo}>
        <Text style={{ textAlign: "left", alignContent: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Nome da Escola:</Text> Colégio Estrela do Amanhã{"\n"}
          <Text style={{ fontWeight: "bold" }}>Endereço:</Text> Rua das Flores, 123, Jardim Esperança, São Paulo - SP{"\n"}
          <Text style={{ fontWeight: "bold" }}>Telefone:</Text> (11) 98765-4321{"\n"}
          <Text style={{ fontWeight: "bold" }}>E-mail:</Text> contato@estrelaamanha.edu.br{"\n"}
          <Text style={{ fontWeight: "bold" }}>Site:</Text> www.estrelaamanha.edu.br{"\n"}
          <Text style={{ fontWeight: "bold" }}>Diretor:</Text> Prof. Carlos Silva
        </Text>
      </View>

      <View style={Estilos.NavBar}>
        <Link href="pages/pageCalendario">
          <Image style={Estilos.Icones} source={require('../../assets/images/calendaricon.png')} />
        </Link>

        <Link href="pages/pageNoticias">
          <Image style={Estilos.Icones} source={require('../../assets/images/news icon.png')} />
        </Link>

        <Link href="pages/pagePrincipal">
          <Image style={Estilos.Icones} source={require('../../assets/images/homeicon.png')} />
        </Link>

        <Link href="pages/pageContato">
          <Image style={Estilos.Icones} source={require('../../assets/images/contacticon.png')} />
        </Link>

        <Link href="pages/pageBoletim">
          <Image style={Estilos.Icones} source={require('../../assets/images/boletimicon.png')} />
        </Link>
      </View>

    </SafeAreaView>
  );
}
