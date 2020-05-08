// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const tabsEntry = document.querySelector('.topics')

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(response => {
        const topicsArray = response.data.topics
        topicsArray.forEach(item => {
            const topicTab = createTabs(item)
            tabsEntry.appendChild(topicTab)
        });
        console.log("worked")
    })
    .catch(error => {
        console.log("failed")
    })

function createTabs(topic){
    const topicTab = document.createElement('div')
    topicTab.classList = ('tab')
    topicTab.textContent = topic
    return topicTab
}
