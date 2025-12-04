// Experience data for each company
const experienceData = {
    'md-partners': {
        logo: 'assets/img/logos/md_partners.png',
        company: 'MD Partners',
        role: 'Data Analyst',
        date: 'Aug 2025 - Present',
        details: [
            'Sales forecasting using modern libraries (Nixtlaverse)',
            'Data Engineering tasks (pipeline tech supp, API connections and metrics)'
        ]
    },
    'itam': {
        logo: 'assets/img/logos/itam.png',
        company: 'ITAM',
        role: 'Software Developer',
        date: 'Jan 2025 - Present',
        details: [
            'Maintain and improve internal label-printing system; developed two new features and fixed a major bug',
            'Create data intelligence scripts using Python and Pyplot to visualize trends and support internal decision-making'
        ]
    },
    'dxgrow': {
        logo: 'assets/img/logos/dxgrow.jpeg',
        company: 'DXgrow',
        role: 'SAP BTP Junior Consultant',
        date: '2022 - 2023',
        details: [
            'Integrated SAP BTP with a third-party signing platform using Python',
            'Built mobile PoC tools using SAP BTP SDK'
        ]
    },
    'sisvoxsoft': {
        logo: 'assets/img/logos/sisvoxsv.png',
        company: 'SisvoxSoft',
        role: 'Junior Full-Stack Developer',
        date: '2021 - 2022',
        details: [
            'Refactored dashboard code, reducing load time by 50% and support tickets by 20%',
            'Built interactive graphs with Highcharts.js, boosting customer satisfaction by 15%',
            'Resolved 20+ bugs across frontend and backend'
        ]
    }
};

// Get modal elements
const modal = document.getElementById('experienceModal');
const closeModalBtn = document.getElementById('closeModal');
const modalLogo = document.getElementById('modalLogo');
const modalCompany = document.getElementById('modalCompany');
const modalRole = document.getElementById('modalRole');
const modalDate = document.getElementById('modalDate');
const modalDetails = document.getElementById('modalDetails');

// Get all logo items
const logoItems = document.querySelectorAll('.logo-item');

// Function to open modal with company data
function openModal(companyKey) {
    const data = experienceData[companyKey];
    if (!data) return;

    modalLogo.src = data.logo;
    modalLogo.alt = data.company;
    modalCompany.textContent = data.company;
    modalRole.textContent = data.role;
    modalDate.textContent = data.date;
    
    // Clear and populate details
    modalDetails.innerHTML = '';
    data.details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        modalDetails.appendChild(li);
    });

    // Show modal with animation
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Add click event listeners to logo items
logoItems.forEach(item => {
    item.addEventListener('click', () => {
        const companyKey = item.getAttribute('data-company');
        openModal(companyKey);
    });
    
    // Make it clear it's clickable
    item.style.cursor = 'pointer';
});

// Close modal when clicking close button
closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking overlay
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

