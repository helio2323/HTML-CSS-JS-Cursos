function verf(num){
    const n = parseInt(num)

    const result = (n / 2)

    if (Number.isInteger(result)) {
        return 1
    } else {
        return -1
    }
}

verf(1)