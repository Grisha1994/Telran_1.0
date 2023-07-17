// Реализуйте класс Language (Язык), который будет иметь следующие свойства: 
// name (имя), alphabet, (латинский, кирилица и т.д.), country (страна, в которой говорят на этом языке)
//Создайте экземпляр этого класса
//Выведете в консоль все свойства созданного экземпляра класса
// Реализйуте метод get_info (выводит в консоль строку 'Язык: <name>, Алфавит: <alphabet>, Страна, в которой говорят на этом языке <country>)


class Language{
    constructor(name, alphabet, country){
        this.name = name;
        this.alphabet = alphabet;
        this.country = country;
    }


    get_info(){
        console.log(`
        Язык: ${this.name},
        Алфавит: ${this.alphabet},
        Страна: ${this.country}
        `);
    }

}

// const Language_1 = new Language('Английский','Латиница', 'USD');
// const Language_2 = new Language('Польский','Латиница', 'Poland');
// const Language_3 = new Language('Армянский','Армянская', 'Армения');
// const Language_4 = new Language('Казаксхом','Казахская (кириллица)', 'Казакстан');
// const Language_5 = new Language('Белорусский','Латиница', 'Белорусь');

// console.log(Language_1);
// console.log(Language_2);
// console.log(Language_3);
// console.log(Language_4);
// console.log(Language_5);
const container = document.querySelector('.container');
const all_Language = [];

const addLanguage = function(name, alphabet, country){
    const lang = new Language(name, alphabet, country)
    all_Language.push(lang)
}


addLanguage('Английский','Латиница', 'USD');
addLanguage('Польский','Латиница', 'Poland');
addLanguage('Армянский','Армянская', 'Армения');
addLanguage('Казаксхом','Казахская (кириллица)', 'Казакстан');
addLanguage('Белорусский','Латиница', 'Белорусь');

console.log(all_Language);

function cards(){
    all_Language.forEach(function({name, alphabet, country}){
        const languageElem = document.createElement('div');
        const nameElem = document.createElement('p');
        const alphabetElem = document.createElement('p');
        const countryElem = document.createElement('p');
    
        nameElem.innerText = name;
        alphabetElem.innerText = alphabet;
        countryElem.innerText = country;
    
        languageElem.classList.add('lang')
    
        languageElem.append(nameElem, alphabetElem, countryElem);
        container.append(languageElem);
    
    })
    }

    cards(all_Language);
