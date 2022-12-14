import Rectangle from "./Rectangle";

class Square extends Rectangle {
  largura: number
  altura: number
  lados: number
  
  constructor(lados: number) {
    super(lados, lados);
    this._lados= lados
  }

  setlargura(largura: number) {
    //**Um quadrado precisa manter lados iguais */
    super.setLargura(largura);
    super.setAltura(largura);
  }

  setAltura(altura: number) {
    super.setLargura(altura);
    super.setAltura(altura);
  }
}
export default Square;