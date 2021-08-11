// // const logger=require('./logers');
// const winston = require('winston');
// const logConfiguration = {
//     'transports': [

//         new winston.transports.Console({
//             level: 'warn'
//         }),

        
//         new winston.transports.File({
//             level: 'error',

//             filename: 'logs/anil.log' //load from file
//         })
//     ]
// };


let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }





        // else if (buttonText == '(') {
        //     buttonText = '*(';
        //     Value=screenValue+'*';
        //     screenValue += buttonText;
        //     screen.value = Value;
        // }

        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }

        else if (buttonText == '<') {
            var temp = ""
            for (let i = 0; i < screenValue.length - 1; i++) {
                temp += screenValue[i]
            }
            screenValue = temp
            screen.value = temp

        }

        //    else if(buttonText=='%'){
        //        buttonText="/100";
        //       screenValue = buttonText;
        //         screen.value = screenValue;
        //    }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }


    })
}
// const logger = winston.createLogger(logConfiguration);
// logger.error("Hello, Winston logger, the first error!");
// logger.warn("Hello, Winston logger, the first warning!");
