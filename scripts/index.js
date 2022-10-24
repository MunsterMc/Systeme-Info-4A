import categories from '../menu.json' assert { type: 'json' };

function createQRCode() {
    const QRElement = document.getElementById("qrCode");
    // Vider le container du QRCode avant de créer un nouveau QR Code
    // Sinon on a plusieurs QR Codes
    QRElement.innerHTML = "";
    const textinput = JSON.stringify(order);
    if(textinput.length > 2) {
        new QRCode(QRElement, {
            text: textinput,
            width: 256, // à modifier plus tard
            height: 256, // à modifier plus tard
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    } else{
        console.log("Order contents: ", textinput)
    }
}

// NAVBAR

let buttonVld = document.createElement('button')
buttonVld.innerHTML = "Valider la commande"
buttonVld.className = "validateButton"
buttonVld.onclick = createQRCode
document.getElementById("validateBtn").appendChild(buttonVld)

var toggle = document.getElementById('toggle')
var close = document.getElementById('close')
var menu = document.getElementById('menu')

toggle.addEventListener('click', () => {
    menu.classList.toggle('active')
})
close.addEventListener('click', ()=>{
    menu.classList.remove('active')
})

// CATEGORIES

var order = {}

// display categories

var top = document.createElement("div");
top.className = "content";
top.id = "top";
document.body.appendChild(top);

for (let i = 0; i < categories.length; i++) {
    var cat = document.createElement('div');
    cat.id = "cat"
    cat.style.backgroundImage = "url(" + categories[i].img + ")"
    cat.onclick = function() {
        window.location.href = categories[i].link
    };
    var catName = document.createElement('p')
    catName.innerHTML = categories[i].name
    catName.className = "catName"
    cat.appendChild(catName)

    document.getElementById("top").appendChild(cat)
}

// display products for each category

for (let i = 0; i < categories.length; i++) {
    var bar = document.createElement('div')
    bar.className = "bar"
    document.body.appendChild(bar)

    var divCat = document.createElement('div')
    divCat.id = categories[i].link.slice(1)

    var divTitle = document.createElement('div')
    divTitle.className = "divTitle"

    var title = document.createElement('p')
    title.innerHTML = categories[i].name
    title.className = "title"

    var divProducts = document.createElement('div')
    divProducts.className = "container"
    divProducts.id = "container" + i

    divTitle.appendChild(title) // add categorie title
    divCat.appendChild(divTitle) // add div for categorie title
    divCat.appendChild(divProducts) // add div for products
    document.body.appendChild(divCat) // add div categorie

    for (let j = 0; j < categories[i].menu.length; j++) {
        let product = document.createElement('div')
        product.className = "product"

        let table = document.createElement('table')
        let row = document.createElement('tr')
        let col1 = document.createElement('th')
        col1.className = "col1"
        let col2 = document.createElement('th')
        col2.className = "col2"

        let img = new Image()
        img.src = categories[i].menu[j].img
        img.alt = categories[i].menu[j].name
        img.className = "productimg"

        col1.appendChild(img) // add img

        let title = document.createElement('p')
        title.className = "titleProduct"
        title.innerHTML = categories[i].menu[j].name

        let description = document.createElement('p')
        description.className = "descriptionProduct"
        description.innerHTML = categories[i].menu[j].description

        let price = document.createElement('p')
        price.className = "price"
        price.innerHTML = categories[i].menu[j].displayPrix

        let button = document.createElement('button')
        button.innerHTML = "AJOUTER"
        button.className = "addButton"

        // Function to save customer's order and display it

        button.onclick = function() {
            if (order[categories[i].menu[j].id] == undefined){
                order[categories[i].menu[j].id] = 1
            }
            else {
                order[categories[i].menu[j].id]++
            }
            displayOrder(i, j)
        };

        col2.appendChild(title) // add title
        col2.appendChild(description) // add description
        col2.appendChild(price) // add price
        col2.appendChild(button) // add button

        row.appendChild(col1)
        row.appendChild(col2)
        table.appendChild(row)
        product.appendChild(table)
        document.getElementById("container" + i).appendChild(product) // add product to container
    }
}

function displayOrder(i, j) {
    document.getElementById("order").innerHTML = ""

    let price = 0
    for (const [product, quantity] of Object.entries(order)) {
        let el = document.createElement('span')
        let p = categories[product.toString().slice(0, 1)-1].menu.find(({ id }) => id === parseInt(product))
        el.innerHTML = "<br />" + p.name + " X" + quantity
        document.getElementById("order").appendChild(el)
        price += p.prix * quantity

        let del = document.createElement('button')
        del.innerHTML = "-"
        del.className = "minusButton"
        del.onclick = function() {
            if (order[product] == 1) {
                delete order[product]
            }
            else {
                order[product]--
            }
            displayOrder(i, j)
        }
        document.getElementById("order").appendChild(del)
    }

    let total = document.createElement('span')
    if (price == 0) {
        total.innerHTML = "Votre panier est vide"
    } else {
        total.innerHTML = "<br />" + price + "€"
    }
    document.getElementById("order").appendChild(total)
}
// add validation button
document.getElementById("order").innerHTML = "Votre panier est vide"