// Centralized Links Management File
// Update all external links here for easy maintenance

const LINKS = {
    // Personal Information
    personal: {
        name: "Shreyas Patil",
        title: "Machine Learning Engineer | Data Analyst | Python | SQL | Deep Learning",
        email: "shreyas.syp@outlook.com",
        phone: "+917620280740",
        location: "Kolhapur, Maharashtra, India",
        linkedin: "https://www.linkedin.com/in/shreypatil/",
        github: "https://github.com/Shreyxpatil"
    },

    // Project Links
    projects: {
        sarSatelliteColorization: {
            github: "https://github.com/Shreyxpatil/SAR-Satellite-Colorization",
            demo: "https://shreyxpatil.github.io/sar-colorization-demo",
            description: "SAR Satellite Image Colorization for Climate Monitoring"
        },
        stockPrediction: {
            github: "https://github.com/Shreyxpatil/Stock-Price-Prediction-LSTM",
            demo: "https://shreyxpatil.github.io/stock-prediction-demo",
            description: "Stock Price Prediction using LSTM Networks"
        },
        aiChatbot: {
            github: "https://github.com/Shreyxpatil/AI-Chatbot-Sentiment-Analysis",
            demo: "https://shreyxpatil.github.io/ai-chatbot-demo",
            description: "AI Chatbot with Real-Time Sentiment Analysis"
        },
        alzheimersDetection: {
            github: "https://github.com/Shreyxpatil/Alzheimers-Stage-Detection",
            demo: "https://shreyxpatil.github.io/alzheimers-detection-demo",
            description: "Alzheimer's Stage Detection using Deep Learning"
        },
        emotionDetection: {
            github: "https://github.com/Shreyxpatil/Facial-Emotion-Detection",
            demo: "https://shreyxpatil.github.io/emotion-detection-demo",
            description: "Facial Emotion Detection for E-Learning Enhancement"
        },
        pragyaAI: {
            github: "https://github.com/Shreyxpatil/PragyaAI-EdTech",
            demo: "https://pragyaai.gatetutor.com",
            description: "PragyaAI EdTech Platform - AI Modules"
        }
    },

    // Certification Links
    certifications: {
        oracleGenAI: "https://www.credly.com/badges/oracle-genai-2025",
        oracleDataScience: "https://www.credly.com/badges/oracle-datascience-2025",
        oracleAIFoundations: "https://www.credly.com/badges/oracle-ai-foundations-2025",
        ibmPython: "https://www.coursera.org/account/accomplishments/certificate/python-data-science",
        nvidiaDeepLearning: "https://courses.nvidia.com/certificates/deep-learning-fundamentals",
        ciscoDataAnalytics: "https://www.credly.com/badges/cisco-data-analytics"
    },

    // Social Media Links
    social: {
        linkedin: "https://www.linkedin.com/in/shreypatil/",
        github: "https://github.com/Shreyxpatil",
        kaggle: "https://www.kaggle.com/shreyxpatil",
        twitter: "https://twitter.com/shreyxpatil",
        medium: "https://medium.com/@shreyxpatil",
        youtube: "https://youtube.com/@shreyxpatil"
    },

    // Organization Links
    organizations: {
        microsage: "https://www.microsage.com",
        gateTutor: "https://www.gatetutor.com",
        iitBombay: "https://www.iitb.ac.in",
        prarambh: "https://prarambh.org",
        simdaa: "https://www.simdaa.com",
        dypcet: "https://www.dypcet.ac.in",
        microsoftMLSA: "https://studentambassadors.microsoft.com"
    },

    // Contact Form Endpoints
    contact: {
        formEndpoint: "https://formspree.io/f/your-form-id", // Replace with actual form endpoint
        emailService: "shreyas.syp@outlook.com"
    },

    // Resume and Portfolio Links
    portfolio: {
        main: "https://shreyxpatil.github.io/portfolio",
        resume: "https://shreyxpatil.github.io/portfolio/resume.html",
        resumePDF: "https://shreyxpatil.github.io/portfolio/Shreyas_Patil_Resume.pdf"
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LINKS;
}

// Make available globally
window.PORTFOLIO_LINKS = LINKS;
