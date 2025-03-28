function binary_search(arr, item) {
    // low и high хранят грницы той части списка, в котором идет поиск
    let low = 0
    let high = arr.length - 1

    // пока в массиве не останется 1 элемент
    while (low <= high) {
        // получаем позицию среднего элемента
        const mid = low + high
        //получаем средний элемент
        const guess = arr[mid]

        // сравниваем средний элемент с поисковым числом
        if (guess === item) {
            // если да возвращаем позицию среднего элемента
            return mid
        } else if (guess > item) {
            // если средний элемент больше поискового числа, то меняем верхнюю границу на 1 меньше чем позиция среднего элемента
            high = mid - 1
        } else {
            // если средний элемент меньше поискового числа, то меняем верхнюю границу на 1 больше чем позиция среднего элемента
            low = mid + 1
        }
    }
    // если элемент не получилось найти, то возвращаем null
    return null
}

const my_list = [1, 3, 5, 7, 9]

console.log(binary_search(my_list, 3))
console.log(binary_search(my_list, -1))