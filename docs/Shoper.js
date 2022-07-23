

async function delayFor(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms)
	})
}


const AllOne = document.getElementById("AllOne")
const ShopElements = document.getElementById("ShopElements")
const Not = document.getElementById("Not")
const CoinOne = document.getElementById("coinOne")
const CoinTwo = document.getElementById("coinTwo")
const CoinTre = document.getElementById("coinTre")
const DiamondShop = document.getElementById("DiamondShop")
const CoinShop = document.getElementById("CoinShop")
const CoinCountShop = document.getElementById("CoinCountShop")
const DiamondCountShop = document.getElementById("DiamondCountShop")
const AddRemove = document.getElementById("addRemove")
const cave = document.getElementById("cave")
function ShopOpen(){
	AllOne.style.display="none"
	ShopElements.style.display=""
}
function GetScrollTop(){
	return Math.round(window.scrollY/window.innerHeight*100)
}
function DiamondCoinAnimation(Num){
let y = GetScrollTop()
	CoinCountShop.innerText= "+" + Num
	DiamondCountShop.innerText= "-" + Num/2
	CoinCountShop.style.top = y + 50 + "vh"
	CoinShop.style.top = y + 50 + "vh"
	DiamondCountShop.style.top = y + 50 + "vh"
	DiamondShop.style.top = y + 50 + "vh"
	AddRemove.style.display=""
	setTimeout(function (){
		AddRemove.style.display="none"
	}, 2000)
}
function CoinsAdd(Num){
	DiamondCoinAnimation(Num)
	let returnCoins = parseInt(localStorage.getItem('coins')) + Num
	let returnDiamond = parseInt(localStorage.getItem('diamond')) - (Num/2)
	localStorage.setItem('coins', returnCoins)
	localStorage.setItem('diamond', returnDiamond)
}

Not.addEventListener("click", function (){
	ShopElements.style.display="none"
	AllOne.style.display=""
	CloseShop()
})
CoinOne.addEventListener("click", function (){
	if(localStorage.getItem('diamond')>=50){CoinsAdd(100)}
})
CoinTwo.addEventListener("click", function (){
	if(localStorage.getItem('diamond')>=100){CoinsAdd(200)}
})
CoinTre.addEventListener("click", function (){
	if(localStorage.getItem('diamond')>=250){CoinsAdd(500)}
})
document.addEventListener("scroll", function (){
	Not.style.top=GetScrollTop() + 5 + "vh"
})