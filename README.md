

To Do
 - [] Fetching content
   - [] separate function to generate hash and url
   - [] fetch inside useEffect as async operation
 - [] Searching content based on input (basic ver)
   - set input element
   - assign state to control input element
   - when user clicked the button, set the state assigned for holding text to search
   - include the state as dependency for the useEffect
   - useEffect gets triggered which pass the state to fetch
   - [] check/correct search before sending
 - [] Open image on new page
    - react-router-dom is used
    - Link is used to link to new path
    - Result/data about the corresponding comic gets passed to the new component
         via location.state (useLocation), of the Link component
    - results/data is used, extracted via destructuring
    - [] what if you visited the page path directly without cliking the image
 - [] Search comic based on choosen entity
   - checkbox