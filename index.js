// Add your Circle class here
const pi = Math.PI

class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return this.radius * 2 * pi
  }

  get area() {
    return  pi * this.radius ** 2
  }

  set diameter(num) {
    this.radius = num / 2
  }

  set circumference(num) {
    this.radius = num / 2 / pi
  }

  set area(num) {
    this.area = Math.sqrt(num / 2)
  }
}
