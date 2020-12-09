var myForm = document.getElementById('myForm')

myForm.addEventListener('submit',function(e){

    e.preventDefault();

    var country = document.getElementById('country').value
    

    //fetch data from api
    var url = "https://api.covid19api.com/total/dayone/country/" + country

    fetch(url)
    .then((res) => res.json())
    .then((res) => {
        
        var length = res.length
        var index = length - 1
        var confirmed = document.getElementById('confirmed')
        var recovered = document.getElementById('recovered')
        var deaths = document.getElementById('deaths')

        confirmed.innerHTML = ''
        recovered.innerHTML = ''
        deaths.innerHTML = ''

        confirmed.append("Total Confirmed Cases: " + res[index].Confirmed)
        recovered.append("Total Recovered: " + res[index].Recovered)
        deaths.append("Total Deaths: " + res[index].Deaths)

    })

})