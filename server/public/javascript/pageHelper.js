function submitPedidoForm(e) {
    e.preventDefault();

    console.log("vem que vem q vem quicando")

    const formData = new FormData(document.getElementById("formulario_do_botao"));
    const options = {
        body: formData,
        method: "POST"
    }
    fetch("/pedidos", options).then((response) => {
        return response.json();
    }).then((data) => {
        // have the JSON response from the POST operation here
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })
}

document.getElementById("form_pedido_btn").addEventListener("click", submitPedidoForm);