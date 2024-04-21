// is used as reserved key word for declare a "function"case1
function total(){
   let subTotal = 120;
    if(subTotal > 50){
        let discount = 20;
        return subTotal - discount;
    } return subTotal;
    }
    //not accessible  ' discount'in this case2
function addnumbers(a:any , b:any){
   return a + b;
}
const sum = addnumbers(4 , 9);
console.log(sum);

//breaks the  while loop use of 'break' in this case3
let i =  10;
while(i >=  1){
    console.log(i);
    
    if(i === 5){
        break;
    }
    i--;
  }
