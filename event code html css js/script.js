// script.js

document.querySelectorAll('.register-btn').forEach(button => {
    button.addEventListener('click', () => {
        const eventName = button.closest('.event').querySelector('h3').innerText;
        alert(`You have registered for the ${eventName}! 🎉`);
    });
});
