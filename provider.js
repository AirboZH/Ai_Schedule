async function scheduleHtmlProvider() {
    let dom = document.getElementById('1D31EEAC4B642B0EE0533E6410AC3841').contentWindow.document
    let table = dom.getElementsByClassName('CourseFormTable')
    if(table.length == 0){
        await loadTool('AIScheduleTools')
        await await AIScheduleAlert('请手动打开想导入的课表界面')
    }
    return table[0].innerHTML
}