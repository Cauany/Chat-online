module.exports ={

    dates: function(timestamp){
        const date = new Date(timestamp)
    
        //yy
        //UTC para a data vir correta
        const year = date.getUTCFullYear()
    
        //mm
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    
        //dd
        const day = `0${date.getUTCDate()}`.slice(-2)
    
        const hour = date.getHours()
    
        return {
            day,
            month,
            year,
            iso:`${year}-${month}-${day}`,
            hour,
        }
    }
}