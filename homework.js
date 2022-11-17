//1
funk1 = num =>  num**2;

//2
funk2 = (num1, num2) => num1+num2;

//3

funk3 = (number1, number2, number3) => (number1-number2)/number3; 

//4

days = number => {
    switch (number) {
        case 1: console.log('Понедельник');
            
            break;
        case 2: console.log('Вторник');
            
            break;
        case 3: console.log('Среда');
            
            break;
        case 4: console.log('Четверг');
            
            break;
        case 5: console.log('Пятница');
            
            break;
        case 6: console.log('Суббота');
            
            break;
        case 7: console.log('Воскресенье');
            
            break;
    
        default: console.log('Введите число от 1 до 7');
            break;
    }
}

//5
comparison = (a,b) => a===b ? true : false;

//6
comparison2 = (a,b) => (a+b)>10 ? true : false;

//7
negative = a => a<0 ? true : false;

//8
isNumberInRange = a => a>0&&a<10 ? true: false;



//9
checkArray = array =>{ 
    array2=[];
for (let i = 0; i < array.length; i++) {
   if(isNumberInRange(array[i])) {
    array2.push(array[i])
   }
   
 } 
 return(array2); 
}

//10

getDigitsSum = number => {
    number=String(number)
    let array =[];
    let newNumber =0;
    for (let i = 0; i < number.length; i++) {
        array.push(number[i])
        
    }
    
    for (let j = 0; j < array.length; j++) {
        newNumber+=(+array[j])
        
    }

    return(newNumber);
    
}

//12

isEven = number => number%2===0 ? true : false;

//13

evenArray = array => {
    array2=[];
    for (let i = 0; i < array.length; i++) {
       if(isEven(array[i])) {
        array2.push(array[i])
       }
       
     } 
     return(array2);
}


//15
nine = number => {
    let newNumber=getDigitsSum(number);
    newNumber>9 ? getDigitsSum(newNumber)  : newNumber; 
    

    
}


//16
palindrom = string=>{
    let result = '';
    let result2 = '';
        for(let j = string.length - 1; j >= 0; j--){
           result +=string[j];
        }
        for (let i = 0; i < string.length; i++) {
            result2 +=string[i];
        }
       
        result===result2 ? console.log(true): console.log(false);

    }











