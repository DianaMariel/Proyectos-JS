function SelectionSort(array){
    for(i = 0; i<array.length; i++){
        let menor = i
        for(j=i; j<array.length; j++){
            if(array[j]<array[menor]){
                menor = j
            }
        }
        let temp = array[i]
        array[i] = array[menor]
        array[menor] = temp
    }
    return array
}
console.log(SelectionSort([5,7,9,8]))