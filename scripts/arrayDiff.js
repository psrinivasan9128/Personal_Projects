function getArrayDiff(arr1, arr2) {

    var arr3 = [];

    arr1.forEach(element => {
        if (!arr2.includes(element)) {
            arr3.push(element);
        }
    });

    return arr3;

}

function displayDiffArray() {
    var arr3 = [];
    var arr1 = [];
    var arr2 = [];

    arr1 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"];
    arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"];

    arr3 = getArrayDiff(arr1, arr2);
    var elementId = document.getElementById('idResultArry');

    arr3.forEach((item) => {

        var lielementId = document.createElement('li');
        lielementId.innerText = item;
        elementId.appendChild(lielementId);
    })
}

