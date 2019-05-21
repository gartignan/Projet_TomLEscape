chercher();

function chercher() {

    var url = "https://private-dfb1a3-tomlitaudon.apiary-mock.com/questions";
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.addEventListener('readystatechange', changementEtat);
    req.send();
}

function changementEtat(data) {
    if (data.target.readyState == 4) {
        var donnees = JSON.parse(data.target.response);
        var titre = document.getElementById('titre');
        titre.innerHTML = donnees.titre;
        var er = document.getElementById('er');
        er.innerHTML = donnees.sections[0].titre;
        var ere = document.getElementById('ere');
        ere.innerHTML = donnees.sections[1].titre;
    }
}