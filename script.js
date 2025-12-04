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
            synopsis: 'Una épica historia ambientada en los años dorados de Hollywood que muestra la transición del cine mudo al sonoro. La película sigue a múltiples personajes en su ascenso y caída durante una era de decadencia y exceso sin límites en los primeros días de Tinseltown.'
        },
        'perfect-days': {
            image: 'assets/img/movies/perfect_days.jpeg',
            title: 'Perfect Days',
            author: 'Dir. Wim Wenders',
            year: '2023',
            synopsis: 'Un limpiador de baños públicos en Tokio encuentra belleza y significado en su rutina diaria aparentemente simple. Una meditación contemplativa sobre la búsqueda de la felicidad en los pequeños momentos y la conexión humana en la vida moderna.'
        },
        'eternal-sunshine': {
            image: 'assets/img/movies/Eterno_resplandor.jpeg',
            title: 'Eternal Sunshine of the Spotless Mind',
            author: 'Dir. Michel Gondry',
            year: '2004',
            synopsis: 'Una pareja se somete a un procedimiento médico para borrar los recuerdos de su relación fallida. Una exploración poética y surrealista del amor, la memoria y la identidad, cuestionando si olvidar el dolor también significa perder lo que hace valiosa la experiencia humana.'
        },
        // Books
        'crimen-y-castigo': {
            image: 'assets/img/books/crime_castigo.jpeg',
            title: 'Crimen y Castigo',
            author: 'Fiódor Dostoyevski',
            year: '1866',
            synopsis: 'La obra maestra de Dostoyevski sigue a Raskólnikov, un estudiante empobrecido en San Petersburgo que comete un asesinato para probar su teoría de que ciertos individuos están por encima de la ley moral. Una exploración profunda de la psicología humana, la culpa, la redención y la naturaleza del bien y el mal.'
        },
        'rebelion-atlas': {
            image: 'assets/img/books/rebelion_atlas.jpeg',
            title: 'La Rebelión de Atlas',
            author: 'Ayn Rand',
            year: '1957',
            synopsis: 'Una novela filosófica que presenta un mundo donde los creadores, innovadores y empresarios se declaran en huelga contra una sociedad que los explota. Una defensa del individualismo, el capitalismo y la razón, explorando las consecuencias de un mundo sin mentes creativas.'
        },
        'east-of-eden': {
            image: 'assets/img/books/east_of_eden.jpeg',
            title: 'East of Eden',
            author: 'John Steinbeck',
            year: '1952',
            synopsis: 'Una saga familiar épica ambientada en el Valle de Salinas, California, que reinterpreta la historia bíblica de Caín y Abel a través de dos generaciones de familias. Una exploración profunda de la bondad y la maldad, el libre albedrío y la lucha por la aceptación y el amor paterno.'
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

