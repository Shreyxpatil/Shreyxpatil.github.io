// Resume JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Print functionality
    const printButton = document.createElement('button');
    printButton.innerHTML = '<i class="fas fa-print"></i> Print Resume';
    printButton.className = 'print-button';
    printButton.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    printButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
    });
    
    printButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.3)';
    });
    
    document.body.appendChild(printButton);
    
    // Download PDF functionality (placeholder)
    const downloadButton = document.createElement('button');
    downloadButton.innerHTML = '<i class="fas fa-download"></i> Download PDF';
    downloadButton.className = 'download-button';
    downloadButton.style.cssText = `
        position: fixed;
        top: 70px;
        right: 20px;
        background: white;
        color: #667eea;
        border: 2px solid #667eea;
        padding: 10px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    downloadButton.addEventListener('click', function() {
        // This would typically generate a PDF
        alert('PDF download functionality would be implemented here. You can use libraries like jsPDF or Puppeteer to generate PDFs.');
    });
    
    downloadButton.addEventListener('mouseenter', function() {
        this.style.background = '#667eea';
        this.style.color = 'white';
        this.style.transform = 'translateY(-2px)';
    });
    
    downloadButton.addEventListener('mouseleave', function() {
        this.style.background = 'white';
        this.style.color = '#667eea';
        this.style.transform = 'translateY(0)';
    });
    
    document.body.appendChild(downloadButton);
    
    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation classes for print button visibility
    const buttons = document.querySelectorAll('.print-button, .download-button');
    buttons.forEach(button => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            button.style.transition = 'all 0.3s ease';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 1000);
    });
    
    // Hide buttons when printing
    const mediaQuery = window.matchMedia('print');
    mediaQuery.addListener(function(mq) {
        if (mq.matches) {
            buttons.forEach(button => {
                button.style.display = 'none';
            });
        } else {
            buttons.forEach(button => {
                button.style.display = 'block';
            });
        }
    });
    
    // Add hover effects to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.background = '#667eea';
            this.style.color = 'white';
            this.style.transform = 'scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.background = '#f8f9fa';
            this.style.color = '#667eea';
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add click-to-copy functionality for contact information
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.title = 'Click to copy';
        
        item.addEventListener('click', function() {
            const text = this.textContent.trim();
            navigator.clipboard.writeText(text).then(() => {
                // Show temporary feedback
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                this.style.color = '#28a745';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    });
    
    // Add progress bars for skills (optional enhancement)
    function addSkillProgress() {
        const skillCategories = document.querySelectorAll('.skill-category');
        skillCategories.forEach(category => {
            const skillTags = category.querySelectorAll('.skill-tag');
            skillTags.forEach((tag, index) => {
                const progressBar = document.createElement('div');
                progressBar.className = 'skill-progress';
                progressBar.style.cssText = `
                    width: 100%;
                    height: 4px;
                    background: #e9ecef;
                    border-radius: 2px;
                    margin-top: 5px;
                    overflow: hidden;
                `;
                
                const progressFill = document.createElement('div');
                progressFill.style.cssText = `
                    height: 100%;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 2px;
                    width: 0%;
                    transition: width 1s ease;
                `;
                
                progressBar.appendChild(progressFill);
                tag.parentNode.insertBefore(progressBar, tag.nextSibling);
                
                // Animate progress bar
                setTimeout(() => {
                    const skillLevel = Math.min(85 + (index * 5), 100); // Simulate skill levels
                    progressFill.style.width = skillLevel + '%';
                }, index * 200);
            });
        });
    }
    
    // Uncomment the line below to enable skill progress bars
    // addSkillProgress();
    
    // Add section visibility tracking
    const sections = document.querySelectorAll('.resume-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + P for print
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            window.print();
        }
        
        // Ctrl/Cmd + S for download (placeholder)
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            downloadButton.click();
        }
    });
    
    // Add loading animation
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        opacity: 1;
        transition: opacity 0.5s ease;
    `;
    
    const loadingSpinner = document.createElement('div');
    loadingSpinner.style.cssText = `
        width: 50px;
        height: 50px;
        border: 3px solid #f3f3f3;
        border-top: 3px solid #667eea;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    `;
    
    loadingOverlay.appendChild(loadingSpinner);
    document.body.appendChild(loadingOverlay);
    
    // Hide loading overlay after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.remove();
            }, 500);
        }, 1000);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .skill-tag {
            transition: all 0.3s ease;
        }
        
        .contact-item {
            transition: all 0.3s ease;
        }
        
        .contact-item:hover {
            background: #f8f9fa;
            padding: 5px;
            border-radius: 5px;
        }
    `;
    document.head.appendChild(style);
    
    console.log('Resume page loaded successfully!');
});
