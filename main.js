function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.tab-button[onclick="showSection('${sectionId}')"]`).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 세부일정 탭 클릭 시 항상 1일차가 보이도록
    if (sectionId === 'itinerary') {
        showItineraryDay('day1');
    }
}

function showItineraryDay(dayId) {
    const itineraryContents = document.querySelectorAll('.iti-content');
    itineraryContents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(dayId).classList.add('active');

    const itineraryButtons = document.querySelectorAll('.iti-button');
    itineraryButtons.forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.iti-button[onclick="showItineraryDay('${dayId}')"]`).classList.add('active');
}

function showMealDay(dayId) {
    const mealContents = document.querySelectorAll('.meal-content');
    mealContents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(dayId).classList.add('active');

    const mealButtons = document.querySelectorAll('.iti-button');
    mealButtons.forEach(button => {
        if (button.onclick.toString().includes('showMealDay')) {
            button.classList.remove('active');
        }
    });
    document.querySelector(`.iti-button[onclick="showMealDay('${dayId}')"]`).classList.add('active');
}

function toggleAttractionDetail(id) {
    const content = document.getElementById(id);
    const header = content.previousElementSibling;
    const icon = header.querySelector('.toggle-icon');

    if (content.classList.contains('active')) {
        content.classList.remove('active');
        icon.textContent = '+';
    } else {
        content.classList.add('active');
        icon.textContent = '−';
    }
}

function toggleSafetyDetail(id) {
    const content = document.getElementById(id);
    const header = content.previousElementSibling;
    const icon = header.querySelector('.toggle-icon');

    if (content.classList.contains('active')) {
        content.classList.remove('active');
        icon.textContent = '+';
    } else {
        content.classList.add('active');
        icon.textContent = '−';
    }
}

function toggleHospitalDetail(id) {
    const content = document.getElementById(id);
    const header = content.previousElementSibling;
    const icon = header.querySelector('.toggle-icon');

    if (content.classList.contains('active')) {
        content.classList.remove('active');
        icon.textContent = '+';
    } else {
        content.classList.add('active');
        icon.textContent = '−';
    }
}

// New function for toggling "기타" details
function toggleOtherDetail(id) {
    const content = document.getElementById(id);
    const header = content.previousElementSibling;
    const icon = header.querySelector('.toggle-icon');

    if (content.classList.contains('active')) {
        content.classList.remove('active');
        icon.textContent = '+';
    } else {
        content.classList.add('active');
        icon.textContent = '−';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('overview');
    
    const itineraryContents = document.querySelectorAll('.iti-content');
    itineraryContents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById('day1').classList.add('active');
    
    const mealContents = document.querySelectorAll('.meal-content');
    mealContents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById('meal-day1').classList.add('active');
});
