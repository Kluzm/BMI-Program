function oblicz() {
    const wzrost = document.getElementById('wzrost');
    const waga = document.getElementById('waga');
    const wynik = document.getElementById('wynik');
    const error = document.getElementById('error');
    const wynikBMI = waga.value / ((wzrost.value/100) ** 2);
    
    if (wzrost.value > 250 || waga.value > 250){
        error.innerHTML = "Dane nieprawidłowe!";
        wynik.innerHTML = "Wynik";
        return;
    } else if (wzrost.value == "" || waga.value == ""){
        error.innerHTML = "Uzupełnij pola!";
        wynik.innerHTML = "Wynik";
        return;
    } else {
        error.innerHTML = "";
    }
    

    
    if(wynikBMI < 16){
        wynik.innerHTML = wynik.innerHTML = "Wynik BMI: "+wynikBMI.toFixed(2)+"<br>WYGŁODZENIE";
    }   else if(wynikBMI > 16 && wynikBMI < 16.99) {
        wynik.innerHTML = wynik.innerHTML = "Wynik BMI: "+wynikBMI.toFixed(2)+"<br>WYCHUDZENIE";
    }   else if(wynikBMI > 17 && wynikBMI < 18.49) {
        wynik.innerHTML = wynik.innerHTML = "Wynik BMI: "+wynikBMI.toFixed(2)+"<br>NIEDOWAGA";
    }   else if(wynikBMI > 18.5 && wynikBMI < 24.99) {
        wynik.innerHTML = wynik.innerHTML = "Wynik BMI: "+wynikBMI.toFixed(2)+"<br>WARTOŚĆ PRAWIDŁOWA";
    }   else if(wynikBMI > 25 && wynikBMI < 29.99) {
        wynik.innerHTML = wynik.innerHTML = "Wynik BMI: "+wynikBMI.toFixed(2)+"<br>NADWAGA";
    }   else if(wynikBMI > 30 && wynikBMI < 34.99) {
        wynik.innerHTML = wynik.innerHTML = "Wynik BMI: "+wynikBMI.toFixed(2)+"<br>I ST. OTYŁOŚCI";
    }   else if(wynikBMI > 35 && wynikBMI < 39.99) {
        wynik.innerHTML = wynik.innerHTML = "Wynik BMI: "+wynikBMI.toFixed(2)+"<br>II ST. OTYŁOŚCI";
    }   else {
        wynik.innerHTML = wynik.innerHTML = "Wynik BMI: "+wynikBMI.toFixed(2)+"<br>OTYŁOŚĆ SKRAJNA";
    }
    
}