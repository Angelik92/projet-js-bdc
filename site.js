
function RefreshWysiwyg(){
    let textTitre = document.getElementById('titreWysiwyg').value;
    document.querySelector('#titreWysiwygResultat').textContent = textTitre;

    let colorTitle = document.getElementById('colorTitleWysiwyg').value;
    document.getElementById('titreWysiwygResultat').style = colorTitle

    let textContent = document.getElementById('contentWysiwyg').value;
    document.querySelector('#contentWysiwygResultat').textContent = textContent

    let imgSrc = document.getElementById('imgWysiwyg').value;
    document.getElementById('imgWysiwygResultat').src = imgSrc;

    let imageMaxWidth = document.getElementById('imgMaxWidthWysiwyg').value;
    document.getElementById('imgWysiwygResultat').style.width= ''+ imageMaxWidth+'px';
    

}

var btn = document.getElementById('btnGenererWysiwyg');

btn.addEventListener('click', RefreshWysiwyg);

// let inputTitre = document.querySelector('#titreWysiwyg');
// inputTitre.addEventListener('keyup',RefreshWysiwyg);
// inputTitre.addEventListener('change',RefreshWysiwyg);

let mesInputsWithEvents = document.querySelectorAll('.onChangeRefreshWysiwyg');

mesInputsWithEvents.forEach(monInput => {
    //Mon itération
    monInput.addEventListener("keyup", RefreshWysiwyg);
    monInput.addEventListener('change', RefreshWysiwyg);
})