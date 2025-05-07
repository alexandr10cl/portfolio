function abrirDialogo(id) {
    const dialog = document.getElementById(id);
    if (dialog) dialog.showModal();
}

function fecharDialogo(id) {
    const dialog = document.getElementById(id);
    if (dialog) dialog.close();
}