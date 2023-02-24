// Завершите функцию, которая принимает строку текста на английском языке и возвращает количество согласных в строке.

// Согласные - это все буквы, используемые для написания английского языка, за исключением гласныхa, e, i, o, u.

const consonantCount = (str) => {
  const reg = /[a-z]/gi;
  const arrLet = str.toLowerCase().match(reg);
  console.log("===>", arrLet);
  const vowels = ["a", "e", "o", "u", "i"];
  if (arrLet == null) {
    return 0;
  } else {
    const result = arrLet.filter((el) => !vowels.includes(el)).join("");

    return console.log(result.length, result);
  }
};

console.log(consonantCount("2148637498'"));
