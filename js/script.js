'use strict';

const yearOfBirth = prompt('Напишіть цифрами свій рік народження');

if (isNaN(yearOfBirth)) {
    alert('Введіть число');
} else if (yearOfBirth === null) {
    alert('Шкода, що Ви не захотіли ввести свій рік народження');
} else {
    let placeOfResidence = prompt('Напишіть де Ви проживаєте');
    if (placeOfResidence === null) {
        alert('Шкода, що Ви не захотіли ввести свіє місце проживання');
    } else if (!isNaN(placeOfResidence)) {
        alert('Це число, дебіл');
    } else {
        if (placeOfResidence.toLowerCase()=== 'київ') {
            placeOfResidence = 'Ти живеш у столиці України';
        } else if (placeOfResidence.toLowerCase() === 'вашингтон') {
            placeOfResidence = 'Ти живеш у столиці США';
        } else if (placeOfResidence.toLowerCase() === 'лондон') {
            placeOfResidence = 'Ти живеш у столиці Великобританії';
        } else {
            placeOfResidence = `Ти живеш у місті ${placeOfResidence}`
        }

        let kindOfSport = prompt('Введіть улюблений вид спорту');
        if (kindOfSport === null) {
            alert('Шкода, що Ви не захотіли ввести свій улюбленний вид спорту');
        } else if (!isNaN(kindOfSport)) {
            alert('Це число, дебіл');
        } else {
            let showTotalInfo = true
            if (kindOfSport.toLowerCase() === 'бокс') {
                kindOfSport = 'Круто! Хочеш стати Усиком?';
            } else if (kindOfSport.toLowerCase() === 'футбол') {
                kindOfSport = 'Круто! Хочеш стати Мессі?';
            } else if (kindOfSport.toLowerCase() === 'баскетбол') {
                kindOfSport = 'Круто! Хочеш стати Джородоном?';
            } else {
                alert('Виберить між баскетболом, боксом і футболом');
                showTotalInfo = false
            }

            if (showTotalInfo) {
                const year = `Ти народився в ${yearOfBirth} році.`
                const fullInformation = `${year}\n${placeOfResidence}\n${kindOfSport}`;
                alert(fullInformation);
            }
        }
    }
}