// main.js
var count;
var html;
var printData = (search = false) => {
    count = 0, html = '';
    planet_data.forEach((planet) => {
        count++;
        if (search != false) {
            if (planet.name.toLocaleLowerCase() == search.toLocaleLowerCase()) {
                html += '<tr style="background-color: turquoise;">';
            }
        } else {
            html += '<tr>';
        }
        html += `<td>${count}.</td>
        <td>${planet.name}</td>
        <td>${planet.diameter}</td>
        <td>${planet.climate}</td>
        <td>${planet.population}</td>
        </tr>`;
    });
    document.getElementById('doPrint').innerHTML = html;
};
goSearch = () => {
    txt = document.getElementById('search').value;
    if (txt !== '') {
        printData(txt);
    } else {
        alert('Kata pencarian tidak boleh kosong!');
    }
};
printData();