const content = document.getElementById('content');
let page = 1;
let limit = 10;
let isFetching = false;

async function apiGet() {
    if (isFetching) return;
    isFetching = true;

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`);
        const data = await response.json();
        
        if (data.length === 0) {
            window.removeEventListener('scroll', handleScroll);
            return;
        }

        data.forEach(d => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${d.id}). ${d.name.toUpperCase()}</strong><p><strong>Email</strong> : ${d.email}</p><p><strong>Comments</strong> : ${d.body}</p>`;
            content.append(div);
            div.style.padding = '20px';
            div.style.backgroundColor = '#f4f4f4';
            div.style.borderRadius = '10px';
            div.style.margin = '10px';
            div.style.boxShadow = '0px 0px 5px gray';
        });
        page++;
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        isFetching = false;
    }
}

function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        apiGet();
    }
}

apiGet();
window.addEventListener('scroll', handleScroll);
