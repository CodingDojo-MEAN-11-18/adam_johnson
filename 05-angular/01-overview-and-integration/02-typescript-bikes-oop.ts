class Bike {
  constructor(
    public price: number,
    public max_speed: string,
    public miles?: number
  ){
    this.price = price
    this.max_speed = max_speed
    this.miles = 0
  }
  
}

const Trek = new Bike(500,"21 mph");
const Giant = new Bike(350,"19mph");
const Cannondale = new Bike(1000,"22mph");

function displayinfo(bike) {
  console.log(`Price: $ ${bike.price}`)
  console.log(`Max Speed: ${bike.max_speed}`)
  console.log(`Miles: ${bike.miles}`)
};

function ride(bike) {
  bike.miles += 10;
  console.log('Riding');
};

function reverse(bike) {
  if (bike.miles > 4){
    bike.miles -= 5
  };
  console.log('Reversing')
}

ride(Trek);
ride(Trek);
ride(Trek);
reverse(Trek);
displayinfo(Trek);
ride(Giant);
ride(Giant);
reverse(Giant);
reverse(Giant);
displayinfo(Giant);
reverse(Cannondale);
reverse(Cannondale);
reverse(Cannondale);
displayinfo(Cannondale);
