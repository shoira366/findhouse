var houses = [
	{
		id: 1,
		img: "https://media.istockphoto.com/photos/house-exterior-view-of-entrance-porch-with-walkway-and-garage-picture-id546195106",
		title: "Toshkent city",
		address: "Toshkent", 
		special: ["family", "tourist", "for everyone"],
		houseFor: "sale",
		type: "yard",
		date: 2015,
		price: 490581
	},
	{
		id: 2,
		img: "https://media.istockphoto.com/photos/suburban-house-picture-id1269776312",
		title: "Dream house",
		address: "Toshkent", 
		special: ["family", "tourist", "student"],
		houseFor: "rent", 
		type: "flat",
		date: 2001,
		price: 99999
	},
	{
		id: 3,
		img: "https://media.istockphoto.com/photos/luxury-beach-house-with-sea-view-swimming-pool-and-terrace-at-picture-id1279939229",
		title: "Akay city",
		address: "Samarqand",
		special: ["family", "student"],
		housefor: "sale",
		type: "flat",
		date: 2002,
		price: 392058
	},
	{
		id: 4,
		img: "https://media.istockphoto.com/photos/idyllic-home-with-covered-porch-picture-id479767332",
		title: "Olmazor city",
		address: "Jizzax",
		special: ["family", "tourist", "for everyone"],
	    housefor: "rent",
		type: "flat",
		date: 2003,
		price: 323809
	},
	{
		id: 5,
		img: "https://media.istockphoto.com/photos/house-exterior-view-of-entrance-porch-and-driveway-picture-id507882999",
		title: "Yunusobod city",
		address: "Toshkent",
		special: ["family", "tourist"],
		housefor: "rent",
		type: "flat",
		date: 2004,
		price: 439208
	},
	{
		id: 6,
		img: "https://media.istockphoto.com/photos/beach-house-picture-id967961834",
		title: "Sebzor city",
		address: "Sirdaryo",
		special: ["family", "tourist", "for everyone"],
		housefor: "rent",
		type: "camp",
		date: 2005,
		price: 89380
	},
	{
		id: 7,
		img: "https://media.istockphoto.com/photos/beach-house-picture-id967962056?s=612x612",
		title: "Solid house",
		address: "Farg\'ona",
		special: ["family", "student", "for everyone"],
		housefor: "rent",
		type: "yard",
		date: 2006,
		price: 321309
	},
	{
		id: 8,
		img: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
		title: "Bouroom",
		address: "Samarqand",
		special: ["family"],
		housefor: "sale",
		type: "yard",
		date: 2007,
		price: 213958
	},
	{
		id: 9,
		img: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80",
		title: "Minerva city",
		address: "Navoi",
		special: ["family",
		"student"],
		housefor: "rent",
		type: "flat",
		date: 2008,
		price: 123809
	},
	{
		id: 10,
		img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
		title: "Andijon house",
		address: "Andijon",
		special: ["family", "student"],
		housefor: "rent",
		type: "flat",
		date: 2009,
		price: 193150
	},
	{
		id: 11,
		img: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1450&q=80",
		title: "G'ijduvon city",
		address: "Buxoro",
		housefor: "rent",
		special: ["family", "tourist"],
		type: "camp",
		date: 2010,
		price: 193150
	},
	{
		id: 12,
		img: "https://media.istockphoto.com/photos/modern-minimalist-family-villa-picture-id1254871777",
		title: "Urganch house",
		address: "Xorazm",
		housefor: "sale",
		special: ["family", "for everyone"],
		type: "yard",
		date: 2020,
		price: 148100
	},
	{
		id: 13,
		img: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		title: "Shaxrisabz city",
		address: "Qashqadaryo",
		housefor: "rent",
		special: ["family", "student", "for everyone"],
		type: "flat",
		date: 2019,
		price: 189150
	},
	{
		id: 14,
		img: "https://media.istockphoto.com/photos/single-family-new-construction-home-in-suburb-neighborhood-in-the-picture-id1147674294",
		title: "Nest one",
		address: "Samarqand",
		housefor: "sale",
		special: ["family", "for everyone"],
		type: "yard",
		date: 2015,
		price: 167650
	},
	{
		id: 15,
		img: "https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-on-bright-sunny-day-with-green-grass-picture-id1223022367",
		title: "Sporting house",
		address: "Sirdaryo",
		housefor: "rent",
		special: ["family", "tourist", "for everyone"],
		type: "flat",
		date: 2014,
		price: 224320
	},
	{
		id: 16,
		img: "https://media.istockphoto.com/photos/3d-rendering-of-modern-classic-house-in-colonial-style-in-autumn-day-picture-id1257396385",
		title: "Afsona city",
		address: "Namangan",
		housefor: "rent",
		special: ["family",
		"student"],
		type: "flat",
		date: 2018,
		price: 128750
	},
	{
		id: 17,
		img: "https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-sunset-features-three-car-garage-picture-id1223016829",
		title: "Sale house",
		address: "Jizzax",
		housefor: "sale",
		special: ["family"],
		type: "flat",
		date: 2016,
		price: 91450
	},
	{
		id: 18,
		img: "https://media.istockphoto.com/photos/modern-minimalist-family-villa-picture-id1254871777",
		title: "Sale more",
		address: "Surxondaryo",
		housefor: "sale",
		special: ["family", "for everyone"],
		type: "flat",
		date: 2017,
		price: 102450
	},
	{
		id: 19,
		img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",
		title: "Sale yard",
		address: "Qoraqolpog`iston",
		housefor: "sale",
		special: ["family", "for everyone"],
		type: "yard",
		date: 2018,
		price: 110000
	},
	{
		id: 20,
		img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		title: "IT city",
		address: "Samarqand",
		housefor: "rent",
		special: ["family", "tourist", "for everyone"],
		type: "flat",
		date: 2021,
		price: 100000
	}
]




