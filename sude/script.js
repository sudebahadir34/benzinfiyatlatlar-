document.getElementById("listeYillar").addEventListener("change",hesapla);

function hesapla(){
 
    let liste=document.getElementById("listeYillar");
    let secilenYilFiyat=liste.options[liste.selectedIndex].value;
    console.log(secilenYilFiyat);
    let sonuc=50/secilenYilFiyat;
    console.log(sonuc);
    document.getElementById("sonuc").innerHTML="seçtiğiniz yılda 50 tl ile"+sonuc.toFixed(1)+" Lt  benzin alınabiliyordu.";

}