# SFO Hostels API

DATA API for hostels in SFO
For my capstone project it will involve hostels, below is an API containing relevant data I will need for my project.

## Connect to API

```
SEND GET REQUESET TO: https://sfohostelsapi.herokuapp.com/api/v1/hostels
```
```
DATA IS RETURNED IN JSON FORMAT
```
```
[
	{
		"id": 1,
		"continent": "North America",
		"country": "USA",
		"state": "CA",
		"city": "San Francisco",
		"hostel_name": "HI San Francisco Downtown Hostel",
		"full_address": "312 Mason Street Union Square San Francisco, California 94102",
		"zipcode": 94102,
		"email": "SFDowntown@hiusa.org",
		"phone": "415-788-5604",
		"photo_url": "https://www.hiusa.org/images/uploads/hostel/CA-hi-san-francisco-downtown-gallery-09.jpg",
		"website_url": "https://www.hiusa.org/hostels/california/san-francisco/downtown"
	},
	{
		"id": 2,
		"continent": "North America",
		"country": "USA",
		"state": "CA",
		"city": "San Francisco",
		"hostel_name": "USA Hostels San Francisco",
		"full_address": "711 Post St, San Francisco, CA 94109",
		"zipcode": 94109,
		"email": "SANFRANCISCO@USAHOSTELS.COM",
		"phone": "415-440-5600",
		"photo_url": "https://lh5.googleusercontent.com/p/AF1QipNJcEKqb8g3artSXxiEDqrbY1uCKUBth6udK6EI=w408-h408-k-no",
		"website_url": "https://www.usahostels.com/locations/san-francisco/"
	},
	{
		"id": 3,
		"continent": "North America",
		"country": "USA",
		"state": "CA",
		"city": "San Francisco",
		"hostel_name": "HI San Francisco - City Center",
		"full_address": "685 Ellis St, San Francisco, CA 94109",
		"zipcode": 94109,
		"email": "SFCityCenter@hiusa.org",
		"phone": "415-474-5721",
		"photo_url": "https://lh3.googleusercontent.com/proxy/YV47ENNwo32-eCNudm4t3eFRMt_paa6GwBoZOSXYQvFoGTr9L676rKEBVfF1Xvlgf_18pbCSdkT9nSL_QniHsoLEhjMgdB2mbQhAbSIJtYZB0saTa7zNHA_sujoatZepmsptVPAv7l52tuZy8kv5HqvjG8Q-8A=w408-h223-k-no",
		"website_url": "https://www.hiusa.org/hostels/california/san-francisco/city-center"
	},
	{
		"id": 4,
		"continent": "North America",
		"country": "USA",
		"state": "CA",
		"city": "San Francisco",
		"hostel_name": "HI San Francisco - Fisherman's Wharf",
		"full_address": "240 Fort Mason, San Francisco, CA 94123",
		"zipcode": 94123,
		"email": "SFFishermansWharf@hiusa.org",
		"phone": "415-771-7277",
		"photo_url": "https://lh6.googleusercontent.com/proxy/UlktCd_bXuCAqX6PMtGyv3KziD2wmpIQ3fnl7m1mdsVmpRzW2jzwxFgWzVDvrrE4BQWRYW-0UECTply5x9yebwG0ahBUe1dqyrsusZMORZcpLQoJiiQ2SqzZL2Kqm08dUpy92De6O4WrOTMAvMkaZkECKAwAIus=w408-h271-k-no",
		"website_url": "https://www.hiusa.org/hostels/california/san-francisco/fishermans-wharf"
	},
	{
		"id": 5,
		"continent": "North America",
		"country": "USA",
		"state": "CA",
		"city": "San Francisco",
		"hostel_name": "Orange Village Hostel",
		"full_address": "411 O'Farrell St, San Francisco, CA 94102",
		"zipcode": 94102,
		"email": "OrangeVillageHostel@gmail.com",
		"phone": "415-409-4000",
		"photo_url": "https://t-ec.bstatic.com/images/hotel/max1024x768/628/62877637.jpg",
		"website_url": "http://orangevillagehostel.com/"
	},
	{
		"id": 6,
		"continent": "North America",
		"country": "USA",
		"state": "CA",
		"city": "San Francisco",
		"hostel_name": "Amsterdam Hostel San Francisco",
		"full_address": "749 Taylor St, San Francisco, CA 94108",
		"zipcode": 94018,
		"email": "email@hostelsf.com",
		"phone": "415-673-3277",
		"photo_url": "https://hostelsf.com/wp-content/uploads/2015/11/amsterdamhostel-exterior1.jpg",
		"website_url": "https://hostelsf.com/"
	},
	{
		"id": 7,
		"continent": "North America",
		"country": "USA",
		"state": "CA",
		"city": "San Francisco",
		"hostel_name": "Green Tortoise Hostel San Francisco",
		"full_address": "494 Broadway, San Francisco, CA 94133",
		"zipcode": 94133,
		"email": "Hostel@GreenTortoiseSF.com",
		"phone": "415-834-1000",
		"photo_url": "https://ucd.hwstatic.com/propertyimages/1/1821/2.jpg",
		"website_url": "https://www.greentortoisesf.com/"
	},
	{
		"id": 8,
		"continent": "North America",
		"country": "USA",
		"state": "CA",
		"city": "San Francisco",
		"hostel_name": "Music City Hostel",
		"full_address": "1353 Bush St, San Francisco, CA 94109",
		"zipcode": 94109,
		"email": "frontdesk@musiccityhotel.org",
		"phone": "415-816-6207",
		"photo_url": "http://musiccityhotel.org/wordpress/wp-content/uploads/2017/02/1353-Bush_0316.jpg",
		"website_url": "http://musiccityhotel.org/"
	}
]
```