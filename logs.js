import { random } from './utils.js'

function generateLog(firstPerson, secondPerson, count, damageHP, defaultHP) {
  const logs = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. Урон -${count}, [${damageHP}/${defaultHP}]`,
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. Урон -${count}, [${damageHP}/${defaultHP}]`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. Урон -${count}, [${damageHP}/${defaultHP}]`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. Урон -${count}, [${damageHP}/${defaultHP}]`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком <вырезанно цензурой> противника. Урон -${count}, [${damageHP}/${defaultHP}]`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. Урон -${count}, [${damageHP}/${defaultHP}]`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. Урон -${count}, [${damageHP}/${defaultHP}]`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. Урон -${count}, [${damageHP}/${defaultHP}]`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. Урон -${count}, [${damageHP}/${defaultHP}]`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. Урон -${count}, [${damageHP}/${defaultHP}]`,
  ]

  return logs[random(logs.length) - 1]
}

function createLog(firstPerson, secondPerson, count, damageHP, defaultHP) {
  const $logs = document.querySelector('#logs')
  const $p = document.createElement('p')
  const log = generateLog(firstPerson, secondPerson, count, damageHP, defaultHP)

  $p.innerText = `${log}`

  $logs.insertBefore($p, $logs.children[0])
}

export default createLog
