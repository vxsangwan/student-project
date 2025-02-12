document.addEventListener("DOMContentLoaded", function() {
    const students = JSON.parse(localStorage.getItem("students")) || [];

    const form = document.getElementById("student-form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const newStudent = {
                firstName: document.getElementById("first-name").value,
                lastName: document.getElementById("last-name").value,
                course: document.getElementById("course").value,
                grade: document.getElementById("grade").value
            };
            students.push(newStudent);
            localStorage.setItem("students", JSON.stringify(students));
            alert("Student added successfully!");
            form.reset();
            window.location.href = "index.html";
        });
    }

    const tableBody = document.getElementById("student-table");
    if (tableBody) {
        students.forEach(student => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.course}</td>
                <td>${student.grade}</td>
            `;
            tableBody.appendChild(row);
        });
    }
});
