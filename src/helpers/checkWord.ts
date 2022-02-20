const CheckWord = (correct:string, submitted:string) => {
    let result = [0, 0, 0, 0, 0]

    for (let i = 0; i < submitted.length; i++) {
        const char = submitted.charAt(i);
        if(correct.includes(char)){
            if(correct.charAt(i) === char){
                result[i] = 2
            }
            else{
                result[i] = 1
            }
        }
    }
    return result
}

export default CheckWord