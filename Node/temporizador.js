const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 0', function(){
    console.log('executando a tarefa 1: ', new Date().getSeconds())
})
// "/5" executa a cada 5 segundos
// coloca as horas, depois o mes, depois o dia da semana
// se algum desses dados nao for relevante é possível só ignorar

setTimeout(function(){
    tarefa1.cancel()
    console.log('cancelando a tarefa1.')
}, 20000) // em milissegundos

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 5)] // 0 é domingo 
regra.hour = 15
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('executando tarefa 2:', new Date().getSeconds())
})