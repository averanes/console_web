
'use strict';


let generatorIterator = generator();
 console.log('result: ', generatorIterator.next());
 console.log('result: ', generatorIterator.next("parameter 2"));


let a;
do{
    a = generatorIterator.next("Param 1");  //return {value: 8 ,done: false} and put the param "Param 1"
    console.log('result: ', a.value); //obtain 8 the first time nand later undefined
}while(!a.done)


function* generator(){
    console.log("step 1");
    let yieldParameter = yield 5 + 3; //yield receive a parameter in the var yieldParameter

    console.log("step 2", yieldParameter);
    yieldParameter = yield yieldParameter + ' OK';

    console.log("step 3", yieldParameter);
    yield;
}

