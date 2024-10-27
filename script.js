// // Get search form and input
// const searchForm = document.getElementById('searchForm');
// const searchInput = document.getElementById('searchInput');

// // Add event listener for form submission
// searchForm.addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent form submission

//     const searchTerm = searchInput.value.trim(); // Get search term
//     const accordionItems = document.querySelectorAll('.accordion-item');
//     let found = false; // Track if the term is found

//     // Clear previous highlights
//     accordionItems.forEach(item => {
//         const button = item.querySelector('.accordion-button');
//         const originalTitle = button.textContent.replace(/\s+/g, ' ').trim(); // Keep spaces intact
//         button.innerHTML = originalTitle; // Reset title
//     });

//     // Highlight searched text and scroll to it
//     if (searchTerm) {
//         accordionItems.forEach(item => {
//             const button = item.querySelector('.accordion-button');
//             const title = button.textContent;

//             // Create a regular expression for case-insensitive search
//             const regex = new RegExp(`\\s*(${searchTerm})\\s*`, 'gi');
//             if (regex.test(title)) {
//                 found = true; // Set found to true if a match is found

//                 // Replace matches with highlighted text while managing spaces
//                 const highlightedTitle = title.replace(regex, (match, p1) => {
//                     const leftSpace = match.startsWith(' ') ? ' &nbsp; ' : '';
//                     const rightSpace = match.endsWith(' ') ? ' &nbsp; ' : '';
//                     return `${leftSpace}<span class="highlight">${p1}</span>${rightSpace}`;
//                 });

//                 button.innerHTML = highlightedTitle;

//                 // Scroll to the accordion item
//                 item.scrollIntoView({ behavior: 'smooth', block: 'center' });

//                 // Expand the accordion item if it is collapsed
//                 if (!item.classList.contains('show')) {
//                     button.click();
//                 }
//             }
//         });

//         // If not found, show alert
//         if (!found) {
//             alert(`Search term  "${searchTerm}"  not found.`);
//         }
//     }
// });

// Get search form and input
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

// Add event listener for form submission
searchForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const searchTerm = searchInput.value.trim(); // Get search term
    const accordionItems = document.querySelectorAll('.accordion-item');
    let found = false; // Track if the term is found

    // Clear previous highlights
    accordionItems.forEach(item => {
        const button = item.querySelector('.accordion-button');
        const originalTitle = button.textContent.replace(/\s+/g, ' ').trim(); // Keep spaces intact
        button.innerHTML = originalTitle; // Reset title
    });

    // Highlight searched text and scroll to it
    if (searchTerm) {
        accordionItems.forEach(item => {
            const button = item.querySelector('.accordion-button');
            const title = button.textContent;

            // Create a regular expression for case-insensitive search
            const regex = new RegExp(`\\s*(${searchTerm})\\s*`, 'gi');
            if (regex.test(title)) {
                found = true; // Set found to true if a match is found

                // Replace matches with highlighted text while managing spaces
                const highlightedTitle = title.replace(regex, (match, p1) => {
                    const leftSpace = match.startsWith(' ') ? ' &nbsp; ' : '';
                    const rightSpace = match.endsWith(' ') ? ' &nbsp; ' : '';
                    return `${leftSpace}<span class="highlight">${p1}</span>${rightSpace}`;
                });

                button.innerHTML = highlightedTitle;

                // Scroll to the accordion item
                item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });

        // If not found, show alert
        if (!found) {
            alert(`Search term "${searchTerm}" not found.`);
        }
    }
});
