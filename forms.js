// Container -> Div
const container = document.createElement('div');
container.className = "container"
document.body.appendChild(container);


// Registration -> Heading
const h1 = document.createElement('h1');
h1.innerText = "Registration Form";
container.append(h1);


// Form Creation 
const form = document.createElement('form');
form.className = "form";
form.action = "#";
// form.on = dis;
form.method = "GET";
container.append(form);

//Adding Sections to form
const headers = ["user-details", "gender-details", "food-details", "country-details"];
headers.forEach((e) => {
    const div = document.createElement("div");
    div.className = e;
    form.append(div)
})

// User details content
const user_details = document.querySelector(".user-details");
const label_class = ["first-name", "last-name", "address", "pincode"]
const label_name = ["First Name", "Last Name", "Address", "Pincode"]
label_name.forEach((event, i) => {
    const div = document.createElement('div');
    div.className = "box"
    user_details.append(div);
    const label = document.createElement('label');
    label.htmlFor = label_class[i];
    label.innerHTML = event;
    div.append(label);
    const text = document.createElement("input");
    text.type = "text";
    text.name = label_class[i];
    text.placeholder = `Enter you ${event}`;
    text.id = label_class[i];
    text.autocomplete = "off"
    text.required = true
    div.append(text);
})


//Gender Details content
const dot = ["one", "two", "three", "four", "five"]
const gender = ["Male", "Female", "Prefer not to say"]
const gender_details = document.querySelector(".gender-details");
for (let i = 1; i <= 3; i++) {
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "gender";
    input.id = `dot-${i}`;
    input.value = `${gender[i-1]}`
    gender_details.append(input);
}
const gen_title = document.createElement("span");
gen_title.className = "gen-title";
gen_title.innerText = "Gender";
gender_details.append(gen_title);
const category = document.createElement('div');
category.className = "category";
gender_details.append(category)

var i = 0;
while (i < 3) {
    const input = document.createElement("label");
    input.htmlFor = `dot-${i + 1}`;
    let j = 0;
    while (j < 1) {
        const dot_1 = document.createElement('span');
        dot_1.className = `dot ${dot[i]}`
        input.append(dot_1);
        const gender_1 = document.createElement('span');
        gender_1.className = "gender";
        gender_1.innerText = `${gender[i]}`;
        input.append(gender_1);
        j++
    }
    category.append(input);
    i++;
}

//Food Details content
const food_options = ["North Indian Cuisines", "Chinese Cuisines", "South Indian Cuisines", "Continental Cuisines", "Mexican Cuisines"];
const food_details = document.querySelector(".food-details");
for (let i = 1; i <= 5; i++) {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "food";
    input.id = `f-${i}`;
    input.value = `${food_options[i-1]}`;
    food_details.append(input);
}
const food_title = document.createElement('span');
const food_inst = document.createElement('span');
food_title.className = "food-title";
food_title.innerText = "Choice of food";
food_inst.className = "food-inst";
food_inst.innerText = "(Choose at least 2 options)";
food_details.append(food_title);
food_details.append(food_inst);
const foods = document.createElement('div');
foods.className = "foods";
food_details.append(foods);
var i = 0;
while (i < 5) {
    const input = document.createElement("label");
    input.htmlFor = `f-${i + 1}`;
    let j = 0;
    while (j < 1) {
        const dot_1 = document.createElement('span');
        dot_1.className = `dot ${dot[i]}`;
        input.append(dot_1);
        const gender_1 = document.createElement('span');
        gender_1.className = "food";
        gender_1.innerText = `${food_options[i]}`;
        input.append(gender_1);
        j++
    }
    foods.append(input);
    i++;
}

// Country Details content
const country_details = document.querySelector(".country-details");
const state = document.createElement("div");
state.className = "state";
country_details.append(state)

var i = 0;
while (i < 1) {
    const input = document.createElement('label');
    input.htmlFor = "state";
    input.innerText = "State";
    state.append(input);
    const input_1 = document.createElement("select");
    input_1.name = "state";
    input_1.id = "state";
    input_1.className = "form-control";
    // input_1.onchange = state_dropdown;
    state.append(input_1);
    const options = document.createElement('option');
    options.innerText = "-- Please Select State --";
    options.required = "on"
    input_1.append(options);
    i++;
}
const state_drop = document.querySelector("#state");
const state_arr = ["Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
]
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
];

// State Drop down
state_arr.forEach((event) => {
    const input = document.createElement('option');
    input.innerHTML = event;
    input.value = event;
    state_drop.append(input);
})
const country = document.createElement('div');
country.className = "country";
country_details.append(country)

// Country Drop down
var i = 0;
while (i < 1) {
    const input = document.createElement('label');
    input.htmlFor = "country";
    input.innerText = "Country";
    country.append(input);
    const input_1 = document.createElement("select");
    input_1.name = "country";
    input_1.id = "country";
    input_1.className = "form-control";
    country.append(input_1);
    const options = document.createElement('option');
    // options.value = "Country";
    options.innerText = "-- Please Select Country --";
    input_1.append(options);
    i++;
}
const country_drop = document.querySelector("#country");
countryList.forEach((event) => {
    const input = document.createElement('option');
    input.innerHTML = event;
    input.value = event;
    country_drop.append(input);
})

// Submit button
const submit = document.createElement('div');
submit.className = "submit";
const btn = document.createElement('input');
btn.type = "button";
btn.value = "Submit";
btn.id = "submit";
btn.onclick = dis;
submit.append(btn);
form.append(submit);

// Table

const table_container = document.createElement('div');
table_container.className = "table-container";
document.body.append(table_container);
const table = document.createElement('table');
table.className = "table";
table.id = "table";
const tr = document.createElement('tr');
table.append(tr);
const table_head = ["Name", "Address", "Pincode", "Gender", "Food", "State", "Country"];
table_head.forEach((event) => {
    const th = document.createElement('th');
    tr.append(th);
    th.innerHTML = event;
})
table_container.append(table)


//  Getting values

function dis() {
    const fname = document.getElementById('first-name').value;
    const lname = document.getElementById('last-name').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    var zipcode = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (pincode.match(zipcode)) {
        alert("Enter a zip format")
        return false;
    }
    const gend = document.getElementsByName('gender');
    const food = document.getElementsByName('food');
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    if (fname === "" && lname === "" && address === "" &&
        pincode === "") {
        alert("Enter the User Details");
    } else {

        let gender;
        for (i = 0; i < gend.length; i++) {
            if (gend[i].checked)
                gender = gend[i].value
        }

        let foods = []
        for (let i = 0; i < food.length; i++) {
            if (food[i].checked)
                foods.push(food[i].value);

        }
        var table = document.getElementById("table");
        const tr = document.createElement('tr');
        table.append(tr);
        const entries = [fname + " " + lname, address, pincode, gender, foods, state, country];
        entries.forEach((event) => {
            const td = document.createElement('td');
            tr.append(td);
            td.innerHTML = event;
        })
    }
}