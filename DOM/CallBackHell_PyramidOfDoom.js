setTimeout(() => {
    console.log("Step 1");

    setTimeout(() => {
        console.log("Step 2");

        setTimeout(() => {
            console.log("Step 3");

            setTimeout(() => {
                console.log("Step 4");

                setTimeout(() => {
                    console.log("Step 5");
                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);


// or

function appendMessage(message) {
      const output = document.getElementById("output");
      const div = document.createElement("div");
      div.textContent = message;
      output.appendChild(div);
    }

    function registerUser(username, callback) {
      setTimeout(() => {
        appendMessage(`Registered user: ${username}`);
        callback(username);
      }, 1000);
    }

    function loginUser(username, callback) {
      setTimeout(() => {
        appendMessage(`Logged in user: ${username}`);
        callback(username);
      }, 1000);
    }

    function fetchUserData(username, callback) {
      setTimeout(() => {
        const data = { username, email: `${username}@example.com` };
        appendMessage(`Fetched data for ${username}`);
        callback(data);
      }, 1000);
    }

    function showDashboard(data, callback) {
      setTimeout(() => {
        appendMessage(`Welcome to the dashboard, ${data.username}`);
        callback();
      }, 1000);
    }

    function startProcess() {
      document.getElementById("output").innerHTML = ""; // Clear previous output

      registerUser("rama", function (username) {
        loginUser(username, function (username) {
          fetchUserData(username, function (data) {
            showDashboard(data, function () {
              appendMessage("🎉 Process complete.");
            });
          });
        });
      });
    }