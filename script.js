function addStudent() {

    let name = document.getElementById("studentName").value;

    if (name !== "") {

        let li = document.createElement("li");

        li.innerHTML =
            name +
            ' <button onclick="this.parentElement.remove(); updateCount()">Delete</button>';

        document.getElementById("studentList").appendChild(li);

        updateCount();

        document.getElementById("studentName").value = "";
    }
}

function updateCount() {
    document.getElementById("count").innerText =
        document.getElementById("studentList").children.length;
}