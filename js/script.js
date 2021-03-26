// console.log('JS OK');

/* CREATE YOUR BURGER

Il programma dovrà consentire di calcolare il prezzo del panino
 selezionando o deselezionando gli ingredienti proposti, impostando
 obbligatoriamente l'inserimento del nome del panino.


*/

// Referenze ( tutti i nodi utili per l'app)


var btn = document.getElementById('button');
// console.log(btn);

var burgerName = document.getElementById('name');

/*prendo la classe dei check per evitare di prendere ogni id singolo creando un html collections*/
var ingredients = document.getElementsByClassName('ingredient-checkbox');
// console.log(ingredients);

var displayPrice = document.getElementById('price');

var couponCode = document.getElementById('coupon');

var codici = ['123456', 'abcdef', 'sconto'];




/**
 * Calcolo del prezzo
 * 
 * */

// Gestore di evento
 
btn.addEventListener('click', 
    function() {
        var name = burgerName.value.trim();
        // console.log(name);

        // Nome burger obbligatorio

        if( name.length === 0){
            alert('Non hai inserito il nome del tuo burger, dai un nome al tuo Burger')

        }else{

            // 1 Aggiunta costo ingredienti al prezzo di base

            /* Imposto qui il prezzo per evitare aggiunte infinite*/
            var price = 50;

            for(var i = 0; i < ingredients.length; i++){
                var ingredientCheck = ingredients[i]; // Stampa elemento per elemento

                if(ingredientCheck.checked){
                    console.log(ingredientCheck.value);
                    //Aggiorno il prezzo
                    price += parseInt(ingredientCheck.value);//Uso parseint perchè ricevo sempre stringa per convertirlo in numero
                }
                
            }

            // 3 Coupon
            var couponCode = coupon.value;

            /* controllo se il dato fornito dall'utente è presente nel mio archivio*/
            
            if (codici.includes(couponCode)){
                console.log("Codice corretto, applicare sconto")
                
                // Applicare sconto 20%
                price -= price * 0.2;
            } else {
                console.log("Codice non dichiarato")
            }

            
            // 2 Stampa del prezzo calcolato
            console.log(price);
            displayPrice.innerHTML = price.toFixed(2)
        }


})

