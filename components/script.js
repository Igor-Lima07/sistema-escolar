import React from "react";
import { View, Text } from "react-native";

    function Tabela() {
        return(
            <div style={Estilos.Calendario}>
            <h1>Calendário Escolar 2024</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Mês</th>
                            <th>Datas Importantes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Janeiro</td>
                            <td>Início das Aulas: 15</td>
                        </tr>
                        <tr>
                            <td>Fevereiro</td>
                            <td>Feriado de Carnaval: 12-13</td>
                        </tr>
                        <tr>
                            <td>Março</td>
                            <td>Reunião de Pais: 10</td>
                        </tr>
                        <tr>
                            <td>Abril</td>
                            <td>Feriado de Páscoa: 29</td>
                        </tr>
                        <tr>
                            <td>Maio</td>
                            <td>Dia das Mães: 12</td>
                        </tr>
                        <tr>
                            <td>Junho</td>
                            < td>Festa Junina: 24</td>
                        </tr>
                        <tr>
                            <td>Julho</td>
                            <td>Férias: 1-30</td>
                        </tr>
                        <tr>
                            <td>Agosto</td>
                            <td>Volta às Aulas: 1</td>
                        </tr>
                        <tr>
                            <td>Setembro</td>
                            <td>Feriado da Independência: 7</td>
                        </tr>
                        <tr>
                            <td>Outubro</td>
                            <td>Día das Crianças: 12</td>
                        </tr>
                        <tr>
                            <td>Novembro</td>
                            <td>Feriado da Proclamação: 15</td>
                        </tr>
                        <tr>
                            <td>Dezembro</td>
                            <td>Reunião Final: 20</td>
                        </tr>
                    </tbody>
                </table>
        </div>
        );
    }
    export default Tabela;