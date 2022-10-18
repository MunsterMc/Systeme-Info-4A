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
    Boissons = {
        img: "images/boissons.jpg", // le lien idéal
        class_name: "cat",
        link: "#boissons",
        name: "Boissons",
        menu: [
            B0 = {
                img: "images/boissons/101.jpg",
                name: "Vin des montagnes",
                id: 101, // on se donne une marge de 100 produits par catégorie
                prix: 12,
                description: "description du produit"
            },
            B1 = {
                img: "images/boissons/102.jpg",
                name: "Coca-Cola",
                id: 102, // on se donne une marge de 100 produits par catégorie
                prix: 3,
                description: "description du produit"
            }, 
            B2 = {
                img: "images/boissons/103.jpg",
                name: "Eau minérale",
                id: 103, // on se donne une marge de 100 produits par catégorie
                prix: 1.50,
                description: "description du produit"
            }
        ]
    },
    Entrees = {
        img: "images/entrees.jpg", // le lien idéal
        class_name: "cat",
        link: "#entrees",
        name: "Entrées",
        menu: [
            E0 = {
                img: "images/entrees/201.jpg",
                name: "Rillettes du Mans",
                id: 201, // on se donne une marge de 100 produits par catégorie
                prix: 6,
                description: "description du produit"
            },
            E1 = {
                img: "images/entrees/202.jpg",
                name: "Soupe à l'onion",
                id: 202, // on se donne une marge de 100 produits par catégorie
                prix: 5.50,
                description: "description du produit"
            }, 
            E2 = {
                img: "images/entrees/203.jpg",
                name: "Oeufs mimosa",
                id: 203, // on se donne une marge de 100 produits par catégorie
                prix: 4.50,
                description: "description du produit"
            }
        ]
    },
    Poissons = {
        img: "images/poissons.jpg", // le lien idéal
        class_name: "cat",
        link: "#poissons",
        name: "Poissons",
        menu: [
            P0 = {
                img: "images/poissons/301.jpg",
                name: "Sardines dans leur boîte",
                id: 301, // on se donne une marge de 100 produits par catégorie
                prix: 3,
                description: "description du produit"
            },
            P1 = {
                img: "images/poissons/302.jpg",
                name: "Hareng et son gratin de pomme de terre",
                id: 302, // on se donne une marge de 100 produits par catégorie
                prix: 14,
                description: "description du produit"
            }, 
            P2 = {
                img: "images/poissons/303.jpg",
                name: "Fish&Chips",
                id: 303, // on se donne une marge de 100 produits par catégorie
                prix: 8.50,
                description: "description du produit"
            }
        ]
    },
    Viandes = {
        img: "images/viandes.jpg", // le lien idéal
        class_name: "cat",
        link: "#viandes",
        name: "Viandes",
        menu: [
            V0 = {
                img: "images/viandes/401.jpg",
                name: "Pollo al fuego",
                id: 401, // on se donne une marge de 100 produits par catégorie
                prix: 30,
                description: "description du produit"
            },
            V1 = {
                img: "images/viandes/402.jpg",
                name: "Steak tartare",
                id: 402, // on se donne une marge de 100 produits par catégorie
                prix: 15.50,
                description: "description du produit"
            }, 
            V2 = {
                img: "images/viandes/403.jpg",
                name: "Escalope de poulet et haricots verts",
                id: 403, // on se donne une marge de 100 produits par catégorie
                prix: 10,
                description: "description du produit"
            }
        ]
    },
    Fromages = {
        img: "images/fromages.jpg", // le lien idéal
        class_name: "cat",
        link: "#fromages",
        name: "Fromages",
        menu: [
            F0 = {
                img: "images/fromages/501.jpg",
                name: "Camembert",
                id: 501, // on se donne une marge de 100 produits par catégorie
                prix: 5,
                description: "description du produit"
            },
            F1 = {
                img: "images/fromages/502.jpg",
                name: "Vache qui rit",
                id: 502, // on se donne une marge de 100 produits par catégorie
                prix: 2,
                description: "description du produit"
            }, 
            F2 = {
                img: "images/fromages/503.jpg",
                name: "Tome fraiche du cantal",
                id: 503, // on se donne une marge de 100 produits par catégorie
                prix: 6,
                description: "description du produit"
            }
        ]
    },
    Desserts = {
        img: "images/desserts.jpg", // le lien idéal
        class_name: "cat",
        link: "#desserts",
        name: "Desserts",
        menu: [
            D0 = {
                img: "images/desserts/601.jpg",
                name: "Crème brulée",
                id: 601, // on se donne une marge de 100 produits par catégorie
                prix: 4,
                description: "description du produit"
            },
            D1 = {
                img: "images/desserts/602.jpg",
                name: "Brownie au chocolat",
                id: 602, // on se donne une marge de 100 produits par catégorie
                prix: 5,
                description: "description du produit"
            }, 
            D2 = {
                img: "images/desserts/603.jpg",
                name: "Salade de fruit",
                id: 603, // on se donne une marge de 100 produits par catégorie
                prix: 4.50,
                description: "description du produit"
            }
        ]
    }
]

// display categories

for (let i = 0; i < categories.length; i++) {
    var cat = document.createElement('div');
    cat.id = "cat" + i
    cat.className = "cat"
    document.getElementById("top").appendChild(cat)

    var img = new Image()
    img.src = categories[i].img
    img.alt = categories[i].name
    img.className = "catimg"
    img.onclick = function() {
        window.location.href = categories[i].link
    };
    document.getElementById("cat" + i).appendChild(img);
}

// display products for each categorie

for (let i = 0; i < categories.length; i++) {
    var bar = document.createElement('div')
    bar.id = "bar" + i
    bar.className = "bar"
    document.body.appendChild(bar)

    var divCat = document.createElement('div')
    divCat.id = categories[i].link.slice(1)
    document.body.appendChild(divCat)

    var divTitle = document.createElement('div')
    divTitle.className = "divTitle"
    divTitle.id = "divTitle" + i
    document.getElementById(categories[i].link.slice(1)).appendChild(divTitle)

    var title = document.createElement('p')
    title.innerHTML = categories[i].name
    title.className = "title"
    document.getElementById('divTitle' + i).appendChild(title)

    var divProducts = document.createElement('div')
    divProducts.className = "container"
    divProducts.id = "container" + i
    document.getElementById(categories[i].link.slice(1)).appendChild(divProducts)

    for (let j = 0; j < categories[i].menu.length; j++) { // use a fucking array u dumbass
        var product = document.createElement('div')
        product.className = "product"
        product.id = "product" + i + "-" + j
        document.getElementById("container" + i).appendChild(product)
        
        var img = new Image()
        img.src = categories[i].menu[j].img
        img.alt = categories[i].menu[j].name
        img.className = "productimg"
        document.getElementById("product" + i + "-" + j).appendChild(img);

        var title = document.createElement('p')
        title.className = "titleProduct"
        title.innerHTML = categories[i].menu[j].name
        document.getElementById("product" + i + "-" + j).appendChild(title);

        var description = document.createElement('p')
        description.className = "descriptionProduct"
        description.innerHTML = categories[i].menu[j].description
        document.getElementById("product" + i + "-" + j).appendChild(description);
    }
}