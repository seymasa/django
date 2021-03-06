var arr = [1,2,3,4,5,6,7,8,9];
// 0'dan 9'a kadar dizi oluşturma : Array.apply(null, { length: 10 }).map(Number.call, Number)

// ilk 5 karakteri al ve her biri için...
var kareler = arr.slice(0, 5).map(function(sayi) {
    // karesini alıp güncelle
    return sayi * sayi;
});

// 5. karakterden sonraki her biri için...
var kupler  = arr.slice(5).map(function(sayi) {
    // küpünü alıp güncelle
    return sayi * sayi * sayi;
});

console.log("Kareler:", kareler);
console.log("Küpler:", kupler);

// Kareler ile küpleri topla
var sonuc = kareler.concat(kupler);
console.log("Sonuç:", sonuc);

/*
 * İşlemin tek satır hali
 */
console.log("Tek Satırlı Kodun Sonucu:", arr.slice(0, 5).map(function(sayi){ return sayi*sayi; }).concat(arr.slice(5).map(function(sayi){ return sayi*sayi*sayi; })));