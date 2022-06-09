const locUrl = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

const getCity = async() => {
    let response  = await fetch(locUrl);
    let data = await response.json();
    data.map((item) => {
        let element = document.createElement('option') ///<option></option>
        let data = document.createTextNode(item.state) // delhi
        element.appendChild(data) //<option>Delhi</option>
        element.value = item.state_id  //<option value=1>Delhi</option>
        document.getElementById('city').appendChild(element);
        /*<Select><option value=1>Delhi</option></Select>*/
    })
}

const getRest = async() => {
    let cityId = document.getElementById('city').value;
    let rest = document.getElementById('hotels');
    while(rest.length > 0){
        rest.remove(0)
    }
    let response  = await fetch(`${restUrl}${cityId}`);
    let data = await response.json();
    data.map((item) => {
        let element = document.createElement('option') 
        let data = document.createTextNode(`${item.restaurant_name} | ${item.address}`)
        element.appendChild(data)
        rest.appendChild(element);
    })
}