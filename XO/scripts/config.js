function openPlayerConfigModal(eve) {
    editedPlayer = eve.target.dataset.playerid
    backdrop.style.display = "block"
    overlayEle.style.display = "block"
}

function cancelPlayerConfigModal() {
     backdrop.style.display = "none"
    overlayEle.style.display = "none"
}

function savePlayerConfig(eve) {
     eve.preventDefault()
     const nameData = eve.target[0].value.trim()
     if(!nameData || nameData.length == 0) {
        alert("Please Enter Player Name")
        return
     }

     console.log(editedPlayer)

    const targetEle = document.querySelector(`#player-${editedPlayer}-data h3`) 
    targetEle.textContent = nameData
    players[editedPlayer - 1].name = nameData
    eve.target[0].value = ""
    cancelPlayerConfigModal()
}