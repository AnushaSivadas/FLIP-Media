let str="elephant"

for(let i=0;i<str.length;i++){
    let flag=0;
    for(let j=0;j<str.length;j++){
        if(str[i]==str[j] && i!=j){
            flag=1;
            break;
        }
    }
    if(flag==0)
    console.log(str[i]);
}