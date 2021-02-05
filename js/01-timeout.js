// /*
//  * метод setTimeout  позволяет запускать функцию по истечении определенного времени
//  */

// // setTimeout(() => {  /* ***  це або інлайн ф-ція */
// //     console.log('Лог під час виклику callback-функції через 3 секунди');
// // }, 3000);
//                     /* *** або це зовнішня ф-ція*/
//     // const log = () => {
//     //     console.log('Лог під час виклику callback-функції через 3 секунди');
//     // }
    
// //setTimeout(log, 3000); /** Іде реєстрація таймера. ...Вставимо до асинхронного коду*/

// /*
//  * Наглядність асинхронного коду
//  */
//     // console.log('До виклику setTimeout');
//     // setTimeout(log, 3000); /** вставили до асинхронного коду: викличе через 3000 */
//     // console.log('Після виклику setTimeout');

// /*
//  * Очистка/відміна setTimeout  з  clearTimeout()
//  */

// const logger = time => {
//     console.log(`Лог через ${time}ms, бо не відмінено setTimeout`);
// }

// const timerId = setTimeout(logger, 2000,   2000); // Очистка йде по id

// // console.log(timerId);  // 1, 2, 3 ...

// // clearTimeout(timerId); // 1, 2, 3 ...

// /*
//  * Імітація чи потрібно відмінити таймаут Timer:
//  */
// const shouldCanselTimer = Math.random() > 0.3;
//     console.log(Math.random());
//     console.log(shouldCanselTimer);

//     if (shouldCanselTimer) {
//         clearTimeout(timerId);
//     }