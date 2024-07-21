// document.addEventListener('DOMContentLoaded', () => {
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
        ticket.addEventListener('change', () => {
            let amount = document.querySelector('.amount').textContent;
            let count = document.querySelector('.count').textContent;

            amount = Number(amount);
            count = Number(count);

            if (ticket.checked) {
                count += 1;
                amount += 200;
            } else {
                count -= 1;
                amount -= 200;
            }
            document.querySelector('.amount').textContent = amount;
            document.querySelector('.count').textContent = count;
        });
    });

    document.getElementById('theme-button').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    });