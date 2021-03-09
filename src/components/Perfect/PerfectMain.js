import React from 'react';
import Perfect from '../Perfect/Perfect';
import './Perfect.css'
import img2 from '../Perfect/images/2.jpeg'
const PerfectMain = () => {
    return (
        <>
        <h3 id = "perhead">Perfect for This Season</h3>
       <Perfect
        imgsrc = {img2}
           head = "8 Easy Instant Pot Recipes"
           fonttext = "APPETIZER / SOUP"
           head2 = "Enjoy My Favourite Molten  Chocolate Cake"
           fonttext2 = "BREAD / SWEET "
           head3 = "The Best Spaghetti Meal Sauce"
           fonttext3 = "PASTA "
       />
       <Perfect 
            head = "Brain Power Blueberry"
           fonttext = "BEVERAGES / SWEET"
           head2 = "Almond Pastry Cookies"
           fonttext2 = "SWEET "
           head3 = "Rose Syrup Ice Tea"
           fonttext3 = "PASTA "
       />
        </>
    )

}


export default PerfectMain;

