// Sidebar toggle
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

// Handle prediction result
document.addEventListener('DOMContentLoaded', function () {
    const result = predictionResultFromServer;
    const resultBox = document.getElementById('predictionResult');

    if (result === "1" || result === "0") {
        const isPositive = result === "1";
        const resultMessage = isPositive
            ? 'High Risk of Breast Cancer Detected'
            : 'No Risk of Breast Cancer Detected';
        const resultDetails = isPositive
            ? 'Our model predicts a high likelihood of breast cancer. Please consult a healthcare professional.'
            : 'Our model predicts no significant risk of breast cancer. Regular check-ups are still recommended.';

        const icon = resultBox.querySelector('.result-icon i');
        icon.className = isPositive ? 'fas fa-exclamation-triangle' : 'fas fa-check-circle';
        icon.style.color = isPositive ? '#FF6584' : '#6C63FF';

        const contentDiv = resultBox.querySelector('.result-content');
        contentDiv.innerHTML = `
            <h3>${resultMessage}</h3>
            <p>${resultDetails}</p>
            <p class="result-value">Model Output: ${result}</p>
        `;

        resultBox.style.backgroundColor = isPositive ? 'rgba(255, 101, 132, 0.1)' : 'rgba(108, 99, 255, 0.1)';
    }
});
