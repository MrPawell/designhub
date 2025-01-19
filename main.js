function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(
      function () {
          const message = document.getElementById("message");
          message.textContent = "Copied!";
          message.classList.add("show");
          setTimeout(() => {
              message.classList.remove("show");
          }, 2500);
      },
      function (err) {
          console.error(err);
      }
  );
}

function copyToClipboard1(text) {
    navigator.clipboard.writeText(text).then(
        function () {
            const message = document.getElementById("message1");
            message.textContent = "Copied!";
            message.classList.add("show");
            setTimeout(() => {
                message.classList.remove("show");
            }, 2500);
        },
        function (err) {
            console.error(err);
        }
    );
  }


  function copyToClipboard3(text) {
    navigator.clipboard.writeText(text).then(
        function () {
            const message = document.getElementById("message3");
            message.textContent = "Copied!";
            message.classList.add("show");
            setTimeout(() => {
                message.classList.remove("show");
            }, 2500);
        },
        function (err) {
            console.error(err);
        }
    );
  }



  function copyToClipboard2(text) {
    navigator.clipboard.writeText(text).then(
        function () {
            const message = document.getElementById("message2");
            message.textContent = "Copied!";
            message.classList.add("show");
            setTimeout(() => {
                message.classList.remove("show");
            }, 2500);
        },
        function (err) {
            console.error(err);
        }
    );
  }



  function copyToClipboard4(text) {
    navigator.clipboard.writeText(text).then(
        function (err) {
            console.error(err);
        }
    );
  }


  function copyToClipboard5(text) {
    navigator.clipboard.writeText(text).then(
        function (err) {
            console.error(err);
        }
    );
  }


  function copyToClipboard6(text) {
    navigator.clipboard.writeText(text).then(
        function (err) {
            console.error(err);
        }
    );
  }

  
  function copyToClipboard7(text) {
    navigator.clipboard.writeText(text).then(
        function (err) {
            console.error(err);
        }
    );
  }


  
  function copyToClipboard8(text) {
    navigator.clipboard.writeText(text).then(
        function (err) {
            console.error(err);
        }
    );
  }

  

function goToSite() {
    window.location.href = "https://fonts.google.com/specimen/League+Spartan?preview.text=12334567"; // URL strony
  }


  function goToSite1() {
    window.location.href = "https://fonts.google.com/specimen/Satisfy?preview.text=12334567"; // URL strony
  }