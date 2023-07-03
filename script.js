const names = ["Canon", "Cael", "Sydney", "Brigham", "Jaden", "Gwen", "Olivia", "Addy", "Charlotte", "Reed"]
function inviterequest() {
  let name = prompt("Whats your name")
  //if (name == "Canon" || name == "Cael" || name == "Sydney" || name == "Brigham" || name == "Jaden" || name == "Gwen" || name == "Olivia" || name == "Addy" || name == "Charlotte" || name == "Reed") {
  if (names.includes(name))
    window.location.href = "https://discord.gg/fUsjSGb6w"
  }
}
