let askName = prompt();
if (askName != "Ім’я" && askName != null) {
  alert("Я вас не знаю");
} else if (askName == null) {
  alert("Вхід скасований");
  window.location.reload;
} else {
  password();
}

function password() {
  let askPassword = prompt();
  if (askPassword != "ЛОГОС" && askPassword != null) {
    alert("Пароль невірний");
  } else if (askPassword == null) {
    alert("Вхід скасований");
  } else {
    alert("Ласкаво просимо!");
  }
}
