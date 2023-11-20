const state = {
    AveragePrice: 50,
    freelancers: [
    { name: "Alice", price: 30, occupation: "Writer" },
    { name: "Bob", price: 50, occupation: "Teacher" },
    { name: "Carol", price: 70, occupation: "Programmer" },
    ]
  };

  function updateAveragePrice() {
    let total = 0;

    for(let i = 0; i < state.freelancers.length; i++) {
        const currentFreelancer = state.freelancers[i];

        total += currentFreelancer.price;
    }
    state.averagePrice = Math.round(total / state.freelancers.length);
  }

  function addFreelancerRow(freelancer) {
    state.freelancers.push(freelancer);
  }

  function createFreelancerTableRow(freelancer) {
    const tr = document.createElement("tr");

    const nameData = document.createElement("td");
    const occupationData = document.createElement("td");
    const priceData = document.createElement("td");

    nameData.textContent = freelancer.name;
    occupationData.textContent = freelancer.occupation;
    priceData.textContent = freelancer.price;

    tr.append(nameData, occupationData, priceData);

    return tr;
  }

  function createTableHeaders() {
    const tr = document.createElement("tr");

    const nameData = document.createElement("th");
    const occupationData = document.createElement("th");
    const priceData = document.createElement("th");

    nameData.textContent = "Name";
    occupationData.textContent = "Occupation";
    priceData.textContent = "Starting Price";

    tr.append(nameData, occupationData, priceData);

    return tr;
  }

  function clearTable() {
    const table = document.getElementById("freelancer_table");

    while(table.childNodes.length) {
        table.removeChild(table.childNodes[0]);
    }
  }

  function render() {
    clearTable();

    const table = document.getElementById("freelancer_table")

    table.appendChild(createTableHeaders());

    for(let i = 0; i < state.freelancers.length; i++) {
        const currentFreelancer = state.freelancers[i];
        const row = createFreelancerTableRow(currentFreelancer);

        table.appendChild(row);
    }

    updateAveragePrice();

    const priceText = document.getElementById("average_price_text");

    priceText.textContent = `The average starting price is $${state.averagePrice}.`;
  }

  render();

  const randomNames = ["Nick", "Maya", "Cory", "Daniel", "Leslie", "Monica", "Adam", "Bella", "Dave", "Melvin", "Laura", "Wesley", "Xavier", "Ursula", "Jason", "Jennifer"];
  const randomOccupations = ["Mechanic", "Pilot", "Captain", "Server", "Lifeguard", "Accountant", "Lawyer", "Clown", "Social Worker", "Jazz Player", "IT", "Construction", "Producer", "Doctor"];

  function createRandomFreelancer() {
    const randomName= randomNames[Math.floor(Math.random() * randomNames.length)];
    const randomOccupation= randomOccupations[Math.floor(Math.random() * randomOccupations.length)];
    const randomPrice = Math.round(Math.random() * 150);

    const freelancer = {
        name: randomName,
        occupation: randomOccupation,
        price: randomPrice,
    };
    return freelancer;
  }

  let renderCount = 0;

  let intervalID = setInterval(function() {
    if (renderCount > 100) {
        clearInterval(intervalID);
    }

    const newFreelancer = createRandomFreelancer();
    addFreelancerRow(newFreelancer);

    render();

    ++renderCount;
  }, 2000);
  

