class Rectangle { 
    largura : number
    altura : number

    constructor(private largura: number, private altura: number) {
        this.altura = altura;
        this.largura = largura;
    }
    
    setLargura(largura: number) {
        this.largura = largura;
    }
    
    setAltura(altura: number) {
        this.altura = altura;
    }
  
    getArea() {
        return this.largura * this.altura;
    }
  }

export default Rectangle