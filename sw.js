self.addEventListener("push", function(event) {
  self.registration.showNotification("VPN Status", {
    body: "VPN Connected 🔒",
    icon: "icon.png"
  });
});