import fs from 'fs'
import {scheduleHtmlParser} from './parse.js'

let html = fs.readFileSync('./table.html', "utf8");;
console.log(scheduleHtmlParser(html));