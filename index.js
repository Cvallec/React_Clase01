let array1 = [1, 30, 39, 29, 10, 13, 56];

function probandoMap () {
    const result = array1.map(x => x * 2)
    console.log('Probando map: ' + result)
}

function probandoEvery(){
    const todosMayorA40 = (currentValue) => currentValue < 40;
    console.log('Probando every: ' + array1.every(todosMayorA40));
}

function probandoSome(){
    const algunosMayorA40 = currentValue => currentValue < 40;
    console.log('Probando some: ' + array1.some(algunosMayorA40));
}

function probandoFilter(){
    const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
    const result = names.filter(name => name.includes('J'));
    console.log('Probando filter: ' + result);
}

probandoMap()
probandoEvery()
probandoSome()
probandoFilter()
