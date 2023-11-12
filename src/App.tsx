import React from "react";
import { MatrizDeAdyacencia } from "./utils/MatrizDeAdyacencia";

function App() {
	const matrizDeAdyacencia = new MatrizDeAdyacencia(5);

	matrizDeAdyacencia.AgregarArista(0, 1);
	matrizDeAdyacencia.AgregarArista(0, 2);
	matrizDeAdyacencia.AgregarArista(1, 3);
	matrizDeAdyacencia.AgregarArista(2, 4);
	matrizDeAdyacencia.AgregarArista(3, 4);

	matrizDeAdyacencia.MostrarNodos();
	matrizDeAdyacencia.MostrarAristas();
  return (
    <div>
			<h1>Parcial grafos matriz de adyacencia</h1>
      <h2>El resultado se muestra en la consola del navegador!</h2>
    </div>
  );
}

export default App;
