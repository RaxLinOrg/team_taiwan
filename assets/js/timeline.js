document.addEventListener('DOMContentLoaded', () => {
    const timelineTrack = document.getElementById('timeline-track');
    const dateLabel = document.getElementById('date-label');
    const modal = document.getElementById('event-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-btn');

    // Fetch the manifest for the current category and language
    fetch('manifest.json')
        .then(response => response.json())
        .then(events => {
            // Sort events descending (latest first) using string comparison for YYYY-MM-DD
            events.sort((a, b) => b.date.localeCompare(a.date));
            renderTimeline(events);
            setupScrollListener(events);
        });

    function renderTimeline(events) {
        timelineTrack.innerHTML = '';
        events.forEach((event, index) => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.dataset.date = event.date;
            item.innerHTML = `
                <div class="date">${event.date}</div>
                <h2>${event.title}</h2>
            `;
            item.addEventListener('click', () => openModal(event.date));
            timelineTrack.appendChild(item);
        });
    }

    function setupScrollListener(events) {
        window.addEventListener('scroll', () => {
            const items = document.querySelectorAll('.timeline-item');
            let currentItem = items[0];
            
            items.forEach(item => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight / 2) {
                    currentItem = item;
                }
            });

            if (currentItem) {
                dateLabel.textContent = currentItem.dataset.date;
            }
        });
    }

    function openModal(date) {
        // Fetch the default.md file from the dated directory
        fetch(`${date}/default.md`)
            .then(response => response.text())
            .then(text => {
                modalBody.innerHTML = parseMarkdown(text);
                
                // Add image if it exists (placeholder logic)
                const img = document.createElement('img');
                img.src = `${date}/img/related_image_1.jpg`;
                img.onerror = () => img.remove(); // Remove if image not found
                modalBody.appendChild(img);

                modal.style.display = 'block';
                // Trigger reflow for transition
                modal.offsetHeight; 
                modal.classList.add('show');
                document.body.style.overflow = 'hidden'; // Prevent scroll
            });
    }

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Match CSS transition time
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });

    // Simple Markdown Parser (Headers and Paragraphs)
    function parseMarkdown(md) {
        return md
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
            .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
            .replace(/\*(.*)\*/gim, '<i>$1</i>')
            .replace(/\n$/gim, '<br />')
            .split('\n').map(line => {
                if (!line.startsWith('<') && line.trim() !== '') {
                    return `<p>${line}</p>`;
                }
                return line;
            }).join('');
    }
});
