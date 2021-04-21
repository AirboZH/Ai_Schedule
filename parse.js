var coursetInfo = []

var trd = document.getElementsByTagName('tr')
for (var w = 1; w <= 11; w += 2) {
    var trw = trd[w].innerHTML
    var tr = document.createElement('tr')
    tr.innerHTML = trw
    tr = tr.children
    for (var q = 2; q < 9; q++) {
        var tdi = tr.item(q)
        var dat = q - 1
        console.log('week:', dat)
        var text = tdi.innerHTML//.trim()
        console.log(text)
        if (text != "&nbsp;") {
            var parse = text.split('&nbsp;')
            console.log(parse)
            var classname = parse[1].split('[')[0]
            var wtw = parse[3].split('\n\t')[0].split('<br>')
            var where = wtw [2]
            var teachername = wtw[1]
            var week = week_parse(parse[2])
            var classinfo = {
                "name": classname,
                "position": where,
                "teacher": teachername,
                "week": week,
                "dat": dat,
                "Sections": [
                    { "Section": 2 }
                ]
            }
            coursetInfo.push(classinfo)
        }
    }
    
}
console.log(coursetInfo)
function week_parse(weekin){
    weekin = weekin.split(',')
    for (let i = 0;i<weekin.length;i++){
        weekin[i] = weekin[i].split('周')[0]
    }
    return weekin
}
