


function createItemList() {

    const inName = document.getElementById('name').value;
    const inSurname = document.getElementById('surname').value;
    const inGender = document.getElementById('gender').value;
    const inBirth = document.getElementById('birthdate').value;

    const TB = document.getElementById('table');

    var row = document.createElement('tr');

    var tname = document.createElement('td');
    var tsurname = document.createElement('td');
    var tgender = document.createElement('td');
    var tdate = document.createElement('td');

    tname.innerText(inName);
    tname.innerText(inSurname);
    tname.innerText(inGender);
    tname.innerText(inBirth);

    row.appendChild(tname);
    row.appendChild(tsurname);
    row.appendChild(tgender);
    row.appendChild(tdate);

    TB.appendChild(row)


    // var row = document.createElement('tr');
    // var tname = document.createElement('td');
    // var tsurname = document.createElement('td');
    // var tgender = document.createElement('td');
    // var tdate = document.createElement('td');
    // tname.className='tname'
    // tsurname.className='tsurname'
    // tgender.className='tgender'
    // tdate.className='tdate'
        
    // row.appendChild(tname);
    // row.appendChild(tsurname);
    // row.appendChild(tgendername);
    // row.appendChild(tdate);
    
    // tname.appendChild(document.createTextNode(inName.value));
    // tsurname.appendChild(document.createTextNode(inSurname.value));
    // tgender.appendChild(document.createTextNode(inGender.value));
    // tdate.appendChild(document.createTextNode(inBirth.value));

}