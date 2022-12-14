import Rectangle from "./Rectangle";

class Square extends Rectangle {
  getArea() {
      throw new Error("Method not implemented.");
  }
  constructor(side: number) {
    super(side, side);
  }

  public setWidth(width: number) {
    // A square must maintain equal sides
    super.setWidth(width);
    super.setLength(width);
  }

  public setLength(length: number) {
    super.setWidth(length);
    super.setLength(length);
  }
}

export default Square;