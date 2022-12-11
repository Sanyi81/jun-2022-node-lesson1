const fs = require('node:fs');

// const builder = require('./study/createStudent');
//
// console.log(builder);
//
// let student1 = builder.studentBuilder('Sonya', 18);
//
// console.log(student1.age);
// console.log(student1.name);

// читання вмісту файлу
// fs.readFile('./text.txt', (err, data) => {
//     console.log(err);
//
//     console.log(data.toString());
// })
//
// додавання інформації до файлу
// fs.appendFile('./text.txt', 'Have a nice day \n', (err) => {
//     console.log('ERR', err);
// })
//
// заміна вмісту файлу
// fs.writeFile('./text.txt', 'WRITE FILE', (err) => {
//     console.log('ERR', err);
// })
//
// створення копії файлу
// fs.readFile('./text.txt', (err, data) => {
//     fs.appendFile('./copy.txt', data, (err) => {
//         console.log('ERR', err);
//     })
// })
//
// створення директорії
// fs.mkdir('./students', (err) => {
//     console.log(err);
// })
//
// створення файлу в директорії
// fs.appendFile('./students/data.json', JSON.stringify({name:'Sasha'}), (err) => {
//     console.log(err);
// })
//
// очистити зміст файлу
// fs.truncate('./copy.txt', (err) => {
//     console.log(err);
// })
//
// видалення файлу
// fs.unlink('./copy.txt', (err) => {
//     console.log(err);
// })
//
// видалення директорії. використовуємо recursive, щоб видалити разом із змістом
// fs.rm('./students', {recursive: true}, err => {
//     console.log(err);
// })
//
// перейменування файлів
// fs.rename('./text.txt', 'think.txt', (err) => {
//     console.log(err);
// })
//
// перейменування файлів та перенесення в директорію
// fs.rename('think.txt', './study/user.txt',  (err) => {
//     console.log(err);
// })
//
// перейменування файлів та перенесення з директорії
// fs.rename('./study/user.txt', './user.txt',  (err) => {
//     console.log(err);
// })
//
// копіювання файлів
// fs.copyFile('./user.txt', './study/copy.txt', err => {
//     console.log(err);
// })
//
// створення файлу зі змістом
// fs.appendFile('./alex.txt', 'My name is Oleksandr', err => {
//     console.log(err);
// })
//
// fs.readdir('./study', (err, files) => {
//     console.log(files);
//
//     for (const fileName of files) {
//         fs.stat(`./study/${fileName}`, (err, stats) => {
//             console.log('-----------------------------------');
//             console.log(`./study/${fileName}`);
//             console.log(stats.isFile());
//
//             if (stats.isFile()) {
//                 fs.readFile(`./study/${fileName}`, (err, data) => {
//                     console.log(data.toString());
//                 })
//             }
//         })
//     }
// })

fs.readdir('./study', {withFileTypes: true}, (err, files) => {
    console.log(files);

    for (const file of files) {
        console.log(file.isFile());
    }
})
