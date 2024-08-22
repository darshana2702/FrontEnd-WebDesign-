function display(a,b,...c)
{
    let arr=[...c]
    console.log(a,b,c)
}
display(5,4,3,5,8)
//============================================================================================
class car
{
name;price;color;
}
let obj1=new car()
obj1.name="kia"
let obj2=new car()
obj2.name="mercedes"
console.log(obj1.name,obj2.name)



//===========================================================================
class electronic
{
    devicename;price;
}
let obje1=new electronic()
obje1.devicename="fan"
let obje2=new electronic()
obje2.devicename="AC"
console.log(obje1.devicename,obje2.devicename)

//===================================
class emp
{
    ename;eid;esalary;
    constructor(i,n,s)
    {
        this.id=i;
        this.esalary=s;   //this is a current calling object
        this.ename=n
    }
    getData()
    {
            console.log(this.eid,this.ename,this.esalary)
    }
}
let emp1=new emp(1234,"Darshana",90000)//constructor is used assing the default value
emp1.getData()




//create a class teacher & used constructor to assign value for tid,tsal and create teacher object and print

class teacher{
    tid;tsal;tname;
    
        constructor(i,s,n)
        {
            this.tid=i;
            this.tsal=s;
            this.tname=n;

        }
        getData()
        {
            console.log(this.tid,this.tsal,this.tname)
        }
    }
    let tech1=new teacher(1234,50000,"Darshana")
    tech1.getData()


    


    