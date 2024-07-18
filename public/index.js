




// start hiren code
const searchBox = document.getElementById("searchBox");
        const clearButton = document.getElementById("clearButton");
        const container = document.getElementById("container");
        const pagination = document.getElementById("pagination");
        let timeoutID;
        let currentPage = 1;
        let totalPages = 1;

        // Fetch initial movies on page load
        window.onload = () => {
            fetchMovies();
        };

        const fetchMovies = async (searchTerm = "", page = 1) => {
            const URL = `https://www.omdbapi.com/?apikey=1e16119&s=${searchTerm || "movie"}&page=${page}`;
            const res = await fetch(URL);
            const data = await res.json();
            if (data.Response === "True") {
                totalPages = Math.ceil(data.totalResults / 20); // 20 cards per page
                showData(data.Search.slice(0, 20)); // Display only the first 20 results
                showPagination();
            } else {
                container.innerHTML = "<p>No results found</p>";
                pagination.innerHTML = "";
            }
        };

        const handleSearchInput = async () => {
            currentPage = 1;
            fetchMovies(searchBox.value, currentPage);
        };

        const showData = (dataArr) => {
            container.innerHTML = "";
            dataArr.forEach((ele) => {
                const card = document.createElement("div");
                card.classList.add("card");

                const title = document.createElement("p");
                title.innerHTML = `<b>Title:</b> ${ele.Title}`;

                const poster = document.createElement('img');
                poster.src = ele.Poster !== "N/A" ? ele.Poster : "https://via.placeholder.com/150";

                const bookButton = document.createElement('button');
                bookButton.innerText = "Book Ticket";
                bookButton.addEventListener('click', () => {
                    alert(`Bill for ${ele.Title}`);
                });

                card.append(poster, title, bookButton);
                container.append(card);
            });
        };

        const showPagination = () => {
            pagination.innerHTML = "";

            const prevButton = document.createElement("button");
            prevButton.innerText = "Previous";
            prevButton.disabled = currentPage === 1;
            prevButton.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    fetchMovies(searchBox.value, currentPage);
                }
            });

            const nextButton = document.createElement("button");
            nextButton.innerText = "Next";
            nextButton.disabled = currentPage === totalPages;
            nextButton.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    fetchMovies(searchBox.value, currentPage);
                }
            });

            const pageInfo = document.createElement("span");
            pageInfo.innerText = `Page ${currentPage} of ${totalPages}`;

            pagination.append(prevButton, pageInfo, nextButton);
        };

        const debounce = (fn, delay) => {
            return (...args) => {
                if (timeoutID) {
                    clearTimeout(timeoutID);
                }
                timeoutID = setTimeout(() => {
                    fn(...args);
                }, delay);
            };
        };

        searchBox.addEventListener('input', debounce(handleSearchInput, 1000));

        // Clear button functionality
        clearButton.addEventListener('click', () => {
            searchBox.value = ""; // Clear the input
            currentPage = 1; // Reset to first page
            fetchMovies(); // Fetch default movies
        });


//end hiren code 


