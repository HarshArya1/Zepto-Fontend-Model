export default function Header({ A, setA, originalData, selectedCategory, setSelectedCategory }) {
    function SortItem(category) {
        setSelectedCategory(category); // Update selected category state
        const filteredArr = originalData.filter(value => value.category === category);
        setA(filteredArr);
        upd();
    }
    function upd(){
    const cardsSection = document.getElementById("cards-section");
        if (cardsSection) {
            window.scrollTo({
            top: cardsSection.offsetTop - 140,
            behavior: "smooth"})
        }
    }


    return (
        <div className="top">
            <div className="first">
                <div className="second">
                    <img className="img1" src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.66.0/images/header/primary-logo.svg"/>
                    <button className="but1 button">Select Location</button>
                </div>
                <input placeholder="Search for 10 min order"></input>
                <div className="third">
                    <button className="but2 button">Login</button>
                    <button className="but3 button">Add to Cart</button>
                </div>
            </div>

            <div className="fourth">
                <button 
                    onClick={() => { setSelectedCategory("All"); setA(originalData); }} 
                    className={selectedCategory === "All" ? "but4 active" : "but4"}>
                    All
                </button>
                <button 
                    onClick={() => SortItem("Chocolate")} 
                    className={selectedCategory === "Chocolate" ? "but4 active" : "but4"}>
                    Chocolates
                </button>
                <button 
                    onClick={() => SortItem("Stationery")} 
                    className={selectedCategory === "Stationery" ? "but4 active" : "but4"}>
                    Stationery
                </button>
                <button 
                    onClick={() => SortItem("Namkeen")} 
                    className={selectedCategory === "Namkeen" ? "but4 active" : "but4"}>
                    Namkeens
                </button>
                <button 
                    onClick={() => SortItem("Vegetable")} 
                    className={selectedCategory === "Vegetable" ? "but4 active" : "but4"}>
                    Vegetables
                </button>
                <button 
                    onClick={() => SortItem("Biscuits")} 
                    className={selectedCategory === "Biscuits" ? "but4 active" : "but4"}>
                    Biscuits
                </button>
                <button 
                    onClick={() => SortItem("Beauty")} 
                    className={selectedCategory === "Beauty" ? "but4 active" : "but4"}>
                    Beauty
                </button>
                <button 
                    onClick={() => SortItem("Toys")} 
                    className={selectedCategory === "Toys" ? "but4 active" : "but4"}>
                    Toys
                </button>
                <button 
                    onClick={() => SortItem("Ice Cream")} 
                    className={selectedCategory === "Ice Cream" ? "but4 active" : "but4"}>
                    Ice Cream
                </button>
                <button 
                    onClick={() => SortItem("Food")} 
                    className={selectedCategory === "Food" ? "but4 active" : "but4"}>
                    Food
                </button>
            </div>
            <hr />
        </div>
    );
}
