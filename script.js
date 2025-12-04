// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
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
        'bravos-energy': {
            logo: 'assets/img/logos/bravos_energia.png',
            company: 'Bravos Energy',
            role: 'Data Analyst',
            date: 'Jan 2025 - Aug 2025',
            details: [
                'Working on a high-impact data project involving SQL tables with millions of rows using Polars',
                'Extract structured insights for trading-related operations in a high-responsibility, NDA-bound environment'
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

    // Check if all elements exist
    if (!modal || !closeModalBtn || !modalLogo || !modalCompany || !modalRole || !modalDate || !modalDetails) {
        console.error('Modal elements not found');
        return;
    }

    // Get all logo items
    const logoItems = document.querySelectorAll('.logo-item');

    if (logoItems.length === 0) {
        console.error('Logo items not found');
        return;
    }

    // Function to open modal with company data
    function openModal(companyKey) {
        const data = experienceData[companyKey];
        if (!data) {
            console.error('Company data not found for:', companyKey);
            return;
        }

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
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const companyKey = item.getAttribute('data-company');
            if (companyKey) {
                openModal(companyKey);
            }
        });
        
        // Make it clear it's clickable
        item.style.cursor = 'pointer';
    });

    // Close modal when clicking close button
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        });
    }

    // Close modal when clicking overlay
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Library data (movies and books)
    const libraryData = {
        // Movies
        'babylon': {
            image: 'assets/img/movies/Babylon.jpeg',
            title: 'Babylon',
            author: 'Dir. Damien Chazelle',
            year: '2022',
            synopsis: 'An epic story set in the golden age of Hollywood that shows the transition from silent films to talkies. The film follows multiple characters in their rise and fall during an era of decadence and boundless excess in the early days of Tinseltown.'
        },
        'perfect-days': {
            image: 'assets/img/movies/perfect_days.jpeg',
            title: 'Perfect Days',
            author: 'Dir. Wim Wenders',
            year: '2023',
            synopsis: 'A public restroom cleaner in Tokyo finds beauty and meaning in his seemingly simple daily routine. A contemplative meditation on finding happiness in small moments and human connection in modern life.'
        },
        'eternal-sunshine': {
            image: 'assets/img/movies/Eterno_resplandor.jpeg',
            title: 'Eternal Sunshine of the Spotless Mind',
            author: 'Dir. Michel Gondry',
            year: '2004',
            synopsis: 'A couple undergoes a medical procedure to erase memories of their failed relationship. A poetic and surreal exploration of love, memory, and identity, questioning whether forgetting pain also means losing what makes human experience valuable.'
        },
        // Books
        'crimen-y-castigo': {
            image: 'assets/img/books/crime_castigo.jpeg',
            title: 'Crime and Punishment',
            author: 'Fyodor Dostoevsky',
            year: '1866',
            synopsis: 'Dostoevsky\'s masterpiece follows Raskolnikov, an impoverished student in St. Petersburg who commits a murder to prove his theory that certain individuals are above moral law. A deep exploration of human psychology, guilt, redemption, and the nature of good and evil.'
        },
        'rebelion-atlas': {
            image: 'assets/img/books/rebelion_atlas.jpeg',
            title: 'Atlas Shrugged',
            author: 'Ayn Rand',
            year: '1957',
            synopsis: 'A philosophical novel that presents a world where creators, innovators, and entrepreneurs go on strike against a society that exploits them. A defense of individualism, capitalism, and reason, exploring the consequences of a world without creative minds.'
        },
        'east-of-eden': {
            image: 'assets/img/books/east_of_eden.jpeg',
            title: 'East of Eden',
            author: 'John Steinbeck',
            year: '1952',
            synopsis: 'An epic family saga set in the Salinas Valley, California, that reinterprets the biblical story of Cain and Abel through two generations of families. A deep exploration of good and evil, free will, and the struggle for acceptance and paternal love.'
        }
    };

    // Get library modal elements
    const libraryModal = document.getElementById('libraryModal');
    const closeLibraryModalBtn = document.getElementById('closeLibraryModal');
    const libraryModalImage = document.getElementById('libraryModalImage');
    const libraryModalTitle = document.getElementById('libraryModalTitle');
    const libraryModalAuthor = document.getElementById('libraryModalAuthor');
    const libraryModalYear = document.getElementById('libraryModalYear');
    const libraryModalSynopsis = document.getElementById('libraryModalSynopsis');

    // Check if library modal elements exist
    if (!libraryModal || !closeLibraryModalBtn || !libraryModalImage || !libraryModalTitle || 
        !libraryModalAuthor || !libraryModalYear || !libraryModalSynopsis) {
        console.error('Library modal elements not found');
    } else {
        // Function to open library modal
        function openLibraryModal(itemKey) {
            const data = libraryData[itemKey];
            if (!data) {
                console.error('Library item data not found for:', itemKey);
                return;
            }

            libraryModalImage.src = data.image;
            libraryModalImage.alt = data.title;
            libraryModalTitle.textContent = data.title;
            libraryModalAuthor.textContent = data.author;
            libraryModalYear.textContent = data.year;
            libraryModalSynopsis.textContent = data.synopsis;

            // Show modal with animation
            libraryModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Function to close library modal
        function closeLibraryModal() {
            libraryModal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Get all gallery items (movies and books)
        const galleryItems = document.querySelectorAll('.gallery-item');

        // Add click event listeners to gallery items
        galleryItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const itemType = item.getAttribute('data-type');
                const itemKey = item.getAttribute('data-item');
                
                if (itemType && itemKey) {
                    openLibraryModal(itemKey);
                }
            });
            
            // Make it clear it's clickable
            item.style.cursor = 'pointer';
        });

        // Close library modal when clicking close button
        if (closeLibraryModalBtn) {
            closeLibraryModalBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeLibraryModal();
            });
        }

        // Close library modal when clicking overlay
        if (libraryModal) {
            libraryModal.addEventListener('click', function(e) {
                if (e.target === libraryModal) {
                    closeLibraryModal();
                }
            });
        }

        // Close library modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && libraryModal.classList.contains('active')) {
                closeLibraryModal();
            }
        });
    }
});

