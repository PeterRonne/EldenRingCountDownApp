'use strict'

const eldenRingRelease = new Date('Feb 25 2022')

const eldenRingCountDown = function () {
    let currentDate = new Date()

    let currentTime = currentDate.getTime()
    let relesaseTime = eldenRingRelease.getTime()

    let remainingTime = relesaseTime - currentTime

    let remainingSeconds = Math.floor(remainingTime / 1000)
    let remainingMinutes = Math.floor(remainingSeconds / 60)
    let remainingHours = Math.floor(remainingMinutes / 60)
    let remainingDays = Math.floor(remainingHours / 24)

    remainingHours %= 24
    remainingMinutes %= 60
    remainingSeconds %= 60

    document.getElementById("Seconds").textContent = remainingSeconds
    document.getElementById("Hours").textContent = remainingHours
    document.getElementById("Days").textContent = remainingDays
    document.getElementById("Minutes").textContent = remainingMinutes

    setTimeout(eldenRingCountDown, 1000)
}

window.onload = eldenRingCountDown()