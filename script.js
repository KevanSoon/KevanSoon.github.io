document.addEventListener("DOMContentLoaded", () => {
  var typed = new Typed("#typed", {
    strings: ["Undergraduate in Software Engineering", "Card Collector", "Gamer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
  })

  // Create twinkling stars
  const starsContainer = document.querySelector(".galaxy-background")
  const starColors = ["#b3d9ff", "#cce6ff", "#e6f2ff", "#f0f8ff"] // Softer star colors
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div")
    star.classList.add("star")
    star.style.width = "2px"
    star.style.height = "2px"
    star.style.background = starColors[Math.floor(Math.random() * starColors.length)]
    star.style.position = "absolute"
    star.style.left = `${Math.random() * 100}%`
    star.style.top = `${Math.random() * 100}%`
    star.style.animation = `twinkle ${Math.random() * 5 + 5}s linear infinite`
    starsContainer.appendChild(star)
  }
})

// Add this to your existing CSS
document.head.insertAdjacentHTML(
  "beforeend",
  `
    <style>
        @keyframes twinkle {
            0% { opacity: 0; }
            50% { opacity: 1; }
            100% { opacity: 0; }
        }
    </style>
`,
)

