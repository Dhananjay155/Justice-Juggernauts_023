document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelector('.all-seats');
    for (let i = 0; i < 59; i++) {
        const isBooked = Math.random() < 0.5 ? 'booked' : '';
        seats.insertAdjacentHTML('beforeend', `
            <input type="checkbox" name="tickets" id="s${i + 2}">
            <label for="s${i + 2}" class="seat ${isBooked}"></label>
        `);
    }

    const tickets = seats.querySelectorAll('input');
    tickets.forEach(ticket => {
        ticket.addEventListener('change', updateTotal);
    });

    document.getElementById('theme-button').addEventListener('click', toggleTheme);

    document.querySelector('button').addEventListener('click', () => {
        const selectedSeats = Array.from(document.querySelectorAll('input[name="tickets"]:checked'))
            .map(seat => seat.id.substring(1));
        const amount = document.querySelector('.amount').textContent;
        const count = document.querySelector('.count').textContent;
        const date = document.querySelector('input[name="date"]:checked').nextElementSibling.textContent;
        const time = document.querySelector('input[name="time"]:checked').nextElementSibling.textContent;

        localStorage.setItem('bookingDetails', JSON.stringify({
            seats: selectedSeats,
            amount,
            count,
            date,
            time
        }));

        window.location.href = 'payment.html';
    });
});

function updateTotal() {
    const checkedTickets = document.querySelectorAll('input[name="tickets"]:checked');
    const count = checkedTickets.length;
    const amount = count * 200;
    document.querySelector('.amount').textContent = amount;
    document.querySelector('.count').textContent = count;
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
}
