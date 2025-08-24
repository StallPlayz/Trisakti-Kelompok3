// Icon function
feather.replace();

// Hamburger menu function
const $hamburger = $("#hamburger-menu");
const $navigation = $(".navigation");

$hamburger.on("click", function () {
  $hamburger.toggleClass("active");
  $navigation.toggleClass("active");
});

$(document).on("click", function (e) {
  if (
    !$hamburger.is(e.target) &&
    $hamburger.has(e.target).length === 0 &&
    !$navigation.is(e.target) &&
    $navigation.has(e.target).length === 0
  ) {
    $hamburger.removeClass("active");
    $navigation.removeClass("active");
  }
});

// Mail function
function sendMail() {
  const $form = $(".contact form");
  const $btn = $("#btnSubmit");
  const $loading = $("#loading");

  const parms = {
    name: $("#name").val(),
    email: $("#email").val(),
    message: $("#message").val(),
  };

  $loading.show();
  $btn.prop("disabled", true).text("Sending...");

  emailjs
    .send("service_0958elr", "template_ncduz2t", parms)
    .then(() => {
      showToast("Message successfully sent!", "success");
      $form[0].reset();
    })
    .catch(() => {
      showToast("Can't send your message, please try again!", "error");
    })
    .finally(() => {
      $loading.hide();
      $btn.prop("disabled", false).text("Send");
    });
}

// Fill-in-requirement to send mail function
$(document).ready(function () {
  $(".contact form").on("submit", function (e) {
    e.preventDefault();

    if (this.checkValidity()) {
      sendMail();
    } else {
      this.reportValidity();
    }
  });
});
