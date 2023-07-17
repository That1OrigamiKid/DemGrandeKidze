const names = ["Canon", "Cael", "Sydney", "Brigham", "Jaden", "Gwen", "Olivia", "Addy", "Charlotte", "Reed"]
function inviterequest() {
  let name = prompt("Whats your name")
  if (names.includes(name)) {
    window.open("https://discord.gg/fUsjSGb6w", "_blank");
    document.getElementById(name) = name
  }
}
function tempvcaccess() {
  var ok = prompt('Type "OK" to be redirected')
  if (ok == "OK") {
    window.open("discord.gg/M2xy7XGBM", "_blank");
  }
}
