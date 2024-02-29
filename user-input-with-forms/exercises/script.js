//Code Your Solution Below
window.addEventListener("load",function(){
    // window.alert("Test1");
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        //window.alert("Test1");
        let testNameInput = document.querySelector("input[name=testName]");
       //let testNameInput = document.getElementById("input[testName]");
        console.log(testNameInput.value);
        let testDateInput = document.querySelector("input[name=testDate]");
        let rocketTypeInput = document.querySelector("input[name=rocketType]");
        let boosterCountInput = document.querySelector("input[name=boosterCount]");
        let windRatingInput = document.querySelector("input[name=windRating]");
        let productionServersInput = document.querySelector("input[name=productionServers]");
        if(testNameInput.value === "" || testDateInput.value === ""){
           alert("All fields required");
        }
       // window.alert("test");
        event.preventDefault();
    });
});