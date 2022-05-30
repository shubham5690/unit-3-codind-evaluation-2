// Add the coffee to local storage with key "coffee"
console.log('hello')

let bucket_data=JSON.parse(localStorage.getItem('coffee'))  || []

async function display(){
    const url='https://masai-mock-api.herokuapp.com/coffee/menu'

    try{
        
        let res= await fetch(url);
        let data= await res.json()
        console.log(data.menu.data)
        append(data.menu.data)

    }catch(err){
        console.log(err)
    }
    
}

display()

function append(data){
    data.forEach(function(ele){
        let container=document.getElementById('menu')
        let box=document.createElement('div')

        let img=document.createElement('img')
        img.src=ele.image;

        let p=document.createElement('p')
        p.innerText=ele.price;

        let t=document.createElement('p')
        t.innerText=ele.title;

        let btn=document.createElement('button')
        btn.innerText='Add to Bucket'
        btn.setAttribute('id','add_to_bucket')
        btn.addEventListener('click',function(){
            addToBucket(ele);
        })

        // console.log(ele)

        box.append(img,t,p,btn);
        container.append(box);
        


    })

}

function addToBucket(ele){
    // console.log(ele)
    bucket_data.push(ele)
    console.log(bucket_data)

    localStorage.setItem('coffee',JSON.stringify(bucket_data));
    document.getElementById('coffee_count').innerHTML=bucket_data.length

}
