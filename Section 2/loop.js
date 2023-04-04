let number=100;
let count=0;
let check=1;
for(let i=2;i<=number;i++)
{
    for(let j=2;j<i;j++)
    {
        if(i%j==0)
        {
            check=0;
            break;
        }
        else{
            check=1;
        }
    }
    if(check) count++;
}
console.log(count);

// binery search using while loop 
const arry=[1,2,3,4,5,6,7,8];
let target=3
let left=0;
let right=arry.length-1;
console.log(right);
while(left<=right)
{
    let mid=Math.floor((left+right)/2);
    
    if(arry[mid]==target)
    {
        console.log(`the target index is ${mid}`);
        break;
    } 
    else if(arry[mid]<target)
    {
       left=mid+1;
    }
    else{
        right=mid-1;
    }
}