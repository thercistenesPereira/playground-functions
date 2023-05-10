// Desafio 1 - Crie a função compareTrue
const compareTrue = (param1, param2) => {
  return (param1 === true && param2 === true) ? true : false;
}
// Desafio 2 - Crie a função splitSentence
const splitSentence = (string) => {
  return string.split(' ')
}

// Desafio 3 - Crie a função concatName
const concatName = (array) => {
  return `${array[array.length - 1]}, ${array[0]}`
}

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => {
  return (wins * 3) + ties
}

// Desafio 5 - Crie a função highestCount
const highestCount = (array) => {
  let maiorNumero = array[0]
  for (let numero of array){
    if(numero > maiorNumero){
      maiorNumero = numero
    }
  }
  let contador = 0
  for(let numero of array) {
    if (numero === maiorNumero){
      contador += 1
    }
  }
  return contador
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcAllAreas = (base, height, form)=> {
  let area = 0
  if (form === 'triângulo') {
    area = calcTriangleArea(base, height)
    return `O valor da área do triângulo é de: ${area}`
  }
  else if (form === 'retângulo') {
    area = calcRectangleArea(base, height)
    return `O valor da área do retângulo é de: ${area}`
  }
  else {
    return `Não foi possível fazer o cálculo, insira uma forma geométrica válida`
  }
}
const calcTriangleArea = (base, height)=> {
  const area = (base * height) / 2
  return area
}
const calcRectangleArea = (base, height)=> {
  const area = base * height
  return area
}

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2)=> {
  let distanciaCat1 = cat1 > mouse ? cat1 - mouse : mouse - cat1
  let distanciaCat2 = cat2 > mouse ? cat2 - mouse : mouse - cat2
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1'
  } else if (distanciaCat1 > distanciaCat2) {
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (array)=> {
  const arrayString = []

  for (let numero = 0; numero < array.length; numero += 1) {
    if (array[numero] % 5 === 0 && array[numero] % 3 === 0) {
      arrayString.push('fizzBuzz')
    } else if (array[numero] % 3 === 0) {
      arrayString.push('fizz')
    } else if (array[numero] % 5 === 0) {
      arrayString.push('buzz')
    } else {
      arrayString.push('bug!')
    } 
  }
  return arrayString
}

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};
