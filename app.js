document.addEventListener('DOMContentLoaded', () => {
    // Post Detail Modal Logic
    const postModal = document.getElementById('post-modal');
    const modalTitle = document.getElementById('modal-post-title');
    const modalBody = document.getElementById('modal-post-body');
    const modalImage = document.getElementById('modal-post-image');
    const closePostModalBtn = document.getElementById('close-post-modal');

    // Select all post cards
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(card => {
        const btn = card.querySelector('.btn-view-detail');
        if (btn) {
            btn.addEventListener('click', () => {
                const title = card.querySelector('.post-title').innerText;
                const fullContentHtml = card.querySelector('.post-full-content').innerHTML;
                const imgSrc = card.querySelector('.post-thumbnail').src;
                const imgAlt = card.querySelector('.post-thumbnail').alt;

                modalTitle.innerText = title;
                modalBody.innerHTML = fullContentHtml;
                modalImage.src = imgSrc;
                modalImage.alt = imgAlt;

                postModal.classList.remove('hidden');
                postModal.classList.add('flex');
                document.body.classList.add('overflow-hidden');
            });
        }
    });

    // Close Post Modal function
    function closePostModal() {
        postModal.classList.add('hidden');
        postModal.classList.remove('flex');
        document.body.classList.remove('overflow-hidden');
    }

    if (closePostModalBtn) {
        closePostModalBtn.addEventListener('click', closePostModal);
    }
    if (postModal) {
        postModal.addEventListener('click', (e) => {
            if (e.target === postModal) {
                closePostModal();
            }
        });
    }

    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle clicked item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Privacy Policy Modal Logic
    const privacyModal = document.getElementById('privacy-modal');
    const openPrivacyBtn = document.getElementById('open-privacy');
    const closePrivacyBtn = document.getElementById('close-privacy');

    if (openPrivacyBtn && privacyModal) {
        openPrivacyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            privacyModal.classList.remove('hidden');
            privacyModal.classList.add('flex');
            document.body.classList.add('overflow-hidden');
        });
    }

    function closePrivacyModal() {
        if (privacyModal) {
            privacyModal.classList.add('hidden');
            privacyModal.classList.remove('flex');
            document.body.classList.remove('overflow-hidden');
        }
    }

    if (closePrivacyBtn) {
        closePrivacyBtn.addEventListener('click', closePrivacyModal);
    }
    if (privacyModal) {
        privacyModal.addEventListener('click', (e) => {
            if (e.target === privacyModal) {
                closePrivacyModal();
            }
        });
    }

    // Escape key listener for modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePostModal();
            closePrivacyModal();
        }
    });
});
