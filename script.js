        document.addEventListener('DOMContentLoaded', () => {
            const contactListDiv = document.getElementById('contactList');
            const currentChatName = document.getElementById('currentChatName');
            const chatMessagesDiv = document.getElementById('chatMessages');
            const tabButtons = document.querySelectorAll('.tab-button');
            const sectionPanes = document.querySelectorAll('.section-pane');

            // Using a placeholder logo as no image was provided
            // For a real app, replace `logo.png` with your actual logo path.
            // Example: <img src="images/logo.png" ...> if it's in an images folder.

            // Sample data for contacts (with two-sided chat content)
            const contacts = [
                {
                    id: '1',
                    name: 'محمد محمود',
                    whatsapp: '+97059215682',
                    bankAccount: '37210579',
                    lastChatDate: '01/01/2023',
                    chatContent: [
                        { type: 'text', sender: 'other', message: 'مرحباً، هل لديك تحديث حول الدفعة؟' },
                        { type: 'text', sender: 'you', message: 'نعم، تم دفع 100 شيكل يوم أمس.' },
                        { type: 'text', sender: 'other', message: 'شكراً جزيلاً.' },
                        { type: 'text', sender: 'you', message: 'العفو.' },
                        { type: 'text', sender: 'other', message: 'ممتاز. ننتظر الباقي.' },
                        { type: 'text', sender: 'you', message: 'إن شاء الله في أقرب وقت.' },
                        { type: 'text', sender: 'other', message: 'تمام.' },
                        { type: 'text', sender: 'you', message: 'هل هناك أي شيء آخر؟' },
                        { type: 'text', sender: 'other', message: 'لا، هذا كل شيء حالياً. شكراً لك.' },
                        { type: 'text', sender: 'you', message: 'العفو. إلى اللقاء.' },
                        { type: 'text', sender: 'other', message: 'مرحباً، هل لديك تحديث حول الدفعة؟' },
                        { type: 'text', sender: 'you', message: 'نعم، تم دفع 100 شيكل يوم أمس.' },
                        { type: 'text', sender: 'other', message: 'شكراً جزيلاً.' },
                        { type: 'text', sender: 'you', message: 'العفو.' },
                        { type: 'text', sender: 'other', message: 'ممتاز. ننتظر الباقي.' },
                        { type: 'text', sender: 'you', message: 'إن شاء الله في أقرب وقت.' },
                        { type: 'text', sender: 'other', message: 'تمام.' },
                        { type: 'text', sender: 'you', message: 'هل هناك أي شيء آخر؟' },
                        { type: 'text', sender: 'other', message: 'لا، هذا كل شيء حالياً. شكراً لك.' },
                        { type: 'text', sender: 'you', message: 'العفو. إلى اللقاء.' }
                    ]
                },
                {
                    id: '2',
                    name: 'أحمد علي',
                    whatsapp: '+970599123456',
                    bankAccount: '12345678',
                    lastChatDate: '15/02/2023',
                    chatContent: [
                        { type: 'text', sender: 'other', message: 'صباح الخير، متى يمكنني تسديد المبلغ المتبقي؟' },
                        { type: 'text', sender: 'you', message: 'أهلاً بك، يمكنك في أي وقت يناسبك.' },
                        { type: 'text', sender: 'other', message: 'هل أنت متوفر بعد الظهر؟' },
                        { type: 'text', sender: 'you', message: 'نعم، أنا متوفر بعد الساعة 3 مساءً.' }
                    ]
                },
                {
                    id: '3',
                    name: 'فاطمة خالد',
                    whatsapp: '+970568765432',
                    bankAccount: '98765432',
                    lastChatDate: '10/03/2023',
                    chatContent: [
                        { type: 'text', sender: 'other', message: 'مرحباً، هل يمكنني دفع جزء من الدين هذا الأسبوع؟' },
                        { type: 'text', sender: 'you', message: 'بالتأكيد، أخبريني متى يناسبك.' },
                        { type: 'text', sender: 'other', message: 'سأقوم بالتحويل يوم الخميس.' },
                        { type: 'text', sender: 'you', message: 'تمام، بانتظار التحويل.' }
                    ]
                },
                {
                    id: '4',
                    name: 'سارة يوسف',
                    whatsapp: '+970592345678',
                    bankAccount: '11223344',
                    lastChatDate: '05/04/2023',
                    chatContent: [
                        { type: 'text', sender: 'other', message: 'مساء الخير، هل يمكنني الحصول على كشف حساب؟' },
                        { type: 'text', sender: 'you', message: 'نعم، سأرسله لك قريباً.' }
                    ]
                },
                {
                    id: '5',
                    name: 'علي حسن',
                    whatsapp: '+970598765432',
                    bankAccount: '55667788',
                    lastChatDate: '20/05/2023',
                    chatContent: [
                        { type: 'text', sender: 'other', message: 'مرحباً، لدي استفسار حول دفعة سابقة.' },
                        { type: 'text', sender: 'you', message: 'تفضل، ما هو استفسارك؟' }
                    ]
                },
                {
                    id: '6',
                    name: 'ليلى جمال',
                    whatsapp: '+970591234567',
                    bankAccount: '99887766',
                    lastChatDate: '01/06/2023',
                    chatContent: [{ type: 'text', sender: 'other', message: 'مرحباً، هل أنت متاح الآن؟' }]
                },
                {
                    id: '7',
                    name: 'يوسف طارق',
                    whatsapp: '+970593456789',
                    bankAccount: '44332211',
                    lastChatDate: '10/06/2023',
                    chatContent: [{ type: 'text', sender: 'you', message: 'نعم، تفضل.' }]
                },
                {
                    id: '8',
                    name: 'ندى عادل',
                    whatsapp: '+970594567890',
                    bankAccount: '12312312',
                    lastChatDate: '15/06/2023',
                    chatContent: [{ type: 'text', sender: 'other', message: 'مرحباً.' }]
                },
                {
                    id: '9',
                    name: 'طارق سامي',
                    whatsapp: '+970595678901',
                    bankAccount: '34534534',
                    lastChatDate: '20/06/2023',
                    chatContent: [{ type: 'text', sender: 'you', message: 'مرحباً.' }]
                },
                {
                    id: '10',
                    name: 'ريم حسام',
                    whatsapp: '+970596789012',
                    bankAccount: '56756756',
                    lastChatDate: '25/06/2023',
                    chatContent: [{ type: 'text', sender: 'other', message: 'كيف حالك؟' }]
                },
                {
                    id: '11',
                    name: 'فادي عماد',
                    whatsapp: '+970597890123',
                    bankAccount: '78978978',
                    lastChatDate: '30/06/2023',
                    chatContent: [{ type: 'text', sender: 'you', message: 'بخير، الحمد لله.' }]
                },
                {
                    id: '12',
                    name: 'منال ناصر',
                    whatsapp: '+970598901234',
                    bankAccount: '90190190',
                    lastChatDate: '05/07/2023',
                    chatContent: [{ type: 'text', sender: 'other', message: 'هل يمكننا التحدث لاحقاً؟' }]
                }
            ];

            let selectedContactId = null;

            // Function to render the contact list (cards)
            function renderContactList() {
                contactListDiv.innerHTML = '';
                contacts.forEach(contact => {
                    const card = document.createElement('div');
                    card.classList.add('contact-card');
                    card.dataset.contactId = contact.id;

                    if (contact.id === selectedContactId) {
                        card.classList.add('active');
                    }

                    card.innerHTML = `
                        <div class="contact-name">${contact.name}</div>
                        <div class="contact-info">واتساب: ${contact.whatsapp}</div>
                        <div class="contact-info">حساب بنكي: ${contact.bankAccount}</div>
                        <div class="last-chat-date">تاريخ المحادثة: ${contact.lastChatDate}</div>
                    `;
                    contactListDiv.appendChild(card);

                    card.addEventListener('click', () => {
                        selectContact(contact.id);
                    });
                });
            }

            // Function to select a contact and display their chat and sections
            function selectContact(contactId) {
                const previouslySelectedCard = document.querySelector('.contact-card.active');
                if (previouslySelectedCard) {
                    previouslySelectedCard.classList.remove('active');
                }

                const newSelectedCard = document.querySelector(`.contact-card[data-contact-id="${contactId}"]`);
                if (newSelectedCard) {
                    newSelectedCard.classList.add('active');
                }

                selectedContactId = contactId;
                const selectedContact = contacts.find(c => c.id === contactId);

                if (selectedContact) {
                    currentChatName.textContent = selectedContact.name; // Update person's name in chat header

                    // Activate chat section automatically when a person is selected
                    showSection('chat');
                    // Display chat content
                    renderChatMessages(selectedContact.chatContent);
                }
            }

            // Function to display two-sided chat content
            function renderChatMessages(messages) {
                chatMessagesDiv.innerHTML = '';
                if (messages && messages.length > 0) {
                    messages.forEach(msg => {
                        const messageContainer = document.createElement('div');
                        messageContainer.classList.add('message-container'); // Container for alignment

                        const messageDiv = document.createElement('div');
                        messageDiv.classList.add('message');
                        messageDiv.classList.add(msg.sender); // 'you' or 'other' class

                        messageDiv.textContent = msg.message;
                        messageContainer.appendChild(messageDiv);
                        chatMessagesDiv.appendChild(messageContainer);
                    });
                } else {
                    chatMessagesDiv.innerHTML = '<p class="initial-message">لا توجد محادثات سابقة مع هذا الشخص.</p>';
                }
                // Scroll to the bottom automatically to show the latest message
                chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
            }

            // Function to control section (tab) display
            function showSection(sectionId) {
                // Remove 'active' class from all tab buttons and sections
                tabButtons.forEach(button => button.classList.remove('active'));
                sectionPanes.forEach(pane => pane.classList.remove('active'));

                // Add 'active' class to the corresponding button and section
                const activeButton = document.querySelector(`.tab-button[data-section="${sectionId}"]`);
                const activeSection = document.getElementById(`${sectionId}Section`);

                if (activeButton) {
                    activeButton.classList.add('active');
                }
                if (activeSection) {
                    activeSection.classList.add('active');
                    // If the section is active, ensure chat content is visible if it's the chat section
                    if (sectionId === 'chat' && selectedContactId) {
                        const selectedContact = contacts.find(c => c.id === selectedContactId);
                        if (selectedContact) {
                            renderChatMessages(selectedContact.chatContent);
                        }
                    }
                    // Scroll to top when switching sections (to ensure content is seen from beginning)
                    activeSection.scrollTop = 0;
                }
            }

            // Add event listeners for tab buttons
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const section = button.dataset.section;
                    showSection(section);
                });
            });

            // Call the function on first page load
            renderContactList();

            // Select the first person by default on load (to show the chat)
            if (contacts.length > 0) {
                selectContact(contacts[0].id);
            }
        });