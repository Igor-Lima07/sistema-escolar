import { Drawer } from "expo-router/drawer";
import Estilos from "../assets/styles/EstilosDaoraDms";
export default function RootLayout() {
  return (
    <Drawer>

      <Drawer.Screen
        name="pages/pagePrincipal"
        options={{ title: 'Principal' }} />
      <Drawer.Screen
        name="pages/pageBoletim"
        options={{ title: 'Boletim' }} />
      <Drawer.Screen
        name="pages/pageNoticias"
        options={{ title: 'Noticias' }} />
      <Drawer.Screen
        name="pages/pageCalendario"
        options={{ title: 'Calendario' }} />
      <Drawer.Screen
        name="pages/pageContato"
        options={{ title: 'Contato' }} />
      <Drawer.Screen
        name="index"
        options={{ title: 'Logout' }} />
    </Drawer>
  );
}