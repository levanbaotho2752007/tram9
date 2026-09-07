const toggle = document.querySelector(".toggle__theme");
const card = document.querySelector(".app");

toggle.addEventListener("click", () => {
    let theme = toggle.querySelector(".fas");
    if (theme.classList.contains("fa-moon")) {
        theme.classList.remove("fa-moon");
        theme.classList.add("fa-sun");
        card.classList.add("dark");
    } else {
        theme.classList.remove("fa-sun");
        theme.classList.add("fa-moon");
        card.classList.remove("dark");
    }
});

const modal = document.getElementById("modal-popup");
const modalImg = document.getElementById("modal-img");
const modalClose = document.getElementById("modal-close");
const modalTriggers = document.querySelectorAll(".js-modal-trigger");

modalTriggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
        e.preventDefault();
        const imgSrc = trigger.getAttribute("data-img");
        modalImg.src = imgSrc;
        modal.classList.add("active");
    });
});

function closeModal() {
    modal.classList.remove("active");
    modalImg.src = "";
}

if (modalClose) {
    modalClose.addEventListener("click", closeModal);
}

if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

document.onselectstart = function() { return false; };

window.onload = function() {
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    }, false);

    document.addEventListener("keydown", function(e) {
        if ((e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || e.keyCode === 123) {
            disabledEvent(e);
        }
        if (e.keyCode === 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            disabledEvent(e);
        }
        if (e.ctrlKey && e.keyCode === 85) {
            disabledEvent(e);
        }
    }, false);

    function disabledEvent(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else if (window.event) {
            window.event.cancelBubble = true;
        }
        e.preventDefault();
        return false;
    }
};

document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
        return false;
    }
    return true;
};
