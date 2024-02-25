function spocitejCenu() {
    const cenaInput = document.getElementById('cena');
    const dphInput = document.getElementById('15');
    const vysledekParagraph = document.getElementById('vysledek');

    const cena = parseFloat(cenaInput.value);
    const dphPercento = parseFloat(dphInput.value);

    if (isNaN(cena) || isNaN(dphPercento)) {
        vysledekParagraph.textContent = 'Prosím, zadejte platné hodnoty.';
        return;
    }

    const dphCastka = cena * (dphPercento / 100);
    const celkovaCena = cena + dphCastka;

    vysledekParagraph.textContent = `Celková cena s DPH: ${celkovaCena.toFixed(2)} Kč`;
}