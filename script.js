const switchButton = document.getElementById("switch")
const body = document.body

switchButton.addEventListener("click", () => {
  body.classList.toggle("light")
})

function createSnowflake() {
  const snowflake = document.createElement("div")
  snowflake.classList.add("snowflake")

  snowflake.style.left = `${Math.random() * 100}vw`

  snowflake.style.animationDuration = `${Math.random() * 4 + 4}s`

  snowflake.style.animationDelay = `${Math.random() * 5}s`

  snowflake.textContent = "❅" 

  snowflake.style.fontSize = `${Math.random() * 5 + 10}px`

  document.body.appendChild(snowflake)

  setTimeout(() => {
    snowflake.remove()
  }, 10000)
}

setInterval(createSnowflake, 50)
