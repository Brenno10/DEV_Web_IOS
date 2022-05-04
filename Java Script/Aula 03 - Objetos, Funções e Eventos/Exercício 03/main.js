// Função simples
function alertCoockie() {
    alert('Cookie gerado com sucesso');
    console.log('cookie');
}

// Arrow function
const alertSucesso = () => {
    alert('Mensagem gerada com sucesso');
    console.log('Mensagem gerada com sucesso');
};

// Objeto
const notebook = {
    marca: 'Lenovo',
    tela: '15.6"',
    processador: 'Intel Core Xeon E-2276M Six-Core',
    sitema: '64-Bit',
    placa: 'NVIDIA Quadro RTX 5000 Max-Q (16GB)',
    memoria: '1TB',
    ram: '64GB',
};
console.log(notebook);

// Conversão de anos para dias
function yearToDays(anos = 7, dias = 365) {
    return anos * dias;
}
console.log(yearToDays());
