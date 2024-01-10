class Product{
    Name;
    Category;
    Height;
    FootSize;
    constructor(name, category, height, footSize){
        Name=name;
        Category=category;
        Height=height;
        FootSize=footSize;
    }
}

let products=new Array(10);

products[0]={
    Name: '1', 
    Category: 'shoes', 
    Height: '0', 
    FootSize: '36' 
}
products[1]={
    Name: '2', 
    Category: 'shoes', 
    Height: '0', 
    FootSize: '36' 
}
products[2]={
    Name: '3', 
    Category: 'shoes', 
    Height: '0', 
    FootSize: '36' 
}
products[3]={
    Name: '4', 
    Category: 'shoes', 
    Height: '0', 
    FootSize: '36' 
}
products[4]={
    Name: '5', 
    Category: 'shoes', 
    Height: '0', 
    FootSize: '36' 
}
products[5]={
    Name: '6', 
    Category: 'shoes', 
    Height: '0', 
    FootSize: '36' 
}
products[6]={
    Name: '7', 
    Category: 'shoes', 
    Height: '0', 
    FootSize: '36' 
}
products[7]={
    Name: '8', 
    Category: 'shoes', 
    Height: '0', 
    FootSize: '36' 
}
products[8]={
    Name: '9', 
    Category: 'shoes', 
    Height: '0', 
    FootSize: '36' 
}
products[9]={
    Name: '10', 
    Category: 'shoes', 
    Height: '0', 
    FootSize: '36' 
}

localStorage.setItem('pr', JSON.stringify(products[2]));

document.querySelector('.button_save').addEventListener('click', ()=>{
    let data = document.querySelector('.height').value;
    localStorage.setItem('height', data);
    let userParams = {
        height: document.querySelector('.height').value,
        footSize: document.querySelector('.foot_size').value
    }
    localStorage.setItem('userParams', JSON.stringify(userParams));
})
document.querySelector('.button_reset').addEventListener('click', ()=>{
    localStorage.clear();
})
