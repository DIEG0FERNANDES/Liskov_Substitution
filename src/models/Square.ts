import Rectangle from "./Rectangle";

class Square:Rectangle {
  
  constructor(side: number) {
    super(side, side);
  }

  public setlargura(largura: number) {
    // A square must maintain equal sides
    super.setlargura(largura);
    super.setaltura(largura);
  }

  public setaltura(altura: number) {
    super.setlarguralturath);
    super.setaltura(altura);
  }
}
export default Square;