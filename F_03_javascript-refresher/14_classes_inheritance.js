class Staff {
  constructor(name) { this.name = name; }
  clockIn() { console.log(this.name + " has clocked in."); }
}

class Barista extends Staff {
  brew() { console.log(this.name + " is brewing coffee."); }
}

const newBarista = new Barista("L.N.");
newBarista.clockIn();
newBarista.brew();