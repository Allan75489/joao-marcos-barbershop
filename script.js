function handleBooking() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const serviceEl = document.getElementById('service');
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const toast = document.getElementById('toast');

    // Pega o texto visível do select (ex: "Degradê — R$ 15")
    const serviceText = serviceEl.options[serviceEl.selectedIndex].text;

    if (!name || !serviceEl.value || !date || !time) {
        toast.textContent = '⚠ Preencha nome, serviço, data e horário.';
        toast.style.background = '#8B1A1A';
        toast.style.color = '#F5EDD8';
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
        return;
    }

    // Formata a data para dd/mm/aaaa
    const [year, month, day] = date.split('-');
    const dateFormatted = `${day}/${month}/${year}`;

    // Monta a mensagem
    const message =
`Olá, João Marcos Barber! Gostaria de confirmar um agendamento:

👤 Nome: ${name}
${phone ? `📞 Telefone: ${phone}\n` : ''}💈 Serviço: ${serviceText}
📅 Data: ${dateFormatted}
🕐 Horário: ${time}

Aguardo a confirmação. Obrigado!`;

    // Número do WhatsApp
    const whatsappNumber = '5583993932632';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Mostra toast e abre WhatsApp
    toast.textContent = `✦ Redirecionando para o WhatsApp, ${name}!`;
    toast.style.background = '#C9A84C';
    toast.style.color = '#0F0D0A';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);

    setTimeout(() => window.open(url, '_blank'), 800);

    // Limpa o formulário
    ['name', 'phone', 'service', 'date', 'time'].forEach(id => {
        document.getElementById(id).value = '';
    });
}

// Data mínima = hoje
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});