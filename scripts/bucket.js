// On clicking remove button the item should be removed from DOM as well as localstorage.
console.log('bucket')

let bucket_data=JSON.parse(localStorage.getItem('coffee'))  

var total=bucket_data.reduce(function (sum,ele,i,arr)
{
  return sum + Number(ele.price);

},0)
document.querySelector("#total_amount").innerText=`${total}`


    bucket_data.map(function(ele,i){
        let container=document.getElementById('bucket')
        let box=document.createElement('div')

        let img=document.createElement('img')
        img.src=ele.image;

        let p=document.createElement('p')
        p.innerText=ele.price;

        let t=document.createElement('p')
        t.innerText=ele.title;

        let btn=document.createElement('button')
        btn.innerText='Remove item'
        btn.setAttribute('id','remove_coffee')
        btn.addEventListener('click',function(){
            removeItem(ele,i);
        })

        // console.log(ele)

        box.append(img,t,p,btn);
        container.append(box);
        


    })

function removeItem(ele,i){
    // console.log(ele,i)
    bucket_data.splice(i,1);
    console.log(bucket_data)

    localStorage.setItem('coffee',JSON.stringify(bucket_data))
    location.reload()

}

