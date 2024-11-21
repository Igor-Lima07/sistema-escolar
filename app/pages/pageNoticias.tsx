import { Text, View, SafeAreaView, Image } from "react-native";
import { Link } from "expo-router";
import Estilos from "../../assets/styles/EstilosDaoraDms";

export default function pagePrincipal() {
  return (
    <SafeAreaView style={Estilos.SafeArea}>
      <Image style={Estilos.IconeGrande} source={require('../../assets/images/newsicon2.png')} />
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
        AVISO DE EXTREMA IMPORTÂNCIA!!
      </Text>
      <View style={Estilos.NoticiaInfo}>
        <Text style={{ fontSize: 16 }}>
          A partir do dia 24/04/2543 será obrigatório o uso de uniforme dentro da área da escola. Caso o aluno não possua um, é extremamente recomendado que busque adquirir a vestimenta o mais rápido possível. Caso o aluno não esteja uniformizado enquanto estiver na escola, ele será convidado a se retirar.
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
