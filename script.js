function addStudent() {

    let name = document.getElementById("studentName").value;

<<<<<<< HEAD
    if(name !== "") {

        let li = document.createElement("li");
        li.innerText = name;
=======
    if (name !== "") {

        let li = document.createElement("li");

        li.innerHTML =
            name +
            ' <button onclick="this.parentElement.remove()">Delete</button>';
>>>>>>> a6854eaa538031ca66756a58af3701af43d46bd5

        document.getElementById("studentList").appendChild(li);

        document.getElementById("studentName").value = "";
    }
}