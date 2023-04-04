function calculateAvg(a,b,c)
{
    const DolphinAvg=(a+b+c)/3;
    return DolphinAvg;
    
}
function winer()
{
    const dolphin=calculateAvg(110,234,42);
    const koalas=calculateAvg(100,78,126);
    if(dolphin>koalas) console.log(`dolphin` );
    else console.log(`koalas`);

}

winer();
// task
