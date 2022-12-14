class Order {
  id: number;
  items: string[];
  payed: boolean;

  // constructor

  markAsPaid(): void {
    this.payed = true;
  }
}

class DraftOrder extends Order {
  markAsPaid(): void {
    throw new Error("Draft orders can't be payed");
  }
}