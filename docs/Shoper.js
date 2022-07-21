

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
function ShopOpen(){
	AllOne.style.display="none"
	ShopElements.style.display=""
}
function GetScrollTop(){
	return Math.round(window.scrollY/window.innerHeight*100)
}
async function DiamondCoinAnimation(Num){
let y = GetScrollTop()
	CoinCountShop.innerText= "+" + Num
	DiamondCountShop.innerText= "-" + Num/2.5
	CoinCountShop.style.top = y + 50 + "vh"
	CoinShop.style.top = y + 50 + "vh"
	DiamondCountShop.style.top = y + 50 + "vh"
	DiamondShop.style.top = y + 50 + "vh"
	AddRemove.style.display=""
}
function CoinsAdd(Num){
	DiamondCoinAnimation(Num)

}

Not.addEventListener("click", function (){
	ShopElements.style.display="none"
	AllOne.style.display=""
})
CoinOne.addEventListener("click", function (){
CoinsAdd(100)
})