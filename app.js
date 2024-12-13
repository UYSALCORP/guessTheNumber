//! 1- Bilgisayar sayı tutsun.
const rastgeleSayi = Math.ceil((Math.random()*19)+1)
console.log(rastgeleSayi);

//! 2- Variables
const again = document.querySelector(".again")
const guess = document.querySelector(".guess")
const check = document.querySelector(".check")
const message = document.querySelector(".msg")
const body = document.querySelector("body")
const life = document.querySelector(".life")
const number = document.querySelector(".number")
let hak = 10;
let topScore = 0;

//! 3- Check Butonu
// check.onclick=()=>{}
    check.addEventListener("click", ()=>{
        // console.log("Check'e tıklandı");
        const tahmin = guess.value;

        //! b- Tahmin Durumları :
        //* Alt-Üst Sınırı (1-20)
        //* Tahmin yanlışsa Arttır-Azalt
        //* Tahmin doğru (===)
        //* Tahmin hakki bitebilir.

        //! a- Bir değer girilmediyse check'e basamasın!
        if (!tahmin){ // Tahmin, false ise "null,undefined gibi"
            message.textContent = "Lütfen bir tahmin giriniz!"
            message.style.fontSize = "1rem";
        } //! Alt-Üst Sınırı
        else if (tahmin<0 || tahmin>20) {
            message.textContent = "1-20 Arasında bir sayı giriniz!"
            message.style.fontSize = "1rem";
        } //! Tahmin doğru
        else if (tahmin==rastgeleSayi){
            // console.log("Tebrikler."); Doğru mu kontrolü
            message.textContent = "Tebrikler, Bildiniz!!! 😎"
            message.style.fontSize = "1rem";
            body.style.backgroundColor = "green"
            number.textContent =rastgeleSayi
            check.disabled= true
            if (rastgeleSayi>=10){
                number.style.width = "230px"  
            }
            // return
            if (hak>topScore){
                topScore = hak;
                document.querySelector(".topScore").textContent = topScore
            }
        } //! Tahmin yanlış | Azalt-Arttır
        else {
            if (hak>1){
                hak--
                life.textContent = hak;
                tahmin>rastgeleSayi ? message.textContent= "Azalt" : message.textContent= "Arttır"
            }
            else {
                body.style.backgroundColor = "red"
                life.textContent = "Hakkınız Kalmadı!"
                life.style.fontSize = "1rem"
                message.textContent = "Kaybettiniz!"
            }
        }
    })

//! 4- Again Butonu
again.addEventListener("click", ()=>{
    const rastgeleSayi = Math.ceil((Math.random()*19)+1)
    body.style.backgroundColor = "#407a8a"
    message.textContent = "Oyun Yeniden Başlatılıyor..."
    number.textContent = "?"
    check.disabled = false
    hak = 10;
    guess.value=""
})