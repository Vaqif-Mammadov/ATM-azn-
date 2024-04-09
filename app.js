document.getElementById("cekBtn").addEventListener("click", getMoney);

    function getMoney() {
    const quantity = parseFloat(document.getElementById("quantity").value);
    const foto = document.getElementById("foto");

    const nominallar = [500, 200, 100, 50, 20, 10, 5, 1];
    const images = [
        "500.jpg", "200.jpg", "100.jpg", "50.jpg", "20.jpg", "10.jpg", "5.jpg", "1.jpg"
    ];

    let mebleg = quantity;
    let cixis = "";

    for (let i = 0; i < nominallar.length; i++) {
        const deyer = nominallar[i];
        const eskinaslar = images[i];
        const eded = Math.floor(mebleg / deyer);

        if (eded > 0) {
            cixis += '<div class="pulcemi">';
            for (let j = 0; j < eded; j++) {
                cixis += `<img src="${eskinaslar}" alt="${deyer} AZN"> `;
            }
            cixis += '</div>';
            mebleg -= eded * deyer;
            mebleg = parseFloat(mebleg.toFixed(2));
        }

        if (mebleg === 0) {
            break;
        }
    }

    foto.innerHTML = cixis;
}


