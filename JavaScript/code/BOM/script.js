console.log(this)
console.log(window.location)
window.navigator.geolocation.getCurrentPosition((val)=>console.log(val.coords))

/*
document.getElementById('btn').addEventListener('click',getvideo)
function getvideo({
    let s=window.navigator.mediaDevices.getUserMedia({video:true})
    const v=document.getElementById('vd');

    v.srcObject=s
})
    */