










										//MDN Residency
										//Reforesters Laboratory
										//SUN 03/15/26
										//14:00















s0.initVideo("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTZqMnU5aGRmYWhmNDcxZDlxaHZ3aXdwMjl3ZXo2ZWNqdXBqd3V6bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fvCoIEB8YtKghURZcA/giphy.mp4")
s1.initImage("image.jpg")
s2.initVideo("https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa29rcHdibnYzaWdyeDRjZDMybHpiMzA5enYwazU3eGN4d2kxZWQweiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fdd85RxytnbqU58hwP/giphy.mp4")

					src(s0)
						.add(s1, [0.04, 0.7].smooth()).scale([1,2,3].fast(0.8))
						.add(s2,0.8)
						.out(o1)
						render(o1)
