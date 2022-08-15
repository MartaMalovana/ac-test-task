function Accordion (number) {
    const block = document.querySelector(`.${number}_title`);
    const hiddenBlock = document.querySelector(`.${number}_article`);
    const arrow = document.querySelector(`#${number}_arrow`);

    if(hiddenBlock.style.display === "flex") {
        hiddenBlock.style.display = "none";
        block.style.backgroundColor = "white";
        block.style.color = "inherit";
        arrow.classList.replace("fa-angle-up", "fa-angle-down");
    } else {
        hiddenBlock.style.display = "flex";
        block.style.backgroundColor = "#fdb526";
        block.style.color = "white";
        arrow.classList.replace("fa-angle-down", "fa-angle-up");
    };

    return block;
};
