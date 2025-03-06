function binary_search(list, item) {
    // Проверка, если массив пустой, то возвращаем null
    if (list.length === 0) {
        return null
    }

    // Переменные low и high хранят границы массива, в которой выполняется поиск
    let low = 0
    let high = list.length - 1

    // Пока не остается 1 элемент
    while (low <= high) {
        // Получаем индекс среднего элемента
        const mid = low + high
        // Получаем значение по индексу mid
        const guess = list[mid]

        // Если значение по середине равно нашему
        if (guess == item) {
            // Возвращаем индекс элемента, который искали
            return mid
        } 
        // Если значение по середине больше того, что мы ищем
        else if (guess > item) {
            // Делаем высокое значение границы на 1 меньше, чем середина 
            high = mid - 1
        } 
        // Если значение по середине меньше того, что мы ищем
        else {
            // Делаем высокое значение границы на 1 больше, чем середина
            low = mid + 1
        }
    }

    // Если значение нет в массиве, возвращаем null
    return null
}

const my_list = [1, 3, 5, 7, 9]
console.log(binary_search(my_list, 7)) // 3
console.log(binary_search(my_list, -1)) // null