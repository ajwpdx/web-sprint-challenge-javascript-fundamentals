// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2{
    constructor (length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume(){
    return this.length * this.width * this.height
  }
  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

const newCuboid = new CuboidMaker2 (4,5,5)

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
        constructor(length,width,height,color,border){
            super(length,width,height);
            this.color = color;
            this.border = border;
        }
    describe(){
         if(this.border = true){
        return `I am a ${this.color} cube with an outlined border and a volume of ${this.volume()}`
    }else{
       return `I am a ${this.color} cube with a volume of ${this.volume()}`
    }
    }
}

let redCube = new CubeMaker(4,8,6,"red",true)

console.log(redCube.describe())

