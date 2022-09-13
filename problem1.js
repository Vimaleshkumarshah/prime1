 

 let n=13;
 let count=0;
 for(let i=0;i<=N-1;i++){
    for(let j=1; j<=n; j++){
        if(i%j==0){
            count++
        }
    }
 }
 if(count==2){
    console.log(prime)
 }