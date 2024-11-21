import { Text, View, SafeAreaView, Image } from "react-native";
import { Link } from "expo-router";
import Estilos from "../../assets/styles/EstilosDaoraDms";

export default function pagePrincipal() {
  return (
    <SafeAreaView style={Estilos.SafeArea}>
      <Image style={Estilos.Aluno} source={require('../../assets/images/AlunoMedioDaEtec.png')} />

      <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "500" }}>
        Henrique Targino Alves
      </Text>

      <View style={Estilos.Informacoes}>
        <Text style={{ fontSize: 16 }}>
          <Text style={{ fontWeight: "bold" }}>Habilitação:</Text> Técnico Em Enfermagem{"\n"}
          <Text style={{ fontWeight: "bold" }}>RM:</Text> 12345{"\n"}
          <Text style={{ fontWeight: "bold" }}>Semestre OC:</Text> 24º Semestre <Text style={{ fontWeight: "bold" }}>Ano OC:</Text> 1984{"\n"}
          <Text style={{ fontWeight: "bold" }}>Módulo/Série Atual:</Text> 104º Módulo{"\n"}
          <Text style={{ fontWeight: "bold" }}>Turma:</Text> Turma Z{"\n"}
          <Text style={{ fontWeight: "bold" }}>Grupo de Componente:</Text> Grupo Z{"\n"}
          <Text style={{ fontWeight: "bold" }}>Situação da Matrícula:</Text> Cursando{"\n"}
          <Text style={{ fontWeight: "bold" }}>Data da Situação:</Text> 2000 AC
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
