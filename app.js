sayHi = (name = 'Гость') => console.log(`Привет, ${name}`)



multyply = (number1, number2=1)=> console.log(number1**number2);




middle=(arr)=>{
    let result=0
    for(let i=0; i<arr.length;i++){
        result +=arr[i]
        
    }
    console.log(result/arr.length);
}


getString = (string, number) => {
    for(let i=0; i<number;i++){
        console.log(string);
    }
   
}



palindrom = (string)=>{
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

    
        
        
    






