//tribonacci sequence where the first three entries are added together and the sum is added to the arrayc and do that for n amount of times
function tribonacci(signature, n){
    for(let i = 0; i < n; i++){
        signature.push(signature[i]+signature[i+1]+signature[i+2])

    }
    return signature.slice(0, n)
}

//take the first three entries and them together and push the sum to the end of the array
//slice of the precious first entry of the array and now add the new first entries etc
//conditional that checks if array.length equals N