function showBlessing() {
      const nameInput = document.getElementById("name");
      const name = nameInput.value.trim();

      if (!/^[A-Za-z]{2,}$/.test(name)) {
        alert("Please enter a valid name (name only).");
        nameInput.focus();
        return;
      }

      localStorage.setItem("madarakaName", name);

      const hour = new Date().getHours();
      let greeting = "", blessing = "";

      const madarakaInfo = `
        🎉 <strong>Madaraka Day</strong> is here! 🇰🇪 <br>
        Today, we celebrate our freedom, unity, and strength as a nation.<br>
        May the legacy of our heroes ignite courage in your soul and faith in your steps. 💚<br><br>
      `;

      if (hour >= 6 && hour < 12) {
        greeting = `Good Morning, ${name} ☀️`;
        blessing = "Start your day with gratitude and confidence.";
      } else if (hour >= 12 && hour < 18) {
        greeting = `Good Afternoon, ${name} 🌞`;
        blessing = "Keep pushing -- your efforts are not in vain!";
      } else {
        greeting = `Good Evening, ${name} 🌙`;
        blessing = "Rest well. Tomorrow brings new chances and brighter hopes.";
      }

      const special = `
        🙌 By God's grace, we've made it through May. June is yours to conquer!<br>
        💫 May your dreams grow wings, and may your joy multiply.<br><br>
        From <strong>Steve Guchi</strong> -- may your Madaraka Day be filled with love, pride, and purpose! 🇰🇪💫
      `;

      document.getElementById("greeting").innerHTML = greeting;
      document.getElementById("message").innerHTML = `<div class="emoji">🎁</div>${blessing}<br><br>${madarakaInfo}${special}`;
    }

    function resetBlessing() {
      localStorage.removeItem("madarakaName");
      document.getElementById("name").value = "";
      document.getElementById("greeting").innerText = "Hello, Friend! 👋";
      document.getElementById("message").innerHTML = "Enter your <strong>first name</strong> to continue 👇";
    }

    // Optional: Remember name if refreshed
    window.onload = function() {
      const savedName = localStorage.getItem("madarakaName");
      if (savedName) {
        document.getElementById("name").value = savedName;
        showBlessing();
      }
    };
 
