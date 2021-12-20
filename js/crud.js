

function addEventToList(doc) {
    let calendarEvent = doc.data();
    let html = "";
    
    //html += "<li><a>";
    html += '<div class="list_item"> <p>';
    html += calendarEvent.name;
    html += '<button id="' + doc.id + 'Edit" class="edit" type="button" onClick="addEventToForm(this.id)"><i class="fa fa-edit"></i></button>';

    return html;
}

function addEventToForm(id) {

    var aa = db.collection('event').doc(id).get()

    console.log(aa)
}