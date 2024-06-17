class LowerBar {

    get favourite() { 
        return $('~Favourite'); 
    }

    get cart() { 
        return $('~Cart'); 
    }

    get orders() { 
        return $('~Orders'); 
    }

    get menu() { 
        return $('~Menu'); 
    }
}

module.exports = new LowerBar();