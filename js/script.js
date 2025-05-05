<!-- SweetAlert2 -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script>
    document.addEventListener("DOMContentLoaded", function () {
        let taskCount = 6;
        let checkBoxCount = 23;

        const taskButtons = document.querySelectorAll(".complete-btn");

        taskButtons.forEach(button => {
            button.addEventListener("click", async function () {
                const taskCard = this.closest(".card");
                const taskTitle = taskCard.querySelector("h2").innerText;
                const time = new Date().toLocaleTimeString();

                // Sweet Alert
                 await Swal.fire({
                    title: 'taskmeeter, net lif. app says',
                    text: 'Board updated successfully',
                   icon: 'success',
                    confirmButtonText: 'OK'
                });

                // Task কমাও
                taskCount--;
                document.getElementById("task-count").innerText = `0${taskCount}`;

                // Checkbox বাড়াও
                checkBoxCount++;
                document.getElementById("navbar-checkbox").innerText = checkBoxCount;

                // Activity Log update
                const logContainer = document.getElementById("activity-log");
                if (logContainer) {
                    logContainer.innerHTML += `
                        <p class="text-gray-600 mt-2">You have completed the task <strong>${taskTitle}</strong> at ${time}</p>
                    `;
                }
                // Clear History Button Functionality
document.querySelectorAll('.btn.btn-primary.btn-sm.mt-3').forEach(clearBtn => {
    clearBtn.addEventListener("click", function () {
        const logContainer = document.getElementById("activity-log");
        const logs = logContainer.querySelectorAll("p");
        logs.forEach(log => log.remove());
    });
});


                // Disable button
                this.disabled = true;
                this.classList.add("opacity-50");

                // যদি এটা শেষ টাস্ক হয়
                if (taskCount === 0) {
                    await Swal.fire({
                        title: 'Congratulations!!!',
                        text: 'You have completed all the task successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                }
            });
        });

        // Rainbow Button Function
        document.getElementById("rainbow-btn").addEventListener("click", function () {
            document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        });

        // Current Date
        document.getElementById("current-date").innerText = new Date().toDateString();
    });
</script>




<script>
    // Blog button clicked go to 
    document.getElementById("openBlog").onclick = () => {
        window.location.href = "blog.html";
    };
</script>