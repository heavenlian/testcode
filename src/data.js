var Mock = require('mockjs')
const runRaces = [
  '9/11/9/12/6/4',
  '9/11/3/10/9/12',
  '6/1/5/11/5/6',
  '8/6/4/9/9/1',
  '2/9/8/5/9/8'
]
const colors = [
  'yellow', 'red', 'green', 'blue', 'purple'
] 
const hourses = [
  'MOON PEAKS',
  'SUPPREME PATROL',
  "GREAT SON",
  "MULTIMAX",
  "SUPRME PLUS"
]
const wts = [
  parseInt(Math.random()*(200 - 100) + 100),
  parseInt(Math.random()*(200 - 100) + 100),
  parseInt(Math.random()*(200 - 100) + 100),
  parseInt(Math.random()*(200 - 100) + 100),
  parseInt(Math.random()*(200 - 100) + 100),
  parseInt(Math.random()*(200 - 100) + 100),
]
const jockeyList = [
  'K H chan9(-7)',
  'K C leung',
  'MF Poon(-2)',
  'C L Chau(-10)',
  'J Moreira'
]
const draws = [
  parseInt(Math.random()*(20 - 1) + 1),
  parseInt(Math.random()*(20 - 1) + 1),
  parseInt(Math.random()*(20 - 1) + 1),
  parseInt(Math.random()*(20 - 1) + 1),
  parseInt(Math.random()*(20 - 1) + 1),
  parseInt(Math.random()*(20 - 1) + 1),
]
const trainers = [
  'K L MAN',
  'D E Ferraris',
  'P O Sulivan',
  'L Ho',
  'F C Lor'
]
const regs = [
  parseInt(Math.random()*(50 - 20) + 20),
  parseInt(Math.random()*(50 - 20) + 20),
  parseInt(Math.random()*(50 - 20) + 20),
  parseInt(Math.random()*(50 - 20) + 20),
  parseInt(Math.random()*(50 - 20) + 20),
  parseInt(Math.random()*(50 - 20) + 20),
]
const rtgs = [
  '-3','-2','-1', '0', '1', '2', '3'
]
const gears = [
  'B/TT', 'B', 'V/TT', 'B', 'B/XB'
]
const data = Mock.mock({
  'list|5': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1,
      'hourseNo|+1':1,
      'lastestRun|1':runRaces,
      'color|1':colors,
      'hourse|1':hourses,
      'wt|1': wts,
      'jockey|1':jockeyList,
      'draw|1': draws,
      'trainer|1':trainers,
      'reg|1':regs,
      'rtg|1':rtgs,
      'horseWt':'',
      'priority':"+1",
      'gear|1':gears
  }]
})
export default data