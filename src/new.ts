   //-----------------------------CLASS NOTES-----------------------------\\

         //------------------- declare variables -------------------\\

  let nick: string = 'manel'  //declare a variable type string
  let number: number = 10     //declare a variable type number
  let boolean: boolean = true //declare a variable type boolean

          //------------------- declare arrays -------------------\\

  let array: number[] = [1, 2, 3, 4, 5]            //declare a variable type array of numbers
  let names: string[] = ['manel', 'jose', 'pedro'] //declare a variable type array of strings
  let values: any = ['manel', 'jose', 'pedro']     //declare a variable type array of strings or arrays type numbers

          //------------------- function example -------------------\\
  function firstUp(neime: string): string {  // < string of return 
    let letter = neime.charAt(0).toUpperCase();
    return letter + neime.substring(1);
  }

  let Newnames = ['manel', 'jose', 'pedro', 'jesus', 90] // Even if there is a number in the array, it will work because of if

  names.forEach((name) => {
        if(typeof name  === 'string'){
        console.log(name.toUpperCase());
   }
  });


  function takeInfo(user: {name: string, age?: number}){ //  to "?" serves to leave the property as optional

        if(user.age !== undefined){
        return `seu nome é ${user.name} e você tem ${user.age} anos`
        }else{
        return `seu nome é ${user.name}`
     }};
     

  let persona = {
        name: 'manel',
        age: 25
  }
  console.log(takeInfo(persona))


  function showNumber(newAge: Newtype){ //  to "|" serves to leave the property as optional
      if(typeof newAge === 'string'){
      console.log(showNumber(newAge.toUpperCase()));
   }
  };

 showNumber(10)
 showNumber('10')

 type Newtype = number | string