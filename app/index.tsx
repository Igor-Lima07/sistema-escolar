import { Text, View, SafeAreaView, Pressable, Image, TextInput } from "react-native";
import { Link } from "expo-router";
import Estilos from "../assets/styles/EstilosDaoraDms";

// Pagina de login do aplicativo
// Estilização é puxada de EstilosDaoraDms.jsx

export default function Index() {
  return (
    <SafeAreaView style={Estilos.SafeArea}>
      <Image style={Estilos.IconeGrande} source={require('../assets/images/trueschoolicon.png')} />

      <View style={Estilos.Display}>
        <TextInput
          style={Estilos.Inputos}
          placeholder="Código da escola: (ex: 031)"
          keyboardType="numeric"
        />
        <TextInput
          style={Estilos.Inputos}
          placeholder="Digite seu RM"
          keyboardType="numeric"
        />
        <TextInput
          style={Estilos.Inputos}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />
      </View>

      <Pressable style={Estilos.BotaosInicio}>
        <Link href="pages/pagePrincipal">
          <Text style={{ color: "white" }}>
            Entrar
          </Text>
        </Link>
      </Pressable>
    </SafeAreaView>
  );
}
