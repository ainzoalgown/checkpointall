// algoritm js
function getDayName(){
    return "vsodpfafao"
}
console.log(getDayName())
function getDayName(day) {
    return day
}
function getDayName(day){
    if (typeof day === 'Number'){
        console.log('err')
    }
}
console.log(getDayName('xjzxijvZXI'))
function getDayName(day) {
    if (typeof day === "number') {
        console.log('err')
    }else if (day > 0 && day < 8) {
        console.log("Все верно")
    }else {
        console.log("неверные данные на входе")
    }
}

function getDayName(day){

    if (typeof day === ("Number") {
        console.log('err')
    } else if(day > 0 && day < 8){
        const days = ["Понедельник","Вториник","среда","Четверг",'Пятница','Суббота','Воскресенье',]
        return days
    } else {
        console.log("неверные данные на входе")
    }

    function getDayName(day){

        if (typeof day === ("Number") {
            console.log("err")
        }else if(day > 0 && day < 8){
            const days = ["Понедельник","Вториник","среда","Четверг","Пятница","Суббота","Воскресенье",]
            return days[day]
        }else {
            console.log("неверные данные на входе")
        }
    }
}