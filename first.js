function countVowels(str){
    let count=0;
    for (const char of str){
        if(char==="a"||
            char==="e"||
            char==="i"||
            char==="0"||
            char==="u")
        {
            count++;
        }
    }
    return count;
}

const countvow = (str) => {
    let count=0;
    for (const char of str){
        if(char==="a"||
            char==="e"||
            char==="i"||
            char==="0"||
            char==="u")
        {
            count++;
        }
    }
    return count;
}

let nums=[1,2,3,4,5];
nums.forEach((num)=>{

    console.log(num*num);
});

let marks=[97,45,32,67,98,57];

let topper = marks.filter((val)=>{
    return val >90;
});
console.log(topper);

let n = prompt ("enter a numbee");

let arr=[];

for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum = arr.reduce((res,curr)=>{
    return res+curr;
});
console.log("sum is a=",sum);

let factorial = arr.reduce((res,curr)=>{
    return res*curr;
});
console.log("factorial is a=",factorial)
