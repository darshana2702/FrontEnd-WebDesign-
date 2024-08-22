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


export class manager extends emp
{
    team;
    constructor(i,n,s,t)
    {
        super(i,n,s)
        this.team=t;
    }
}
export{manager,emp,arr}

//use inheritance and declare a class principle extending teacher with attribute like profit


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

    class principle extends teacher
    {
        profit;
        constructor(i,s,n,p)
    {
        super(i,s,n)
        this.profit=p;
    }
}
let p1=new principle(123,80000,"jesicca")
console.log(p1.tid)

    



    


    