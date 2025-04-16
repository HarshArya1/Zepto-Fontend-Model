import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import arr from "./utils/dummy"; // Ensure dummy data is imported correctly

function App() {
    const [selectedCategory, setSelectedCategory] = useState("All"); 
    const [A, setA] = useState(arr); 
    const originalData = arr; // Ensure original data exists

    return (
        <>
            <Header 
                A={A} 
                setA={setA} 
                originalData={originalData} 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory} 
            />
            <Body A={A} />
            <Footer />
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
