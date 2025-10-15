let currentTarget = '';

function updateTarget() {
    const targetInput = document.getElementById('target');
    const target = targetInput.value.trim();
    
    if (!target) {
        alert('Please enter a target domain');
        return;
    }
    
    // Remove protocol if present
    currentTarget = target.replace(/^https?:\/\//, '').replace(/^www\./, '');
    
    // Visual feedback
    targetInput.style.borderColor = '#4CAF50';
    setTimeout(() => {
        targetInput.style.borderColor = '#667eea';
    }, 1000);
    
    // Update placeholder to show current target
    targetInput.placeholder = `Current target: ${currentTarget}`;
}

function openDork(dorkQuery) {
    if (!currentTarget) {
        alert('Please set a target domain first');
        document.getElementById('target').focus();
        return;
    }
    
    // Replace TARGET placeholder with actual target
    const finalQuery = dorkQuery.replace(/TARGET/g, currentTarget);
    
    // Construct Google search URL
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(finalQuery)}`;
    
    // Open in new tab
    window.open(googleUrl, '_blank');
}

// Allow Enter key to set target
document.getElementById('target').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        updateTarget();
    }
});

// Auto-focus on target input when page loads
window.addEventListener('load', function() {
    document.getElementById('target').focus();
});

// Add some interactive feedback
document.querySelectorAll('.dork-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});
