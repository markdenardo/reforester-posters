















											// Reforesters Laboratory
											// SUN 03/15/26
											// 2PM














// o0
await loadScript("https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-text.js")
await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")

hydraText.font = "monospace"
hydraText.lineWidth = "2%"
hydraText.fontSize = "35%"
hydraText.fillStyle = "purple"
str = " MDN Sound Clinic "
str1 = "Reforesters Laboratory"
str2 = "SUN 03/15/26"
str3 = "14:00"
solid(0)
	.layer(text(str))

	.out(o0)

// o1
s0.initVideo("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTZqMnU5aGRmYWhmNDcxZDlxaHZ3aXdwMjl3ZXo2ZWNqdXBqd3V6bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fvCoIEB8YtKghURZcA/giphy.mp4")
s1.initImage("image.jpg")
src(s0)
	.add(s1, [0.04, 0.7].smooth())
	.add(o0)
	.out(o1)



render(o1)
