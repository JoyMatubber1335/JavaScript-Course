

console.log("test");
const Joy={
    fullName:"joy matubber",
    height:1.92,
    weight:81,
    BMI:function()
    {
        this.joyBmi= this.weight/(this.height**2);
        // console.log(this.joyBmi);
        return this.joyBmi;
    }

};

const Rana={
    fullName:"rana",
    height:1.72,
    weight:75,
    BMI:function()
    {
        this.ranaBmi= this.weight/(this.height**2);
       
        return this.ranaBmi;
    }

};

Joy.BMI();
Rana.BMI();
const rr=Rana.ranaBmi;
const jj=Joy.joyBmi;
console.log(rr,jj);
if(rr>jj) console.log(`${Rana['fullName']} BMI ${Rana.ranaBmi} is higher  `);
else console.log(`${Joy['fullName']} BMI ${Joy.joyBmi} is higher `);
// const rr=Rana.ranaBmi;



