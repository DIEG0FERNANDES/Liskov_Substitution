class Rectangle {
    width: number; 
    length: number;
    constructor(private largura: number, private altura: number) {
        this.altura = altura
        this.largura = largura
    }
    
    setWidth(width: number) {
        this.width = width;
    }
    
    setLength(length: number) {
        this.length = length;
    }
    
    getArea() {
        return this.width * this.length;
    }

}

export class Square extends Rectangle {
   
    constructor(side: number) {
      super(side, side);
    }
    
    public setWidth(width: number) {
      super.setWidth(width);
      super.setLength(width);
    }
    
    public setLength(length: number) {
      super.setWidth(length);
      super.setLength(length);
    } 
  
}
interface Shape {
    getArea: () => number;
  }
  
  interface Rectangle extends Shape {
    width: number;
    length: number;
  }
  
  interface Square extends Shape {
    sides: number;
  }

export default Rectangle