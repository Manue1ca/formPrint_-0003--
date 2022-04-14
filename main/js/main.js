let dateOutInput = document.querySelector('#dateOutInput')
let outdate = new Date()
if(!!outdate.valueOf()){
    outYear = outdate.getFullYear()
    outMout = outdate.getMonth()+1
    outDay = outdate.getDate()
}
if (outMout <=10){
    dateOutInput.value = `${outYear}-0${outMout}-${outDay}`
}else{
    dateOutInput.value = `${outYear}-${outMout}-${outDay}`
}


function outData() {
    let surnamePatient = document.querySelector('#surnamePatient').value
    let namePatient = document.querySelector('#namePatient').value
    let patronymicPatient = document.querySelector('#patronymicPatient').value
    let datePatient = document.querySelector('#datePatient').value

    let d = new Date(datePatient)




    if ( !!d.valueOf() ) {
        year = d.getFullYear();
        if (d.getMonth()+1 ===1){
            month = 'января';
        }else if(d.getMonth()+1 ===2){
            month = 'февраля'
        }else if(d.getMonth()+1 ===3) {
            month = 'марта'
        }else if(d.getMonth()+1 ===4) {
            month = 'апреля'
        }
        else if(d.getMonth()+1 ===5) {
            month = 'мая'
        }else if(d.getMonth()+1 ===6) {
            month = 'июня'
        }
        else if(d.getMonth()+1 ===7) {
            month = 'июля'
        }else if(d.getMonth()+1 ===8) {
            month = 'августа'
        }else if(d.getMonth()+1 ===9) {
            month = 'сентября'
        }else if(d.getMonth()+1 ===10) {
            month = 'октября'
        }else if(d.getMonth()+1 ===11) {
            month = 'ноября'
        }else if(d.getMonth()+1 ===12) {
            month = 'декабря'
        }
        day = d.getDate();


    }
    let subPatient = document.querySelector('#subPatient').value
    let raionPatient = document.querySelector('#raionPatient').value
    let cityPatient = document.querySelector('#cityPatient').value
    let streetPatient = document.querySelector('#streetPatient').value
    let homePatient = document.querySelector('#homePatient').value
    let stroeniePatient = document.querySelector('#stroeniePatient').value
    let korpusPatient = document.querySelector('#korpusPatient').value
    let kvPatient = document.querySelector('#kvPatient').value
    let komnataPatient = document.querySelector('#komnataPatient').value
    let pynktPatient = document.querySelector('#pynktPatient').value





    var docDefinition = {
        pageOrientation: 'landscape',
        pageSize: 'A4',
        content: [
            {
                text: `${surnamePatient}`,
                absolutePosition: { x: 250, y: 200 }
            },
            {
                text: `${namePatient}`,
                absolutePosition: { x: 30, y: 210 }
            },
            {
                text: `${patronymicPatient}`,
                absolutePosition: { x: 200, y: 210 }
            },
            {
                text: `${day}`,
                absolutePosition: { x: 200, y: 230 }
            },
            {
                text: `${month}`,
                absolutePosition: { x: 270, y: 230 }
            },
            {
                text: `${year}`,
                absolutePosition: { x: 350, y: 230 }
            },
            {
                text: `${subPatient}`,
                absolutePosition: { x: 50, y: 250 }
            },
            {
                text: `${raionPatient}`,
                absolutePosition: { x: 350, y: 250 }
            },
            {
                text: `${cityPatient}`,
                absolutePosition: { x: 100, y: 270 }
            },
            {
                text: `${pynktPatient}`,
                absolutePosition: { x: 350, y: 270 }
            },
            {
                text: `${streetPatient}`,
                absolutePosition: { x: 70, y: 290 }
            },
            {
                text: `${homePatient}`,
                absolutePosition: { x: 300, y: 290 }
            },
            {
                text: `${stroeniePatient}`,
                absolutePosition: { x: 350, y: 290 }
            },
            {
                text: `${korpusPatient}`,
                absolutePosition: { x: 70, y: 310 }
            },
            {
                text: `${kvPatient}`,
                absolutePosition: { x: 250, y: 310 }
            },
            {
                text: `${komnataPatient}`,
                absolutePosition: { x: 350, y: 310 }
            },
            {
                text: `${outDay}`,
                absolutePosition: { x: 250, y: 330 }
            },
            {
                text: `${outMout}`,
                absolutePosition: { x: 290, y: 330 }
            },
            {
                text: `${outYear}`,
                absolutePosition: { x: 340, y: 330 }
            },
            {
                text: `${surnamePatient + ' ' + namePatient + ' ' + patronymicPatient}`,
                absolutePosition: { x: 550, y: 200 }
            },
            {
                text: `${day}`,
                absolutePosition: { x: 520, y: 230 }
            },
            {
                text: `${month}`,
                absolutePosition: { x: 580, y: 230 }
            },
            {
                text: `${year}`,
                absolutePosition: { x: 700, y: 230 }
            },
            {
                text: `${subPatient}`,
                absolutePosition: { x: 580, y: 260 }
            },
            {
                text: `${raionPatient}`,
                absolutePosition: { x: 450, y: 270 }
            },
            {
                text: `${cityPatient}`,
                absolutePosition: { x: 520, y: 270 }
            },
            {
                text: `${pynktPatient}`,
                absolutePosition: { x: 580, y: 280 }
            },
            {
                text: `${streetPatient}`,
                absolutePosition: { x: 450, y: 300 }
            },
            {
                text: `${homePatient}`,
                absolutePosition: { x: 700, y: 300 }
            },

        ],

    };
    pdfMake.createPdf(docDefinition).open()
}



//