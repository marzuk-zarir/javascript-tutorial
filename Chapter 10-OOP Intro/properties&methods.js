console.log('properties describe primitive datatype')
console.log("methods(object's function) describe objective datatype")

// object declaration
var rect = {    
    width: 200,  //------------>> Property
    height: 100,    //------------>> Property

    calculateArea() {   /*------------>> Method */
       return this.width * this.height
    },
    calculateRange() {  /*------------>> Method */ 
       return 2 * (this.width + this.height)
    }
 }

 console.log(rect.calculateArea())  // 20000
 console.log(rect.calculateRange()) // 600
 