console.log('Contentscript injected');

let budget = document.getElementsByClassName("makeStyles-btb-27")[0].textContent;
console.log(budget);

let div = document.createElement("div");
let button = document.createElement("div");
let textNode = document.createTextNode(`Budget to beat: ${budget}`);
button.appendChild(textNode);
button.className="budget-div";
div.appendChild(button);

// create style
const style = document.createElement("style");
style.textContent= `
    .budget-div{
        background: #063970;
        color: #eeeee4;
        display:block;
        padding:10px;
        float:right;
        border-radius: 25px;
        margin-right:10%;
    }

    .info{
        display:none;
        z-index:100000;
        border-radius: 25px;
        position:absolute;
        background: #abdbe3;
        color: #010400;
        margin:3%;
        margin-left:0%;
        padding:1.5%;
        padding-left:2%;
        font-size:15x;
       
    }

    .budget-div:hover + .info {
        display:block;
 
    }

    
`
document.head.appendChild(style);

// let element = document.createElement('div');
// const injectedText = document.createTextNode(`Extension-like element`);

// element.appendChild(injectedText);


let hover_info = document.createElement("p");
// Source: wikipedia
hover_info.textContent="In common usage, climate change describes global warming—the ongoing increase in global average temperature—and its effects on Earth's climate system. Climate change in a broader sense also includes previous long-term changes to Earth's climate. The current rise in global average temperature is more rapid than previous changes, and is primarily caused by humans burning fossil fuels.[2][3] Fossil fuel use, deforestation, and some agricultural and industrial practices increase greenhouse gases, notably carbon dioxide and methane.[4] Greenhouse gases absorb some of the heat that the Earth radiates after it warms from sunlight. Larger amounts of these gases trap more heat in Earth's lower atmosphere, causing global warming."
hover_info.className= "info";


const parentElement = document.querySelector(
       '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div',
 );

/*parentElement.appendChild(div);
parentElement.appendChild(hover_div);*/



div.appendChild(hover_info);

parentElement.insertBefore(div, parentElement.children[0]);

// parentElement.appendChild(element);


