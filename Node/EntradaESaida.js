const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if (anonimo){
    process.stdout.write('fala anonimo!')
} else {
    process.stdout.write('informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\r\n', '')
        process.stdout.write(`fala ${nome}!!`)
        process.exit()
    })
}