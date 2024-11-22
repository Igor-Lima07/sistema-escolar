import { Text, View, SafeAreaView, ScrollView, Image } from "react-native";
import { Link } from "expo-router";
import Estilos from "../../assets/styles/EstilosDaoraDms";

/* Pagina ondes os alunos podem checar suas notas*/

export default function pagePrincipal() {
  return (
    <ScrollView>
      <SafeAreaView style={Estilos.SafeArea}>

        <View style={Estilos.DisplayNotas}>
          
          <View style={Estilos.ContainerNotas}>
            <View style={Estilos.InfoNotas}>
              <Text style={Estilos.TituloDisciplina}>Anatomia e Fisiologia</Text>
              <Text>1º Bim: MB  2º Bim: -</Text>
              <Text>Final: -    Conselho: -</Text>
              <Text>Recon.: -   Reclam.: -</Text>
              <Text>Aulas: 55   Faltas: 0  Freq %: 100</Text>
              <Text>Situação: CURSANDO</Text>
            </View>
          </View>

          <View style={Estilos.ContainerNotas}>
            <View style={Estilos.InfoNotas}>
              <Text style={Estilos.TituloDisciplina}>Farmacologia</Text>
              <Text>1º Bim: B  2º Bim: -</Text>
              <Text>Final: -    Conselho: -</Text>
              <Text>Recon.: -   Reclam.: -</Text>
              <Text>Aulas: 55   Faltas: 0  Freq %: 100</Text>
              <Text>Situação: CURSANDO</Text>
            </View>
          </View>

          <View style={Estilos.ContainerNotas}>
            <View style={Estilos.InfoNotas}>
              <Text style={Estilos.TituloDisciplina}>Microbiologia e Parasitologia</Text>
              <Text>1º Bim: B  2º Bim: -</Text>
              <Text>Final: -    Conselho: -</Text>
              <Text>Recon.: -   Reclam.: -</Text>
              <Text>Aulas: 55   Faltas: 0  Freq %: 100</Text>
              <Text>Situação: CURSANDO</Text>
            </View>
          </View>

          <View style={Estilos.ContainerNotas}>
            <View style={Estilos.InfoNotas}>
              <Text style={Estilos.TituloDisciplina}>Enfermagem em Clínica Médica</Text>
              <Text>1º Bim: B  2º Bim: -</Text>
              <Text>Final: -    Conselho: -</Text>
              <Text>Recon.: -   Reclam.: -</Text>
              <Text>Aulas: 55   Faltas: 0  Freq %: 100</Text>
              <Text>Situação: CURSANDO</Text>
            </View>
          </View>

          <View style={Estilos.ContainerNotas}>
            <View style={Estilos.InfoNotas}>
              <Text style={Estilos.TituloDisciplina}>Semiologia e Semiotécnica</Text>
              <Text>1º Bim: B  2º Bim: -</Text>
              <Text>Final: -    Conselho: -</Text>
              <Text>Recon.: -   Reclam.: -</Text>
              <Text>Aulas: 55   Faltas: 0  Freq %: 100</Text>
              <Text>Situação: CURSANDO</Text>
            </View>
          </View>

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

      <View style={{marginBottom: 100}}></View>

      </SafeAreaView>
    </ScrollView>
  );
}
