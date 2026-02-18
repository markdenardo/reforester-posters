await loadScript("https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-text.js")

await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")
bpm = 10

s0.initImage("image.jpg")

hydraText.font = "serif"
hydraText.lineWidth = "2%"
hydraText.fontSize = "200%"
str = " Reforester Labratory Listening Room MDN 031526 12:30 PM"
src(s0)
	.scale([1, 2, 3].fast(10), [1, 2, 3, 4].fast(25))
	.pixelate([99,98,97],[100,99,98])
	.layer(text(str).modulateScrollX(voronoi(0.1,1,1)).modulate(o0).repeat())
	.out(o0)
render(o0)
