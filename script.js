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



document.addEventListener("DOMContentLoaded", () => {
  const lights = document.querySelectorAll(".light")

  // Efeito de luz piscando
  setInterval(() => {
    lights.forEach((light) => {
      light.style.backgroundColor =
        light.style.backgroundColor === "yellow" ? "red" : "yellow"
    })
  }, 1000)

  // Adicionando o efeito de neve
  const createSnowflake = () => {
    const snowflake = document.createElement("div")
    snowflake.classList.add("snowflake")
    snowflake.textContent = "❄"
    snowflake.style.left = `${Math.random() * 100}vw`
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`
    snowflake.style.animationDelay = `${Math.random() * 5}s`
    document.body.appendChild(snowflake)

    setTimeout(() => {
      snowflake.remove()
    }, 5000)
  }

  setInterval(createSnowflake, 100)
})
