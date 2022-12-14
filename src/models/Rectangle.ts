class Rectangle {
    largura: number; 
    altura: number;
    constructor(largura: number, altura: number) {
        this.altura = altura
        this.largura = largura
    }
       
    getArea(): number{
        return this.largura * this.altura;
    }
    isSquare(): boolean {
        return this.largura === this.altura;
    }
}

class Square extends Rectangle {
    _largura: number;
    _altura: number;
  
    constructor(largura: number, altura: number) {
      super(largura, altura);
  
      this._largura = largura;
      this._altura = altura;
    }
}

export default Rectangle