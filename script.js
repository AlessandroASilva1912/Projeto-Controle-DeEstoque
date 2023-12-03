const FormularioInventorio = document.getElementById('FormularioInventorio');
const InventarioLista = document.getElementById('InventarioLista');

function addProduct() {
    const NomeProduto = document.getElementById('NomeProduto').value;
    const quantidade = document.getElementById('quantidade').value;

    if (NomeProduto && quantidade) {
        const listaItem = document.createElement('div');
        listaItem.innerHTML = `<strong>${NomeProduto}</strong>: ${quantidade} unidades`;
        InventarioLista.appendChild(listaItem);

        FormularioInventorio.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
