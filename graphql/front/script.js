document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    const id = document.getElementById('id').value;
    const username = document.getElementById('username').value;
    const passwrd = document.getElementById('passwrd').value;
    const created_at = document.getElementById('created_at').value;
    const updated_at = document.getElementById('updated_at').value;

    // Exibe os valores no div de saída
    const output = document.getElementById('output');
    output.innerHTML = `
        <p><strong>ID:</strong> ${id}</p>
        <p><strong>Usuário:</strong> ${username}</p>
        <p><strong>Senha:</strong> ${passwrd}</p>
        <p><strong>Criado em:</strong> ${new Date(created_at).toLocaleString()}</p>
        <p><strong>Atualizado em:</strong> ${new Date(updated_at).toLocaleString()}</p>
    `;
});