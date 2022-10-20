// NAVBAR

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

// Cette partie est codé en dur et devrait se faire idéalement
// à partir d'une base de données pour le tableau "categories"

var categories = [
    {
        img: "images/boissons.jpg", // le lien idéal
        link: "#boissons",
        name: "Boissons",
        menu: [
            {
                img: "images/boissons/101.jpg",
                name: "Vin des montagnes",
                id: 101, // on se donne une marge de 100 produits par catégorie
                prix: 12,
                displayPrix: "12.00€",
                description: "description du produit"
            },
            {
                img: "images/boissons/102.jpg",
                name: "Coca-Cola",
                id: 102, // on se donne une marge de 100 produits par catégorie
                prix: 3,
                displayPrix: "3.00€",
                description: "description du produit"
            }, 
            {
                img: "images/boissons/103.jpg",
                name: "Eau minérale",
                id: 103, // on se donne une marge de 100 produits par catégorie
                prix: 1.50,
                displayPrix: "1.50€",
                description: "description du produit"
            }
        ]
    },
    {
        img: "images/entrees.jpg", // le lien idéal
        link: "#entrees",
        name: "Entrées",
        menu: [
            {
                img: "images/entrees/201.jpg",
                name: "Rillettes du Mans",
                id: 201, // on se donne une marge de 100 produits par catégorie
                prix: 6,
                displayPrix: "6.00€",
                description: "description du produit"
            },
            {
                img: "images/entrees/202.jpg",
                name: "Soupe à l'onion",
                id: 202, // on se donne une marge de 100 produits par catégorie
                prix: 5.50,
                displayPrix: "5.50€",
                description: "description du produit"
            },
            {
                img: "images/entrees/203.jpg",
                name: "Oeufs mimosa",
                id: 203, // on se donne une marge de 100 produits par catégorie
                prix: 4.50,
                displayPrix: "4.50€",
                description: "description du produit"
            }
        ]
    },
    {
        img: "images/poissons.jpg", // le lien idéal
        link: "#poissons",
        name: "Poissons",
        menu: [
            {
                img: "images/poissons/301.jpg",
                name: "Sardines dans leur boîte",
                id: 301, // on se donne une marge de 100 produits par catégorie
                prix: 3,
                displayPrix: "3.00€",
                description: "description du produit"
            },
            {
                img: "images/poissons/302.jpg",
                name: "Hareng et son gratin de pomme de terre",
                id: 302, // on se donne une marge de 100 produits par catégorie
                prix: 14,
                displayPrix: "14.00€",
                description: "description du produit"
            },
            {
                img: "images/poissons/303.jpg",
                name: "Fish&Chips",
                id: 303, // on se donne une marge de 100 produits par catégorie
                prix: 8.50,
                displayPrix: "8.50€",
                description: "description du produit"
            }
        ]
    },
    {
        img: "images/viandes.jpg", // le lien idéal
        link: "#viandes",
        name: "Viandes",
        menu: [
            {
                img: "images/viandes/401.jpg",
                name: "Pollo al fuego",
                id: 401, // on se donne une marge de 100 produits par catégorie
                prix: 30,
                displayPrix: "30.00€",
                description: "description du produit"
            },
            {
                img: "images/viandes/402.jpg",
                name: "Steak tartare",
                id: 402, // on se donne une marge de 100 produits par catégorie
                prix: 15.50,
                displayPrix: "15.50€",
                description: "description du produit"
            }, 
            {
                img: "images/viandes/403.jpg",
                name: "Escalope de poulet et haricots verts",
                id: 403, // on se donne une marge de 100 produits par catégorie
                prix: 10,
                displayPrix: "10.00€",
                description: "description du produit"
            }
        ]
    },
    {
        img: "images/fromages.jpg", // le lien idéal
        link: "#fromages",
        name: "Fromages",
        menu: [
            {
                img: "images/fromages/501.jpg",
                name: "Camembert",
                id: 501, // on se donne une marge de 100 produits par catégorie
                prix: 5,
                displayPrix: "5.00€",
                description: "description du produit"
            },
            {
                img: "images/fromages/502.jpg",
                name: "Vache qui rit",
                id: 502, // on se donne une marge de 100 produits par catégorie
                prix: 2,
                displayPrix: "2.00€",
                description: "description du produit"
            }, 
            {
                img: "images/fromages/503.jpg",
                name: "Tome fraiche du cantal",
                id: 503, // on se donne une marge de 100 produits par catégorie
                prix: 6,
                displayPrix: "6.00€",
                description: "description du produit"
            }
        ]
    },
    {
        img: "images/desserts.jpg", // le lien idéal
        link: "#desserts",
        name: "Desserts",
        menu: [
            {
                img: "images/desserts/601.jpg",
                name: "Crème brulée",
                id: 601, // on se donne une marge de 100 produits par catégorie
                prix: 4,
                displayPrix: "4.00€",
                description: "description du produit"
            },
            {
                img: "images/desserts/602.jpg",
                name: "Brownie au chocolat",
                id: 602, // on se donne une marge de 100 produits par catégorie
                prix: 5,
                displayPrix: "5.00€",
                description: "description du produit"
            }, 
            {
                img: "images/desserts/603.jpg",
                name: "Salade de fruit",
                id: 603, // on se donne une marge de 100 produits par catégorie
                prix: 4.50,
                displayPrix: "4.50€",
                description: "description du produit"
            }
        ]
    }
]

var order = {}

// display categories

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

// display products for each categorie

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
        button.innerHTML = "Ajouter"
        button.className = "addButton"

        button.onclick = function() {
            if (order[categories[i].menu[j].id] == undefined){
                order[categories[i].menu[j].id] = 1
            }
            else {
                order[categories[i].menu[j].id]++
            }

            document.getElementById("order").innerHTML = ""
            let price = 0
            for (const [product, quantity] of Object.entries(order)) {
                let el = document.createElement('span')
                let p = categories[product.toString().slice(0, 1)-1].menu.find(({ id }) => id === parseInt(product))
                el.innerHTML = p.name + " " + quantity + "<br />"
                document.getElementById("order").appendChild(el)
                price += p.prix * quantity
            }
            let total = document.createElement('span')
            total.innerHTML = price + "€"
            document.getElementById("order").appendChild(total)
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