// JAVASCRIPT MENU PROJECT
// empty arrays to hold the values
const menu = {
    appetizers: [],
    mains: [],
    desserts: [],
    price:[],
    
   get  getAppetizers() {
     this.appetizers.push("Chicken salad","fruit salad","mayonnaise")
     this.appetizers.push("Roasted sweet potatoes ","cheese","mango sauce")
     this.appetizers.push("soup"," fruit juice","soda")
     console.log(` APPETERZERS :${this.appetizers}`);
    //  console.log( this.appetizers);
     }, 
  get  getMains() {
   this.mains.push("Nyamachoma","ugali","vegetables")
   this.mains.push("pilau","coffee","pizza ","beans")
   this.mains.push("salad","soup","Eggs","roast chicken")
   console.log(` MAIN FOODS:${this.mains}`);
  //  console.log( this.mains);
  },

  get  getdesserts() {
  this.desserts.push("cake","ice cream","yogurt")
  this.desserts.push("sandwich","Sausage","Sausage","Hot dog")
  this.desserts.push("Kebab","biscuits","hot dog","ham")
  console.log(` DESSERTS: ${this.desserts}`);
}

}

menu.getAppetizers
  menu.getMains
  menu.getdesserts
 