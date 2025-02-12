import "../styles/style.scss";

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menu").innerHTML = `
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="create-student.html">Add Student</a></li>
                <li><a href="list-students.html">Student List</a></li>
            </ul>
        </nav>
    `;
});
