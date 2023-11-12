export class MatrizDeAdyacencia {
	private matriz: number[][];
	private numeroDeNodos: number;

	constructor(numNodos: number) {
			this.numeroDeNodos = numNodos;
			this.matriz = new Array(numNodos);
			for (let i = 0; i < numNodos; i++) {
					this.matriz[i] = new Array(numNodos).fill(0);
			}
	}

	public AgregarArista(nodoInicio: number, nodoDestino: number): void {
			this.matriz[nodoInicio][nodoDestino] = 1;
	}

	public MostrarNodos(): void {
			console.log(`NODOS: ${Array.from(Array(this.numeroDeNodos).keys())}`);
			console.log('================')
	}

	public MostrarAristas(): void {
			console.log("ARISTAS:");
			for (let i = 0; i < this.numeroDeNodos; i++) {
					for (let j = 0; j < this.numeroDeNodos; j++) {
							if (this.matriz[i][j] === 1) {
									console.log(`Nodo ${i} - Nodo ${j}`);
							}
					}
			}
	}
}
