Install node packages before running using "npm install"

So the UI is divided into 3 components defined in the App component
1)Navbar
2)Filter
3)Cards
4)Loading (Generally hidden, its only seen until the UI gets rendered until)

Component1 - Filter
Filter features has 5 categories defined in data.js, we needed to create buttons for each so i used  .map() function which return an array.
Instead of using map function we could have defined button 5 times, but that would be hard coding and would not update automatically when data gets added to data.js
Also onClick event was simultaneously defined for each button so that whenever user clicks on the button the category gets recorded to the button that got clicked.
Then using the useState feature we get updated of the current state and also update the css property(highliting the border of the clicked button) for the following.


Component 2-Cards
Contents of cards- We have 5 categories fetched from API which then contain informations with different ID

Data fetched from API is passed onto cards.js
Initially when the page is rendered the default category is 'All' so we need  an array which contain all the objects into an single array which initially is seperated into 5 categories as fetched from API.
So to get the result we used nested for loops to achieve so.
The return part of the component is the selected course array contents, from Filter part


Component3-Card
We have an empty array definrd with help of useState effect to keep track of liked courses by the user, which raises a toast on clicking the like button gets added to likedCourses array.
This is achieved using the clickHandler Function which checks if an course id is already included in the likedCourses array if yes then it modifies the array.
Although if it doesn't exist in likedCourses array we first clone the old array (likedCourses) using the spread operator(...) and then addd an course to the new array.

The return part of the Card component consist of Card designed using Tailwind.



