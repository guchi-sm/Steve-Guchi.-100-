function showBlessing() {
      const name = document.getElementById("name").value || "Friend";
      const hour = new Date().getHours();
      let greeting = "", blessing = "", extra = "";

      if (hour >= 6 && hour < 12) {
        greeting = `Good Morning, ${name}`;
        blessing = "Arise and shine.";
extra = `🌟 By God's unfailing grace 🙏 and endless mercy 💖, we've been preserved through the month of May. Now, let's step boldly into a brighter June 🌈✨. Better days are ahead! 🚀<br><br>
Steve Guchi here wishing you a colorful and prosperous day 🌻, a happy new month of June 🗓️, a joyful weekend 🎉, and Happy Mashujaa Day 🇰🇪 -- celebrating all heroes past and present! 🦸‍♂️🦸‍♀️`;
      } else if (hour >= 12 && hour < 18) {
        greeting = `Good Afternoon, ${name}`;
        blessing = "Work smart and you are loved.";
        extra =`🌟 By God's unfailing grace 🙏 and endless mercy 💖, we've been preserved through the month of May. Now, let's step boldly into a brighter June 🌈✨. Better days are ahead! 🚀<br><br>
Steve Guchi here wishing you a colorful and prosperous day 🌻, a happy new month of June 🗓️, a joyful weekend 🎉, and Happy Mashujaa Day 🇰🇪 -- celebrating all heroes past and present! 🦸‍♂️🦸‍♀️`;
} else {
  greeting = `Good Evening, ${name}`;
  blessing = "Be grateful for every small progress. Don't give up.";
  extra = `🌟 By God's unfailing grace 🙏 and endless mercy 💖, we've been preserved through the month of May. Now, let's step boldly into a brighter June 🌈✨. Better days are ahead! 🚀<br><br>
Steve Guchi here wishing you a colorful and prosperous day 🌻, a happy new month of June 🗓️, a joyful weekend 🎉, and Happy Mashujaa Day 🇰🇪 -- celebrating all heroes past and present! 🦸‍♂️🦸‍♀️`;
}
      document.getElementById("greeting").innerText = greeting;
      document.getElementById("message").innerHTML = `${blessing}<br><br>${extra}`;
    }
