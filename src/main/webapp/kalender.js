async function hentPatienter(){
    let result = await fetch("rest/patients");

    console.log(result.status)
    if (result.status!=200){
        alert("noget gik galt!");
    }
    let json = await result.json();
    console.log(json)
    // Vis patienter
}

// TODO: Tag stilling til hvad der skal ske med nedenstående kode
// let listelements =""
// json.forEach(function(element){
//     listelements += ("<li>"+element.name+"</li>")
// })
//
// let form= document.getElementById("patientform");
// let formData = new FormData(form)
// let patientJson = Object.fromEntries(formData);
// let res = await fetch("rest/patients", {
//     method:"POST",
//     body: JSON.stringify(patientJson),
//     headers:{
//         'content-type':"application/json"
//     }
// })
