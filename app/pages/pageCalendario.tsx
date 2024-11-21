import { Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import Estilos from "../../assets/styles/EstilosDaoraDms";

export default function pageCalendario() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={Estilos.SafeArea}>

        <View style={Estilos.Calendario}>
          <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
            Calendário Escolar 2024
          </Text>
        </View>

        <View style={Estilos.ContainerEventos}>
          <Text style={Estilos.TituloEventos}>Eventos Importantes</Text>
          <Text style={Estilos.NomeEvento}>
            <Text style={{ fontWeight: 'bold' }}>Interclasse:</Text> 23/11 até 31/11
          </Text>
          <Text style={Estilos.NomeEvento}>
            <Text style={{ fontWeight: 'bold' }}>Formatura do 3º EM:</Text> 13/12
          </Text>
          <Text style={Estilos.NomeEvento}>
            <Text style={{ fontWeight: 'bold' }}>Fim das Aulas:</Text> 18/12
          </Text>
        </View>

        <View style={Estilos.NavBar}>

          <Link href="pages/pageCalendario">
            <Image style={Estilos.Icones} source={require('../../assets/images/calendaricon.png')}/>
          </Link>

          <Link href="pages/pageNoticias">
            <Image style={Estilos.Icones} source={require('../../assets/images/news icon.png')}/>
          </Link>

          <Link href="pages/pagePrincipal">
            <Image style={Estilos.Icones} source={require('../../assets/images/homeicon.png')}/>
          </Link>

          <Link href="pages/pageContato">
            <Image style={Estilos.Icones} source={require('../../assets/images/contacticon.png')}/>
          </Link>

          <Link href="pages/pageBoletim">
            <Image style={Estilos.Icones} source={require('../../assets/images/boletimicon.png')}/>
          </Link>

        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
