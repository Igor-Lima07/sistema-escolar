import { Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import Estilos from "../../assets/styles/EstilosDaoraDms";

export default function pageCalendario() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={Estilos.SafeArea}>

        <View style={Estilos.Calendario}>
          <Text style={{ fontSize: 24, fontWeight: "bolder", textAlign: "center", marginBottom: "20px" }}>
            Calendário Escolar 2024
          </Text>
            <Text style={Estilos.NomeEvento}>
            <Text style={{ fontWeight: 'bold' }}>Fevereiro:</Text> 25/02 Início das Aulas{"\n"}
          </Text>
          <Text style={Estilos.NomeEvento}>
            <Text style={{ fontWeight: 'bold' }}>Março:</Text> 29/03 Sexta-Feira Santa{"\n"}
          </Text>
          <Text style={Estilos.NomeEvento}>
            <Text style={{ fontWeight: 'bold' }}>Abril:</Text> 22/04 Páscoa{"\n"}
          </Text>
          <Text style={Estilos.NomeEvento}>
            <Text style={{ fontWeight: 'bold' }}>Maio:</Text> 01/05 Dia do Trabalho{"\n"}
          </Text>
          <Text style={Estilos.NomeEvento}>
            <Text style={{ fontWeight: 'bold' }}>Junho:</Text> 24/06 Dia de São João{"\n"}
          </Text>
          <Text style={Estilos.NomeEvento}>
            <Text style={{ fontWeight: 'bold' }}>Julho:</Text> 1 a 31 Férias Escolares{"\n"}
          </Text>
          <Text style={Estilos.NomeEvento}>
            <Text style={{ fontWeight: 'bold' }}>Agosto:</Text> 19/08 Volta ás Aulas{"\n"}
          </Text>
          <Text style={Estilos.NomeEvento}>
            <Text style={{ fontWeight: 'bold' }}>Setembro:</Text> 07/09 Dia da Independência{"\n"}
          </Text>
          <Text style={Estilos.NomeEvento}>
            <Text style={{ fontWeight: 'bold' }}>Outubro:</Text> 12/10 Dia das Crianças{"\n"}
          </Text>
          <Text style={Estilos.NomeEvento}>
            <Text style={{ fontWeight: 'bold' }}>Novembro:</Text> 02/11 Finados{"\n"}
          </Text>
          <Text style={Estilos.NomeEvento}>
            <Text style={{ fontWeight: 'bold' }}>Dezembro:</Text> 18/12 Fim das Aulas {"\n"}
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
