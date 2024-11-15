export function insertionSortShift(array) {
    //Ydre loop sørger for at vi på sigt får kigget på og sammenlignet alle elementer fra i og dem før det, til og med det sidste element i arrayet
    for (let i = 1; i < array.length; i++) {
        //Vi gemmer nuværende værdi, da den ellers vil blive mistet, når vi overskriver den i det indre loop
        let curValue = array[i];
        //Laver en j variabel her, da den ellers vil være ude af scope, hvis den blev instancieret i indre forloop
        let j = i - 1;

        //Indre loop sammenligner nuværende element med det tidligere, indtil nuværende er <= tidligere
        for (; j >= 0 && array[j] > curValue; j--) {
            //Hvis det tidligere element er større flytter vi/kopier vi værdien en gang til højre
            array[j + 1] = array[j];
        }
        //Når nuværende element er <= et tidligere, sættes nuværende element på det aktuelle element vi kigger på
        array[j + 1] = curValue;
    }
    return array;
}

export function whileInsertionSort(array) {
    let count = 0;
    //Ydre loop sørger for at vi på sigt får kigget på og sammenlignet alle elementer fra i og dem før det, til og med det sidste element i arrayet
    for (let i = 1; i < array.length; i++) {
        //Vi gemmer nuværende værdi, da den ellers vil blive mistet, når vi overskriver den i det indre loop
        let curval = array[i];
        //Laver en j variabel her, da den ellers vil være ude af scope, hvis den blev instancieret i indre forloop
        let j = i - 1;

        //Kør så længe nuværende element er mindre end det tidligere og det tidligere element >= det første element i arrayet
        while (array[j] > curval && j >= 0) {
            //Hvis det tidligere element er større flytter vi/kopier vi værdien en gang til højre
            array[j + 1] = array[j];
            //j-- sørger for at vi bevæger os mod starten af arrayet, så nuværende element potentielt sammenligner alle tidligere
            j--;
            count++;
        }

        //Når nuværende element er <= et tidligere, sættes nuværende element på det aktuelle element vi kigger på
        array[j + 1] = curval;
    }
    console.log(count);
    return array;
}
