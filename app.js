const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');


async function handle () {  
    try {
        const response = await fetch ('http://localhost:3000/' + input.value);
        const datas = await response.json();

        if (!response.ok) {
            throw new Error(response.status + '. Rota não existente.');
        }
        
        list.textContent = '';
    
    
        for (let i = 0; i < datas.length; i++) {
            const item = document.createElement('li')
            item.textContent = (datas[i].name || datas[i].produto) + ' | ' + (datas[i].email || datas[i].valor);
            list.appendChild(item);
        }

    } catch (error) {
        list.textContent = 'Erro ' + error.message;
    }
}

button.addEventListener ('click', handle);