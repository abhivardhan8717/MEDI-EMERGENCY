document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const driverRegisterForm = document.getElementById('driver-register-form');
    const emergencyBtn = document.getElementById('emergency-btn');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send a request to your server to authenticate the user
            console.log('Login submitted');
            // For demonstration, we'll just enable the emergency button
            emergencyBtn.disabled = false;
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send a request to your server to register the user
            console.log('Customer registration submitted');
        });
    }

    if (driverRegisterForm) {
        driverRegisterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send a request to your server to register the driver
            console.log('Driver registration submitted');
        });
    }

    if (emergencyBtn) {
        emergencyBtn.addEventListener('click', function() {
            if (!emergencyBtn.disabled) {
                alert('Emergency services have been notified. Help is on the way!');
                // Here you would typically send a request to your server to notify drivers
            }
        });
    }
});