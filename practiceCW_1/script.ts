let a;                            //here type is any so any other data type of value can be set lateron
a = 10;
a = "adnan";
//----------------------------------------------
let num: number | string;        //here we can provide multiple data type with the help of union (|)
num = 27;           //valid
num = 'daniyal';    //valid
let x: number;                   //ts determine type by annotation
x = 50;             //can only assign numbers
let y = 10;                      //ts determine type by type of value is initialized
//---------------------------------------------
let s: number = 5;
let abc = s > 5 ? 20: 'dani';    // here we have union type set by typescript (union means seting multiple types to same variable)
// type of variable abc is determined by the return type
//--------------------------------------------
let n: number | string = 40;        //true
n = "This is a string";             //true
//----------------------------------------------
function add( a:number, b:number ):number
{
    return a + b;
}

//console.log( add( 2, 5 ) );
//-------------------------------------------

export const firstName: string = "Daniyal";
export const lastName: string = "Sarwari";

//----------another way to export multiple items-----------
let email: string = 'iamdaniyalsarwari@gmail.com';
let contact: number = 12345678910;
export { email, contact}